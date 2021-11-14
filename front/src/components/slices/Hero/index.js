import React from 'react'
import classnames from 'classnames/bind'
import Image from 'components/shared/Image'
import LabelTitleText from 'components/shared/LabelTitleText'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function Hero({ className, content, image }) {
  return (
    <section className={cx(css.Hero, className)}>
      <div className={css.background} />
      <div className={css.heroWrapper}>
        <div className={css.innerWrapper}>
          {content && (
            <LabelTitleText
              titleProps={{
                theme: 'white',
                size: 'extra-large',
                tag: 'h1',
              }}
              textProps={{
                theme: 'white',
                className: css.text,
                tag: 'h2',
              }}
              textWithLinkProps={{
                theme: 'white',
              }}
              {...content}
            />
          )}
          <div className={css.imageContainer}>
            {image && image?.url && (
              <div className={css.imageWrapper}>
                <Image
                  forceShadow
                  src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
                  media={image}
                  className={css.image}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  withTopBackgroundImage: true,
}
