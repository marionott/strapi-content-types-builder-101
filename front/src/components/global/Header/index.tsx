import Desktop from './Desktop'
import Mobile from './Mobile'
import css from './styles.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(css)

const Header = (props) => {
  return (
    <>
      <Mobile {...props} className={cx(css.smallScreenNav)} />
      <Desktop {...props} className={cx(css.largeScreenNav)} />
    </>
  )
}

export default Header
