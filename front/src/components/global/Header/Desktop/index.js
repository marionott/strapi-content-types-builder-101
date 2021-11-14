import classnames from 'classnames/bind'
import Logo from 'components/shared/Logo'
import React, { useState } from 'react'
import NavigationLabel from './NavigationLabel'
import Panel from './Panel'
import css from './styles.module.scss'

const cx = classnames.bind(css)

const Desktop = ({ className, panels, customLogo }) => {
  const [visiblePanel, setVisiblePanel] = useState()
  const hidePanel = () => setVisiblePanel(null)

  const idleHidePanel = () => {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(hidePanel)
    } else {
      hidePanel()
    }
  }

  return (
    <header className={cx(css.Desktop, className)}>
      <div className={css.maxWidth}>
        <nav className={css.nav}>
          <Logo className={css.logo} customLogo={customLogo} />
          <ul className={css.links}>
            {panels &&
              panels.map((panel, id) => {
                const isActive = visiblePanel === id
                const withPanel =
                  panel.sections.length > 0 || panel.pushes.length > 0

                return (
                  <NavigationLabel
                    key={id}
                    index={id}
                    onMouseEnter={(index) => {
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
                        panelId={id}
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

Desktop.defaultProps = {
  links: [],
}

export default Desktop
