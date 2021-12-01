import { PanelProps } from '../../Desktop/Panel'
import NavigationPanel from './NavigationPanel'
import { ReactComponent as Cross } from './cross.svg'
import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { forwardRef } from 'react'

const cx = classnames.bind(css)

interface OverlayProps {
  className?: string
  panels?: PanelProps[]
  toggleVisiblity?: () => void
  visible?: boolean
}

function Overlay({
  panels,
  className,
  toggleVisiblity,
  visible,
}: OverlayProps) {
  return (
    <div className={cx(css.Overlay, className, { visible })}>
      <div className={css.container}>
        <div className={css.background} />
        <div className={css.wrapper}>
          <ul className={css.list}>
            {panels &&
              panels.map((panel, i) => (
                <NavigationPanel
                  key={`${panel?.navigationLabel}-${i}`}
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

export default forwardRef<HTMLDivElement, OverlayProps>(Overlay)
