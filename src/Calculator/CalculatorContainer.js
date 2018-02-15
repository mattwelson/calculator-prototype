import React from 'react'
import defaults from './logic/defaults'
import { getPayment} from './logic/calc'

import Calculator from './Calculator'
import Settings from './Settings'

import './calculator.css'

class CalculatorContainer extends React.Component {
  state = { ...defaults, result: getPayment(defaults) }
  handleChange = e => {
    const { target } = e
    this.setState(() => ({
      [target.name]: Math.round(target.value),
      ...this.invertSlider(target)
    }))
    this.setState((s) => ({
      result: getPayment(s)
    }))
  }

  invertSlider = ({ name, value }) => {
    const slave =
      name === 'term' ? 'payment' : name === 'payment' ? 'term' : null
    return slave && { [slave]: 5 - value }
  }

  render() {
    console.log(this.state.result)
    return (
      <div className="calc">
        <Calculator
          principal={this.state.principal}
          term={this.state.term}
          payment={this.state.payment}
          freq={this.state.freq}
          handleChange={this.handleChange}
          result={this.state.result}
          interest={this.state.interest}
        />
        <Settings />
      </div>
    )
  }
}

export default CalculatorContainer
