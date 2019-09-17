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
}))`
  font-family: sans-serif;
  display: flex;
  max-width: 500px;
  padding: 20px;
  background-color: ${({ variant }) => backgroundColor[variant]};
  color: ${({ variant }) => textColor[variant]};
`

Alert.propTypes = {
  variant: PropTypes.oneOf(['info', 'error', 'warning', 'success']),
}

Alert.defaultProps = {
  variant: 'info',
}

export default Alert

const Content = styled.div`
  margin-left: 20px;
`

const Heading = styled.h2`
  font-size: ${fontsize.heading};
  font-weight: 400;
  margin: 0;
`

const Body = styled.div`
  font-size: ${fontsize.body};
`

export { Content, Heading, Body }
