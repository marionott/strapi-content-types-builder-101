import classnames from 'classnames/bind'
import Link from 'components/shared/Link'
import { Title } from 'components/typo'
import delve from 'dlv'
import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { ReactComponent as Cross } from './cross.svg'
import NavigationPanel from './NavigationPanel'
import css from './styles.module.scss'

const cx = classnames.bind(css)

const Overlay = ({ panels, className, toggleVisiblity, visible }) => {
  console.log({ panels })
  return (
    <div className={cx(css.Overlay, className, { visible })}>
      <div className={css.container}>
        <div className={css.background} />
        <div className={css.wrapper}>
          <ul className={css.list}>
            {panels &&
              panels.map((panel, i) => (
                <NavigationPanel
                  key={`${panel.navigationLabel}-${i}`}
                  onClick={toggleVisiblity}
                  {...panel}
                />
              ))}
          </ul>
        </div>

        <Cross className={css.cross} onClick={toggleVisiblity} />
      </div>
    </div>
  )
}

export default React.forwardRef((props, ref) => (
  <Overlay innerRef={ref} {...props} />
))
