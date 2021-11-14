import classnames from 'classnames/bind'
import Link from 'components/shared/Link'
import useOnMouseEnter from 'hooks/useOnMouseEnter'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function Button({
  className,
  theme,
  link,
  size,
  tagName,
  disabled,
  fullWidth,
  buttonClassName,
  buttonWrapperClassName,
  withFocus,
  ...rest
}) {
  const [onMouseEnter, onMouseLeave] = useOnMouseEnter(false)
  const Component = tagName || Link

  return (
    <div
      className={cx(className, size, css.buttonContainer, {
        disabled,
        withFocus,
        fullWidth,
      })}
    >
      <div
        className={cx(css.button, theme, buttonWrapperClassName, {
          fullWidth,
        })}
      >
        <span className={css.shadow} />
        <div className={cx(css.background, theme)}>
          <div className={css.hoverCircle} />
        </div>
        <Component
          className={cx(css.buttonLink, buttonClassName)}
          {...(onMouseEnter &&
            typeof onMouseEnter === 'function' && { onMouseEnter })}
          {...(onMouseLeave &&
            typeof onMouseLeave === 'function' && { onMouseLeave })}
          {...(onMouseEnter &&
            typeof onMouseEnter === 'function' && { onFocus: onMouseEnter })}
          {...(onMouseLeave &&
            typeof onMouseLeave === 'function' && { onBlur: onMouseLeave })}
          {...link}
          {...rest}
        />
      </div>
    </div>
  )
}
