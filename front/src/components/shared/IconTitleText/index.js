import classnames from 'classnames/bind'
import Image from 'components/shared/Image'
import { Title } from 'components/typo'
import RichText from 'components/typo/RichText'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function IconTitleText({ className, icon, title, text }) {
  return (
    <div className={cx(css.IconTitleText, className)}>
      <div className={css.container}>
        {icon && icon?.url && (
          <div className={css.iconContainer}>
            <div className={css.iconWrapper}>
              <Image
                className={css.icon}
                src={`${process.env.NEXT_PUBLIC_API_URL}${icon.url}`}
                media={icon}
              />
            </div>
          </div>
        )}
        {title && (
          <div>
            <Title size="small" className={css.title}>
              {title}
            </Title>
          </div>
        )}
      </div>
      {text && (
        <div className={css.textWrapper}>
          <RichText
            text={text}
            type="Text"
            size="medium"
            markdownProps={{
              disallowedTypes: ['paragraph'],
              unwrapDisallowed: true,
            }}
          />
        </div>
      )}
    </div>
  )
}
