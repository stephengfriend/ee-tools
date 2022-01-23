import { sum } from '../../src/lib/example'

describe('Sum', () => {
  it('should add two numbers together', async () => {
    expect(await sum(1, 1)).toBe(2)
  })
})
