import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  // eslint-disable-next-line
  state = {count: 0}

  onIncrement = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main_container">
        <div className="small_container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
