import css from './styles.module.scss'
import classnames from 'classnames/bind'
import Link from '~/components/shared/Link'

const cx = classnames.bind(css)

interface LogoProps {
  className?: string
  url?: string
  alt?: string
}

interface LogoWrapperProps extends LogoProps {
  dark?: boolean
}

function Logo({ className, url, alt = 'Strapi logo' }: LogoProps) {
  return (
    <Link className={cx(css.Logo, className)} as="/" href="/">
      <img className={css.img} alt={alt} src={url} />
    </Link>
  )
}

export default function LogoWrapper({ dark, alt, ...rest }: LogoWrapperProps) {
  return (
    <Logo
      url={`/assets/strapi-logo-${dark ? 'dark' : 'light'}.svg`}
      alt={alt}
      {...rest}
    />
  )
}
