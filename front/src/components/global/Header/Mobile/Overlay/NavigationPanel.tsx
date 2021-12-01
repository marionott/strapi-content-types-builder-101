import css from './styles.module.scss'
import { PanelProps } from '~/components/global/Header/Desktop/Panel'
import Link from '~/components/shared/Link'
import { Text, Title } from '~/components/typo'
import { StrapiLink } from '~/utils/types'

interface NavigationPanelProps extends PanelProps {
  link?: StrapiLink
  onClick?: () => void
}

const NavigationPanel = ({ link, sections, onClick }: NavigationPanelProps) => {
  const renderLinks = (link) => {
    if (!link) return null

    return (
      <Text
        tag="span"
        className={css.link}
        size="small"
        key={`link-${link.id}`}
      >
        <Link onClick={onClick} target={link.target} href={link.href}>
          {link.label}
        </Link>
      </Text>
    )
  }

  return (
    <li className={css.section}>
      <Title tag="p" className={css.title} size="small">
        {link &&
          (link.href ? (
            <Link href={link.href} target={link.target}>
              {link.label}
            </Link>
          ) : (
            <span>{link.label || link}</span>
          ))}
      </Title>
      {sections &&
        sections.length > 0 &&
        sections.map((section) => (
          <ul key={`section-links-${section.id}`} className={css.links}>
            {section.links.map(renderLinks)}
          </ul>
        ))}
    </li>
  )
}

export default NavigationPanel
