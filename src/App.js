import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap-grid.css'
import '!style-loader!css-loader!react-table/react-table.css'
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved */
import Routes from './router'
import layout from './styles/layout.scss'

@CSSModules(layout)
class _App extends Component {
  componentDidMount() {
    console.log('working...')
  }
  render() {
    return (
      <Router>
        <div styleName="viabilidade">
          <div styleName="content">
            <Routes />
          </div>
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
