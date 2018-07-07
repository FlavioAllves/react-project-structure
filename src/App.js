import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap-grid.css'
import '!style-loader!css-loader!react-table/react-table.css'
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved */
import Routes from './router'
import layout from './styles/layout.scss'

class _App extends Component {
  componentDidMount() {
    console.log('working...')
  }
  render() {
    /* global window */
    const background = window.location.pathname === '/quiz' ? layout.indexQuiz : ''
    return (
      <Router>
        <div className={`${layout.index} ${background}`}>
          <Routes />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  initial: state.initial,
})

const App = connect(mapStateToProps, null)(_App)

export default App
