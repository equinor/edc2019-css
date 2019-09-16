import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Alert, { Content, Heading, Body } from '../components/Alert'
import Icon from '../components/Icon'

const variants = ['info', 'error', 'warning', 'success']

storiesOf('Alert', module)
  .add('Information', () => (
    <Alert variant={`${select('Variant', variants, 'info')}`}>
      <Icon icon={`${select('Icon', variants, 'info')}`} />
      <Content>
        <Heading>{text('Heading', 'Information alert heading')}</Heading>
        <Body>{text('Body', 'This is an information message')}</Body>
      </Content>
    </Alert>
  ))
  .add('Error', () => (
    <Alert variant="error">
      <Icon icon="error" />
      <Content>
        <Heading>Error alert heading</Heading>
        <Body>This is an error message</Body>
      </Content>
    </Alert>
  ))
  .add('Warning', () => (
    <Alert variant="warning">
      <Icon icon="warning" />
      <Content>
        <Heading>Error alert heading</Heading>
        <Body>This is an error message</Body>
      </Content>
    </Alert>
  ))
  .add('Success', () => (
    <Alert variant="success">
      <Icon icon="success" />
      <Content>
        <Heading>Error alert heading</Heading>
        <Body>This is an error message</Body>
      </Content>
    </Alert>
  ))
