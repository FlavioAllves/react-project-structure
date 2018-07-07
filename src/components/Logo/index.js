import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../images/darth-vader.svg'

class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: this.props.size.lg,
    }
  }

  componentWillMount() {
    /* global window */
    this.updateSize()
    window.addEventListener('resize', this.updateSize)
  }

  // SIZE IS REQUIRED
  updateSize = () => {
    /* global window */
    if (window.innerWidth >= 1024) return this.setState(() => ({ width: this.props.size.lg }))
    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      return this.setState(() => ({ width: this.props.size.md }))
    }
    return this.setState(() => ({ width: this.props.size.sm }))
  }

  render() {
    return (
      <div>
        <Logo
          width={this.state.width}
          height={this.state.width}
        />
      </div>
    )
  }
}

Title.propTypes = {
  size: PropTypes.object.isRequired,
}

export default Title

