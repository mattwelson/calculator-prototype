import { getPayment } from './calc'

describe('getPayment', () => {
  it('calculates the same as wikipedia example', () => {
    expect(
      getPayment({
        freq: 1,
        term: 30 * 12,
        interest: 6.5,
        principal: 200000,
        establishmentFee: 0,
        monthlyFee: 0
      }).paymentPerMonth
    ).toBe(1264)
  })

  it('calculates the same-ish as mtf.co.nz', () => {
    expect(
      getPayment({
        freq: 1,
        term: 3 * 12,
        interest: 13.75,
        principal: 20000,
        establishmentFee: 365,
        monthlyFee: 8
      }).paymentPerMonth
    ).toBe(702)
  })

  it('calculates the same-ish as mtf.co.nz - weekly', () => {
    expect(
      getPayment({
        freq: 1,
        term: 3 * 12,
        interest: 13.75,
        principal: 20000,
        establishmentFee: 365,
        monthlyFee: 8
      }).paymentPerFreq
    ).toBe(162)
  })
})
