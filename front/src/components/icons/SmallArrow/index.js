import classnames from 'classnames/bind'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

export default function SmallArrow({
  className,
  direction = 'right',
  theme = 'white',
}) {
  return (
    <svg
      className={cx(css.SmallArrow, className, theme, direction)}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
        fill="#74E4A2"
      />
      <path
        d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
        fill="#74E4A2"
      />
    </svg>
  )
}
