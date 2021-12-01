import LinksSection, { LinksSectionProps } from './LinksSection'
import Push, { PushProps } from './Push'
import styles from './styles.module.scss'
import classnames from 'classnames/bind'
import typo from '~/components/typo/typography.module.scss'

const css = Object.assign({}, styles, typo)

const cx = classnames.bind(css)

export interface PanelProps {
  className?: string
  navigationLabel?: string
  sections?: LinksSectionProps[]
  pushes?: PushProps[]
  onLinkClick?: () => void
  isVisible?: boolean
}

export default function Panel({
  className,
  sections,
  pushes,
  onLinkClick,
  isVisible,
}: PanelProps) {
  return (
    <div className={cx(css.Panel, className, { isVisible })}>
      <div className={css.card}>
        <div className={cx(css.linksWrapper, { isVisible })}>
          <div className={css.linkSections}>
            {sections.map((section, id) => (
              <LinksSection key={id} onLinkClick={onLinkClick} {...section} />
            ))}
          </div>
        </div>
        {pushes && pushes.length > 0 && (
          <div className={css.pushes}>
            {pushes.map((push, id) => {
              return <Push key={id} onLinkClick={onLinkClick} {...push} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}
