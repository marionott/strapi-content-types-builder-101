import React, { Component } from 'react'
import classnames from 'classnames/bind'

import themes from '../themes.module.scss'
import typography from '../typography.module.scss'

const css = Object.assign({}, themes, typography)

const cx = classnames.bind(css)

export default class Typo extends Component {
  static defaultProps = {
    tag: 'p',
    theme: 'gray',
  }

  render() {
    const {
      className,
      type,
      tag,
      theme,
      size,
      children,
      forwardRef,
      ...rest
    } = this.props
    const Tag = `${tag}`

    return (
      <Tag
        ref={forwardRef}
        className={cx(type, className, size, theme)}
        {...rest}
      >
        {children}
      </Tag>
    )
  }
}
