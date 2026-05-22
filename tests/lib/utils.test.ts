import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    expect(cn('p-4', { 'bg-blue-500': true })).toBe('p-4 bg-blue-500')
    expect(cn('p-4', { 'bg-blue-500': false })).toBe('p-4')
  })

  it('handles conditional classes', () => {
    const isActive = true
    expect(cn('text-gray-500', { 'text-blue-500': isActive })).toBe('text-gray-500 text-blue-500')
  })

  it('handles array of classes', () => {
    expect(cn(['p-4', 'm-2'])).toBe('p-4 m-2')
  })

  it('handles undefined/null values', () => {
    expect(cn('p-4', undefined, null, 'm-2')).toBe('p-4 m-2')
  })
})