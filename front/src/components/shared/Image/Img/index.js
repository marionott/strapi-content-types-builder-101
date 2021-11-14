import classnames from 'classnames/bind'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function Img({ src, alt, fit, position, className }) {
  return (
    <img
      className={cx(css.Img, className, { [fit]: true, [position]: true })}
      src={src}
      alt={alt}
    />
  )
}
