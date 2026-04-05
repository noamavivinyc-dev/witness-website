import 'server-only'

import type { NextRequest } from 'next/server'

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const MAX_CONTENT_LENGTH = 10_000

type RateLimitBucket = {
  count: number
  resetAt: number
}

const rateLimitBuckets = new Map<string, RateLimitBucket>()

function cleanupExpiredBuckets(now: number) {
  for (const [key, bucket] of rateLimitBuckets.entries()) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(key)
    }
  }
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function normalizePayload<T>(value: T): T {
  if (typeof value === 'string') {
    return value.trim() as T
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizePayload(item)) as T
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, normalizePayload(nestedValue)])
    ) as T
  }

  return value
}

export function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (!forwardedFor) {
    return 'unknown'
  }

  return forwardedFor.split(',')[0]?.trim().slice(0, 64) || 'unknown'
}

export function getSourcePath(req: NextRequest) {
  const referer = req.headers.get('referer')
  if (!referer) {
    return ''
  }

  try {
    const refererUrl = new URL(referer)
    return `${refererUrl.pathname}${refererUrl.search}`.slice(0, 255)
  } catch {
    return ''
  }
}

export function isAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin')
  const referer = req.headers.get('referer')
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const allowedOrigins = new Set(
    [req.nextUrl.origin, configuredSiteUrl].filter(
      (candidate): candidate is string => Boolean(candidate)
    )
  )

  const matchesAllowedOrigin = (candidate: string | null) => {
    if (!candidate) {
      return false
    }

    try {
      const parsed = new URL(candidate)
      return allowedOrigins.has(parsed.origin)
    } catch {
      return false
    }
  }

  return matchesAllowedOrigin(origin) || matchesAllowedOrigin(referer)
}

export function isValidJsonRequest(req: NextRequest) {
  const contentType = req.headers.get('content-type') || ''
  return contentType.toLowerCase().includes('application/json')
}

export function exceedsContentLengthLimit(req: NextRequest) {
  const contentLengthHeader = req.headers.get('content-length')
  if (!contentLengthHeader) {
    return false
  }

  const contentLength = Number.parseInt(contentLengthHeader, 10)
  return Number.isFinite(contentLength) && contentLength > MAX_CONTENT_LENGTH
}

export function isRateLimited(ipAddress: string) {
  const now = Date.now()
  cleanupExpiredBuckets(now)

  const existingBucket = rateLimitBuckets.get(ipAddress)

  if (!existingBucket || existingBucket.resetAt <= now) {
    rateLimitBuckets.set(ipAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (existingBucket.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  existingBucket.count += 1
  rateLimitBuckets.set(ipAddress, existingBucket)
  return false
}
