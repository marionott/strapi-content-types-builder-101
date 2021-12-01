import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { ButtonProps } from '~/components/shared/Button'
import Image, { ImageProps } from '~/components/shared/Image'
import LabelTitleText from '~/components/shared/LabelTitleText'
import { TypoComponentWrapperProps } from '~/components/typo/TypoComponentWrapper'

const cx = classnames.bind(css)

export interface HeroProps {
  className?: string
  content: {
    label: string
    text: string
    theme: TypoComponentWrapperProps['theme']
    title: string
    buttons: ButtonProps[]
  }
  image: ImageProps
}

export default function Hero({ className, content, image }: HeroProps) {
  return (
    <section className={cx(css.Hero, className)}>
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
              {...content}
            />
          )}
          {image && (
            <Image
              className={css.image}
              priority={true}
              layout="fill"
              {...image}
            />
          )}
        </div>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  withTopBackgroundImage: true,
}
