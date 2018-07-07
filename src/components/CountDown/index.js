import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now'
import CountDownIcon from '../../images/countDown.svg'
import style from './styles.scss'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // Stop game when the time done.
  handleTimeIsUp = () => {
    /* eslint-disable */
    console.log('Your time is over !!!!!')
    /* eslint-enable */
  }

  // Renderer callback with condition
  renderFormatTime = ({
    minutes, seconds, completed,
  }) => {
    if (completed) return <span className={style.timer}>{minutes}:{seconds}</span>
    return <span className={style.timer}>{minutes}:{seconds}</span>
  }

  render() {
    return (
      <div className="Grid u-flex u-flexAlignItemsCenter">
        <CountDownIcon
          height={34}
          width={34}
        />
        <Countdown
          date={Date.now() + this.props.time}
          onComplete={this.handleTimeIsUp}
          renderer={this.renderFormatTime}
        />
      </div>
    )
  }
}

CountDown.propTypes = {
  time: PropTypes.number,
}

CountDown.defaultProps = {
  time: 0,
}

export default CountDown
