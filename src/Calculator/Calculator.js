import React from 'react'

// A calculator prototype
// Text box with amount
// Term slider
// Freq slider or button group (both?)
// payment range slider
// sentence stating payment
// terms and conditions

export default ({ term, freq, payment, handleChange }) => (
  <div>
    <h1>Calculator</h1>
    <div>
      <input
        name="term"
        type="range"
        min="1"
        max="4"
        value={term}
        onChange={handleChange}
      />
    </div>
    <div>
      <input
        name="freq"
        type="range"
        min="1"
        max="3"
        value={freq}
        onChange={handleChange}
      />
    </div>
    <div>
      <input
        name="payment"
        type="range"
        min="1"
        max="4"
        value={payment}
        onChange={handleChange}
      />
    </div>
  </div>
)
