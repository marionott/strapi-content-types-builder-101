import NavigationLabel from './NavigationLabel'
import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { useState } from 'react'
import Panel from '~/components/global/Header/Desktop/Panel'
import { LinksSectionProps } from '~/components/global/Header/Desktop/Panel/LinksSection'
import { PushProps } from '~/components/global/Header/Desktop/Panel/Push'
import { LinkProps } from '~/components/shared/Link'
import Logo from '~/components/shared/Logo'

const cx = classnames.bind(css)

export interface PanelProps {
  navigationLabel?: string
  link?: LinkProps
  sections?: LinksSectionProps[]
  pushes?: PushProps[]
}

export interface DesktopProps {
  className?: string
  panels?: PanelProps[]
}

export default function Desktop({ className, panels }: DesktopProps) {
  const [visiblePanel, setVisiblePanel] = useState(null)
  const hidePanel = () => setVisiblePanel(null)

  const idleHidePanel = () => {
    if (window?.requestIdleCallback) window.requestIdleCallback(hidePanel)
    else hidePanel()
  }

  return (
    <header className={cx(css.Desktop, className)}>
      <div className={css.maxWidth}>
        <nav className={css.nav}>
          <Logo className={css.logo} />
          <ul className={css.links}>
            {panels &&
              panels.map((panel, index) => {
                const isActive = visiblePanel === index
                const withPanel =
                  panel.sections.length > 0 || panel.pushes.length > 0

                return (
                  <NavigationLabel
                    key={index}
                    onMouseEnter={() => {
                      setVisiblePanel(index)
                    }}
                    onMouseLeave={hidePanel}
                    isActive={isActive}
                    withPanel={withPanel}
                    {...panel?.link}
                  >
                    {withPanel && (
                      <Panel
                        sections={panel.sections}
                        pushes={panel.pushes}
                        isVisible={isActive}
                        onLinkClick={idleHidePanel}
                      />
                    )}
                  </NavigationLabel>
                )
              })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
