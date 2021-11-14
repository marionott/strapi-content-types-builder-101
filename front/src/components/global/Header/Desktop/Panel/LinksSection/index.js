import classnames from 'classnames/bind'
import Link from 'components/shared/Link'
import { Text } from 'components/typo'
import typo from 'components/typo/typography.module.scss'
import delve from 'dlv'
import React from 'react'
import styles from './styles.module.scss'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

const LinksSection = ({ className, title, links, onLinkClick }) => {
  return (
    <div className={cx(css.LinksSection, className)}>
      {title && (
        <Text size="small" theme="dark" className={css.title}>
          {title}
        </Text>
      )}

      {links && links.length > 0 && (
        <ul className={css.links}>
          {links.map((link) => {
            const id = delve(link, 'id')
            const text = delve(link, 'label')

            return (
              <li key={id} className={css.link}>
                <Link key={id} {...link} onClick={onLinkClick}>
                  <Text tag="span" size="medium" theme="gray">
                    {text}
                  </Text>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default LinksSection
