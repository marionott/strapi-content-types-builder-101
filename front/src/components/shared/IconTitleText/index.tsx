import css from './styles.module.scss'
import classnames from 'classnames/bind'
import Image, { ImageProps } from '~/components/shared/Image'
import { Title } from '~/components/typo'
import RichText from '~/components/typo/RichText'

const cx = classnames.bind(css)

export interface IconTitleTextProps {
  className?: string
  icon?: ImageProps
  title?: string
  text?: string
}

export default function IconTitleText({
  className,
  icon,
  title,
  text,
}: IconTitleTextProps) {
  return (
    <div className={cx(css.IconTitleText, className)}>
      <div className={css.container}>
        {icon && (
          <div className={css.iconContainer}>
            <div className={css.iconWrapper}>
              <Image className={css.icon} {...icon} />
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
