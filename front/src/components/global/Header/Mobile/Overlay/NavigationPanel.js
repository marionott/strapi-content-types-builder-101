import React from 'react'

import { Title, Text } from 'components/typo'
import Link from 'components/shared/Link'

import css from './styles.module.scss'

const NavigationPanel = ({ link, sections, onClick }) => {
  const renderLinks = (link) => {
    if (!link) return null

    return (
      <Text
        tag="span"
        className={css.link}
        size="small"
        key={`link-${link.id}`}
      >
        <Link
          onClick={onClick}
          target={link.target}
          href={link.href}
          contentType={link.contentType}
        >
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
