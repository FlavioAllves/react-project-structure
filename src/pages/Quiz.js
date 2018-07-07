import React, { Component } from 'react'
import Header from '../components/Header'
import styleQuiz from './quiz.scss'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'StarQuiz!',
      sizeLogo: {
        lg: 70,
        md: 50,
        sm: 40,
      },
      time: 120000,
    }
  }

  render() {
    return (
      <div className={`${styleQuiz.container} Grid-cell`}>
        <Header
          sizeLogo={this.state.sizeLogo}
          title={this.state.title}
          time={this.state.time}
        />
      </div>
    )
  }
}

export default Quiz
