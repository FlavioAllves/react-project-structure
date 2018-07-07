import React from 'react'
import PropTypes from 'prop-types'
import styleTitle from './styles.scss'

const Title = props => (
  <h2 className={styleTitle.title}>
    {props.text}
  </h2>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
