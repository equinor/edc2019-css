import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import tokens from '../../tokens.json'

const {
  alert: {
    color: { background: backgroundColor, text: textColor },
    typography: { fontsize },
  },
} = tokens

const Alert = styled.div.attrs(props => ({
  role: 'alert',
}))``

Alert.propTypes = {
  variant: PropTypes.oneOf(['info', 'error', 'warning', 'success']),
}

Alert.defaultProps = {
  variant: 'info',
}

export default Alert

const Content = styled.div``

const Heading = styled.h2``

const Body = styled.div``

export { Content, Heading, Body }
