import React, { Component } from 'react'
import Link from 'next/link'
import classnames from 'classnames/bind'

import css from './styles.module.scss'
const cx = classnames.bind(css)

class CustomLink extends Component {
  static defaultProps = {
    alt: '',
    href: '#',
    target: '',
  }

  render() {
    const {
      className,
      children,
      href,
      alt,
      target,
      text,
      id,
      replace,
      shallow,
      scroll,
      forwardRef,
      external,
      contentType,
      ...rest
    } = this.props
    let correctHref = href || '/'
    const isExternal =
      correctHref.indexOf('http') === 0 || external ? true : false

    return isExternal ? (
      <a
        {...rest}
        className={cx(css.Link, className)}
        target={target || '_blank'}
        rel="noopener"
        alt={alt}
        ref={forwardRef}
        href={href}
      >
        {children || text}
      </a>
    ) : (
      <Link
        href={correctHref}
        shallow={shallow}
        scroll={scroll}
        replace={replace}
      >
        <a
          className={cx(css.Link, className)}
          ref={forwardRef}
          target={target}
          alt={alt}
          {...rest}
        >
          {children || text}
        </a>
      </Link>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <CustomLink {...props} forwardRef={ref} />
))
