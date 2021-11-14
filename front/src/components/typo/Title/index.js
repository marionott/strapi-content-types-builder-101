import React, { Component } from 'react'
import Typo from 'components/typo/Typo'

export default class Title extends Component {
  static defaultProps = {
    tag: 'h1',
    theme: 'dark'
  }

  render() {
    return <Typo type="Title" {...this.props} />
  }
}
