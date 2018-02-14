// functions that help the calc run
// https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
export const getPayment = state => {
  const monthlyInterest = state.interest / 100 / 12
  const paymentPerMonth = Math.round(
    state.monthlyFee +
    monthlyInterest *
      (state.principal + state.establishmentFee) /
      (1 - (1 + monthlyInterest) ** (-1 * state.term)))
  const amountPayable = paymentPerMonth * state.term
  const paymentPerFreq = Math.round(getFrequency(state.freq).modifier * paymentPerMonth)
  return {
    ...state,
    paymentPerMonth,
    paymentPerFreq,
    amountPayable
  }
}

// get summary, will take in the state and return a string summarising the agreement

// get terms, will take in state and return a summary of the terms and conditions if the calculation has been run, if not will return generic T&C

export const getFrequency = freq => {
  return {
    1: { name: 'Weekly', modifier: 12 / 52, value: 'W' },
    2: { name: 'Fortnightly', modifier: 24 / 52, value: 'F' },
    3: { name: 'Monthly', modifier: 1, value: 'M' }
  }[freq]
}
