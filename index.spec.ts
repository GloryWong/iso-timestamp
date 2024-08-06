import { describe, expect, it, vi } from 'vitest'
import timestamp from './index'

describe('name of the group', () => {
  it('should return a string in YYYYMMDDhhmmssSSS format by default', () => {
    const result = timestamp()
    expect(result).toMatch(/^\d{17}$/)
  })

  it('should return a string in YYYYMMDDhhmmss format when milliseconds are excluded', () => {
    const result = timestamp(undefined, { excludeMillisecond: true })
    expect(result).toMatch(/^\d{14}$/)
  })

  it('should return a string in YYYYMMDD format when time is excluded', () => {
    const result = timestamp(undefined, { excludeTime: true })
    expect(result).toMatch(/^\d{8}$/)
  })

  it('should return the respect string with the customized Date value', () => {
    vi.setSystemTime('2050-03-04T12:03:04.123')
    const result = timestamp(new Date())
    expect(result).toBe('20500304120304123')
  })
})
