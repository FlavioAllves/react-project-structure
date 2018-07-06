import React, { Component } from 'react'
import layout from './quiz.scss'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'StarQuiz',
    }
  }
  render() {
    return (
      <div className={layout.container}>
        <h2 className={layout.title}>{this.state.title}</h2>
      </div>
    )
  }
}

export default Quiz
