import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teste: 'write somethings',
    }
  }
  render() {
    return (
      <div>
        {this.state.teste}
      </div>
    )
  }
}

export default Home
