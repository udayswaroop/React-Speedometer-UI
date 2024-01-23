// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevCount => ({speed: prevCount.speed + 10}))
    } else {
      this.setState(prevCount => ({speed: prevCount.speed}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevCount => ({speed: prevCount.speed - 10}))
    } else {
      this.setState(prevCount => ({speed: prevCount.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">
            <i>SPEEDOMETER</i>
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img-logo"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="accelerate-btn"
              onClick={this.onIncrement}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="brake-btn"
              onClick={this.onDecrement}
              type="button"
            >
              Apply Brakes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
