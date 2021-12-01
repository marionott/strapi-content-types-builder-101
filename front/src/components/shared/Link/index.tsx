import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { ReactNode, forwardRef, RefObject, DOMAttributes } from 'react'

const cx = classnames.bind(css)

export interface LinkProps extends NextLinkProps, DOMAttributes<any> {
  className?: string
  children?: ReactNode | ReactNode[]
  target?: string
  text?: string
  id?: string
  external?: boolean
}

function Link(
  {
    className,
    children,
    href,
    target = '',
    text,
    id,
    replace,
    shallow,
    scroll,
    external,
    ...rest
  }: LinkProps,
  forwardRef: RefObject<HTMLAnchorElement>
) {
  let correctHref = (href as string) ?? '/'
  const isExternal =
    correctHref.indexOf('http') === 0 || external ? true : false

  return isExternal ? (
    <a
      {...rest}
      className={cx(css.Link, className)}
      target={target ?? '_blank'}
      rel="noopener"
      ref={forwardRef}
      href={href as string}
    >
      {children || text}
    </a>
  ) : (
    <NextLink
      href={correctHref}
      shallow={shallow}
      scroll={scroll}
      replace={replace}
    >
      <a
        className={cx(css.Link, className)}
        ref={forwardRef}
        target={target}
        {...rest}
      >
        {children || text}
      </a>
    </NextLink>
  )
}

export default forwardRef<HTMLAnchorElement, LinkProps>(Link)
