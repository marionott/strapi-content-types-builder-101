import React, { Component } from 'react'
import classnames from 'classnames/bind'

import { Label } from 'components/typo'
import SmallArrow from 'icons/SmallArrow'

import css from './styles.module.scss'

const cx = classnames.bind(css)

export default class ArrowLink extends Component {
  static defaultProps = {
    theme: 'white',
  }

  render() {
    const {
      className,
      layout,
      theme,
      children,
      isActive,
      onClick,
      forwardRef,
      reversed,
    } = this.props

    return (
      <span
        className={cx(css.ArrowLink, className, layout, theme, {
          isActive,
          reversed,
        })}
        onClick={onClick}
      >
        <span className={css.container} ref={forwardRef}>
          <Label theme={theme}>{children}</Label>
          <SmallArrow className={css.icon} theme={theme} />
        </span>
      </span>
    )
  }
}
