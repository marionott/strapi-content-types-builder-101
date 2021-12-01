import css from './styles.module.scss'
import classnames from 'classnames/bind'
import IconTitleText, {
  IconTitleTextProps,
} from '~/components/shared/IconTitleText'
import LabelTitleText, {
  LabelTitleTextProps,
} from '~/components/shared/LabelTitleText'

const cx = classnames.bind(css)

export interface TopFeaturesProps {
  className?: string
  features?: IconTitleTextProps[]
  intro?: LabelTitleTextProps
}

export default function TopFeatures({
  className,
  features,
  intro,
}: TopFeaturesProps) {
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
                <IconTitleText key={id} className={css.item} {...feature} />
              )
            })}
        </ul>
      )}
    </section>
  )
}
