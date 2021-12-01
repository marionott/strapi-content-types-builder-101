import Overlay from './Overlay'
import { ReactComponent as BurgerIcon } from './burger-icon.svg'
import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { useState } from 'react'
import { PanelProps } from '~/components/global/Header/Desktop/Panel'
import Button from '~/components/shared/Button'
import Logo from '~/components/shared/Logo'

const cx = classnames.bind(css)

interface HeaderMobileProps {
  className?: string
  dark?: boolean
  panels?: PanelProps[]
}

const Mobile = ({ className, panels, dark }: HeaderMobileProps) => {
  const [visible, setVisible] = useState(false)

  const toggleVisiblity = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className={cx(className, css.Mobile)}>
        <div className={cx(className, css.maxWidth, { dark })}>
          <nav className={css.nav}>
            <Logo className={css.logo} dark={dark} />
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
        panels={panels}
      />
    </>
  )
}

export default Mobile
