import styles from './styles.module.scss'
import classnames from 'classnames/bind'
import Link, { LinkProps } from '~/components/shared/Link'
import { Text } from '~/components/typo'
import typo from '~/components/typo/typography.module.scss'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

export interface LinksSectionProps {
  className?: string
  id?: string
  title?: string
  links?: LinkProps[]
  onLinkClick?: () => void
}

export default function LinksSection({
  className,
  title,
  links,
  onLinkClick,
}: LinksSectionProps) {
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
            const { id, text } = link ?? {}

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
