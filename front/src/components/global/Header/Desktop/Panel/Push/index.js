import React from 'react'
import classnames from 'classnames/bind'

import Link from 'components/shared/Link'
import Image from 'components/shared/Image'
import { Title } from 'components/typo'
import ArrowLink from 'components/shared/ArrowLink'
import delve from 'dlv'

import typo from 'components/typo/typography.module.scss'
import styles from './styles.module.scss'

import useOnMouseEnter from 'hooks/useOnMouseEnter'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

const Push = ({ className, image, title, link, onLinkClick }) => {
  const [isHover, onMouseEnter, onMouseLeave] = useOnMouseEnter()
  return (
    <Link
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cx(css.Push, className)}
      onClick={onLinkClick}
      {...link}
    >
      <Image className={css.cover} forcedRatio={0.6} {...image} />
      <div className={css.textContent}>
        {title && (
          <Title tag="p" size="smaller" className={css.title} theme="bay-blue">
            {title}
          </Title>
        )}

        {link && (
          <ArrowLink
            isActive={isHover}
            className={css.link}
            link={link}
            theme="green"
          >
            {delve(link, 'text')}
          </ArrowLink>
        )}
      </div>
    </Link>
  )
}

export default Push
