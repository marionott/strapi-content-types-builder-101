import React, { useState } from 'react'
import classnames from 'classnames/bind'

import Overlay from './Overlay'
import Logo from 'components/shared/Logo'
import Button from 'components/shared/Button'
import { ReactComponent as BurgerIcon } from './burger-icon.svg'

import css from './styles.module.scss'

const cx = classnames.bind(css)

const Mobile = ({ className, home, panels, button, dark, customLogo }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisiblity = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className={cx(className, css.Mobile)}>
        <div className={cx(className, css.maxWidth, { dark })}>
          <nav className={css.nav}>
            <Logo className={css.logo} customLogo={customLogo} dark={dark} />
            <Button
              buttonClassName={css.burgerButton}
              theme="white"
              tagName="button"
            >
              <BurgerIcon
                onClick={toggleVisiblity}
                className={css.burgerIcon}
              />
            </Button>
          </nav>
        </div>
      </div>
      <Overlay
        className={cx(css.overlay)}
        visible={visible}
        toggleVisiblity={toggleVisiblity}
        home={home}
        panels={panels}
        button={button}
      />
    </>
  )
}

export default Mobile
