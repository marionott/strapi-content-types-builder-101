import React, { useRef } from 'react'
import classnames from 'classnames/bind'
import delve from 'dlv'

import { Text } from 'components/typo'
import Link from 'components/shared/Link'

import typo from 'components/typo/typography.module.scss'
import styles from './styles.module.scss'

const css = Object.assign({}, styles, typo)
const cx = classnames.bind(css)

const getTheme = (navIsDark, isActive) => {
  switch (navIsDark) {
    case true:
      if (isActive) return 'purple'
      return 'bay-blue'
    case false:
      return 'white'
  }
}

const NavigationLabel = ({
  className,
  children,
  index,
  onMouseEnter,
  onMouseLeave,
  isActive,
  dark,
  label,
  withPanel,
}) => {
  const lineRef = useRef()
  const theme = getTheme(dark, isActive)
  const text = delve(label, 'text')
  const href = delve(label, 'href')
  const target = delve(label, 'target')
  const contentType = delve(label, 'contentType')

  const Wrapper = href ? Link : 'div'
  const wrapperProps =
    Wrapper === 'div'
      ? {}
      : {
          href,
          target,
          contentType,
        }

  return (
    <li
      className={cx(css.NavigationLabel, className)}
      onMouseEnter={() => onMouseEnter && onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <Wrapper className={css.wrapper} {...wrapperProps}>
        <div className={css.label}>
          <Text tag="span" size="small" theme={theme} className={css.labelText}>
            <span>{text || label}</span>
            {withPanel && <span className={css.arrow} />}
          </Text>
          <div className={css.labelTextLineContainer}>
            <div ref={lineRef} className={cx(css.labelTextLine, { dark })} />
          </div>
        </div>
      </Wrapper>
      {children}
    </li>
  )
}

export default NavigationLabel
