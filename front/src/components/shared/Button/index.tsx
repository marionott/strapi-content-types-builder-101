import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { DOMAttributes } from 'react'
import Link from '~/components/shared/Link'
import useOnMouseEnter from '~/hooks/useOnMouseEnter'
import { StrapiButton } from '~/utils/types'

const cx = classnames.bind(css)

export interface ButtonProps
  extends StrapiButton,
    DOMAttributes<HTMLButtonElement> {
  className?: string
  size?: string
  disabled?: boolean
  tagName?: string
  fullWidth?: string
  buttonClassName?: string
  buttonWrapperClassName?: string
  withFocus?: string
}

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
}: ButtonProps) {
  const { onMouseEnter, onMouseLeave } = useOnMouseEnter()
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
          {...link}
          {...rest}
        />
      </div>
    </div>
  )
}
