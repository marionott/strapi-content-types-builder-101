import React from 'react'
import Link from 'components/shared/Link'
import delve from 'dlv'

import classnames from 'classnames/bind'

import css from './styles.module.scss'

const cx = classnames.bind(css)

const Logo = ({ className, onContextMenu, url, alt = 'Strapi logo' }) => (
  <Link
    onContextMenu={onContextMenu}
    className={cx(css.Logo, className)}
    as="/"
    href="/"
  >
    <img className={css.img} alt={alt} src={url} />
  </Link>
)

const LogoWrapper = ({ dark, customLogo, ...rest }) => {
  const alt = delve(customLogo, 'alt')
  return (
    <Logo
      url={`/assets/strapi-logo-${dark ? 'dark' : 'light'}.svg`}
      alt={alt}
      {...rest}
    />
  )
}

export default LogoWrapper
