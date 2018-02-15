import React from 'react'

import { getFrequency } from './logic/calc'

// A calculator prototype
// Text box with amount
// Term slider
// Freq slider or button group (both?)
// payment range slider
// sentence stating payment
// terms and conditions

export default ({ principal, term, freq, payment, handleChange, result, interest }) => (
  <div>
    <h1>Calculator</h1>
    <div className="calculator">
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="text"
        value={principal}
        name="principal"
        onChange={handleChange}
      />
      <label htmlFor="term">Term</label>
      <input
        id="term"
        name="term"
        type="range"
        min={1}
        max={4}
        step="any"
        value={term}
        onChange={handleChange}
      />
      <div>{term * 12}</div>
      <label htmlFor="freq">Frequency</label>
      <input
        id="freq"
        name="freq"
        type="range"
        min="1"
        max="3"
        value={freq}
        onChange={handleChange}
      />
      <div>{getFrequency(freq) && getFrequency(freq).name}</div>
      <label htmlFor="payment">Payment</label>
      <input
        id="payment"
        name="payment"
        type="range"
        min={1}
        max={4}
        value={payment}
        onChange={handleChange}
      />
      <div className="result__summary">
        Pay ${result.paymentPerFreq} per {getFrequency(freq).period}
      </div>
      <div className="result__terms">
        Full term amount payable of ${result.amountPayable}. Default interest rate of {interest}%
      </div>
    </div>
  </div>
)
