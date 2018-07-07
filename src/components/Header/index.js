import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import Title from '../Title'
import CountDown from '../CountDown'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="Grid">
        <div className="Grid-cell u-sm-size7of12 u-md-size8of12 u-lg-size8of12">
          <div className="Grid u-flexAlignItemsCenter">
            <Logo
              size={this.props.sizeLogo}
            />
            <Title
              text={this.props.title}
            />
          </div>
        </div>
        <div className="Grid-cell u-sm-size5of12 u-md-size4of12 u-lg-size4of12 u-flex u-flexJustifyEnd">
          <CountDown
            time={this.props.time}
          />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  sizeLogo: PropTypes.object,
  title: PropTypes.string,
  time: PropTypes.number,
}

Header.defaultProps = {
  sizeLogo: {},
  title: '',
  time: 0,
}

export default Header

