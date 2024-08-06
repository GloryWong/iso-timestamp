import { describe, expect, it, vi } from 'vitest'
import { timestamp } from './index.ts'

describe('timestamp', () => {
  it('should return a string in YYYYMMDDhhmmssSSS format by default', () => {
    const result = timestamp()
    expect(result).toMatch(/^\d{17}$/)
  })

  it('should return a string in YYYYMMDDhhmmss format when millisecond is excluded', () => {
    const result = timestamp({ excludeMillisecond: true })
    expect(result).toMatch(/^\d{14}$/)
  })

  it('should return a string in YYYYMMDD format when time is excluded', () => {
    const result = timestamp({ excludeTime: true })
    expect(result).toMatch(/^\d{8}$/)
  })

  it('should return the respect string with the customized Date value', () => {
    vi.setSystemTime('2050-03-04T12:03:04.123')
    const result = timestamp(new Date(), { excludeMillisecond: true })
    expect(result).toBe('20500304120304')
  })
})
