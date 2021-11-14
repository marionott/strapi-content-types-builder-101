import classnames from 'classnames/bind'
import IconTitleText from 'components/shared/IconTitleText'
import LabelTitleText from 'components/shared/LabelTitleText'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function TopFeatures({ className, features, intro }) {
  return (
    <section className={cx(className, css.TopFeatures)}>
      {intro && (
        <LabelTitleText
          {...intro}
          textProps={{ ...intro.textProps, size: 'big' }}
          className={cx(css.intro, {})}
        />
      )}
      {features && (
        <ul className={css.features}>
          {features &&
            features.map((feature, id) => {
              return (
                <IconTitleText
                  key={id}
                  index={id}
                  className={css.item}
                  {...feature}
                />
              )
            })}
        </ul>
      )}
    </section>
  )
}
