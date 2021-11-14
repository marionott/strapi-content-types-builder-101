import classnames from 'classnames/bind'
import typo from 'components/typo/typography.module.scss'
import React from 'react'
import LinksSection from './LinksSection'
import Push from './Push'
import styles from './styles.module.scss'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

const Panel = ({ className, sections, pushes, onLinkClick, isVisible }) => {
  return (
    <div className={cx(css.Panel, className, { isVisible })}>
      <div className={css.card}>
        <div className={cx(css.linksWrapper, { isVisible })}>
          <div className={css.linkSections}>
            {sections.map((section, id) => {
              return (
                <LinksSection
                  key={id}
                  title={section.title}
                  links={section.links}
                  onLinkClick={onLinkClick}
                />
              )
            })}
          </div>
        </div>
        {pushes && pushes.length > 0 && (
          <div className={css.pushes}>
            {pushes.map((push, id) => {
              return (
                <Push
                  key={id}
                  onLinkClick={onLinkClick}
                  image={push.image}
                  title={push.title}
                  link={push.link}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Panel
