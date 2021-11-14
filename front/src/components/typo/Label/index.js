import React, { Component } from 'react'
import Typo from 'components/typo/Typo'

export default class Label extends Component {
  static defaultProps = {
    tag: 'span',
  }

  render() {
    return <Typo type="Label" {...this.props} />
  }
}
