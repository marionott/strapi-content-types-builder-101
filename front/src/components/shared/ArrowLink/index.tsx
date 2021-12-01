import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { forwardRef, ReactNode } from 'react'
import SmallArrow, { SmallArrowProps } from '~/components/icons/SmallArrow'
import { Label } from '~/components/typo'

const cx = classnames.bind(css)

interface ArrowLinkProps {
  className?: string
  layout?: string
  theme?: SmallArrowProps['theme']
  children?: ReactNode | ReactNode[]
  isActive?: boolean
  reversed?: boolean
  onClick?: () => void
}

function ArrowLink(
  {
    className,
    layout,
    theme = 'white',
    children,
    isActive,
    onClick,
    reversed,
  }: ArrowLinkProps,
  forwardRef
) {
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

export default forwardRef<HTMLSpanElement, ArrowLinkProps>(ArrowLink)
