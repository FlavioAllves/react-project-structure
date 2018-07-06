import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import layout from './home.scss'
import pathImg from '../images/darh_vader.png'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'StarQuiz',
      description: 'Test your knowledge!',
      btnText: 'Try now',
    }
  }

  handleStartQuiz = () => {
    this.props.history.push('/quiz')
  }

  render() {
    return (
      <div className={layout.container}>
        <h2 className={layout.title}>{this.state.title}</h2>
        <img className={layout.img} src={pathImg} alt="mask" />
        <p className={layout.description}>
          {this.state.description}
        </p>
        <button
          onClick={this.handleStartQuiz}
          className={layout.btn}
        >
          {this.state.btnText}
        </button>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object,
}

Home.defaultProps = {
  history: {},
}

export default withRouter(Home)
