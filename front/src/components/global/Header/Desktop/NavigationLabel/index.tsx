import styles from './styles.module.scss'
import classnames from 'classnames/bind'
import { MouseEventHandler, ReactNode, useRef } from 'react'
import Link, { LinkProps } from '~/components/shared/Link'
import { Text } from '~/components/typo'
import typo from '~/components/typo/typography.module.scss'

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

export interface NavigationLabelProps {
  className?: string
  children?: ReactNode | ReactNode[]
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  isActive?: boolean
  dark?: boolean
  label?: LinkProps
  withPanel?: boolean
}

export default function NavigationLabel({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  isActive,
  dark,
  label,
  withPanel,
}: NavigationLabelProps) {
  const lineRef = useRef()
  const theme = getTheme(dark, isActive)
  const { text, href, target } = label ?? {}

  const Wrapper = href ? Link : 'div'

  return (
    <li
      className={cx(css.NavigationLabel, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Wrapper
        className={css.wrapper}
        {...(href && { href })}
        {...(target && { target })}
      >
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
