// Write your code here

import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoesEaten = () => {
    this.setState(mango => ({mangoes: mango.mangoes + 1}))
  }

  bananasEaten = () => {
    this.setState(banana => ({bananas: banana.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="yellow">
        <div className="white">
          <h1>
            Bob ate <span className="yclr">{mangoes}</span>mangoes
            <span className="yclr">{bananas}</span>bananas
          </h1>
          <div className="fruits_orientation">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoesEaten}
              >
                Eat Mangoes
              </button>
            </div>

            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananasEaten}
              >
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
