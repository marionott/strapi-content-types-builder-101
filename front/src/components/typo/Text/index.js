import React, { Component } from 'react'
import Typo from 'components/typo/Typo'

export default class Text extends Component {
  static defaultProps = {
    tag: 'p',
    theme: 'gray',
    size: 'normal',
  }

  render() {
    return <Typo type="Text" {...this.props} />
  }
}
