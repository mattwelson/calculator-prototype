import React from 'react'
import defaults from './logic/defaults'

import Calculator from './Calculator'
import Settings from './Settings'

import './calculator.css'

class CalculatorContainer extends React.Component {
  state = {
    settings: { ...defaults },
    term: 1,
    payment: 4,
    freq: 3
  }

  handleChange = e => {
    const {target} = e
    console.log(e)
    this.setState(() => ({
      [target.name]: Math.round(target.value)
    }))
    this.invertSlider(target)
  }

  invertSlider = ({name, value}) => {
    const slave = name === "term" ? "payment" : name === "payment" ? "term" : null
    this.setState(() => ({
      [slave]: 5 - value
    })) 
  }

  render() {
    return (
      <div className="calc">
        <Calculator
          term={this.state.term}
          payment={this.state.payment}
          freq={this.state.freq}
          handleChange={this.handleChange}
        />
        <Settings />
      </div>
    )
  }
}

export default CalculatorContainer
