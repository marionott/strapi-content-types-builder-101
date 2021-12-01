import styles from './styles.module.scss'
import classnames from 'classnames/bind'
import ArrowLink from '~/components/shared/ArrowLink'
import Image, { ImageProps } from '~/components/shared/Image'
import Link, { LinkProps } from '~/components/shared/Link'
import { Title } from '~/components/typo'
import typo from '~/components/typo/typography.module.scss'
import useOnMouseEnter from '~/hooks/useOnMouseEnter'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

export interface PushProps {
  className?: string
  image?: ImageProps
  title?: string
  link?: LinkProps
  onLinkClick?: () => void
}

export default function Push({
  className,
  image,
  title,
  link,
  onLinkClick,
}: PushProps) {
  const { isHover, onMouseEnter, onMouseLeave } = useOnMouseEnter()
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
            isActive={isHover as boolean}
            className={css.link}
            theme="green"
          >
            {link?.text}
          </ArrowLink>
        )}
      </div>
    </Link>
  )
}
