import classnames from 'classnames/bind'
import Button from 'components/shared/Button'
import { Label, RichText, Title } from 'components/typo'
import React from 'react'
import css from './styles.module.scss'

const cx = classnames.bind(css)

function checkIfLinks(button) {
  return !!(button && button.length)
}

export default function LabelTitleText({
  label,
  title,
  button,
  text,
  children,
  className,
  linkProps,
  buttonProps,
  titleProps,
  textProps,
  theme,
}) {
  const renderRichText = () => {
    const { className, ...rest } = textProps
    return (
      <RichText
        theme="gray"
        type="Text"
        text={text}
        linksTheme={theme}
        markdownProps={{
          disallowedTypes: ['paragraph'],
          unwrapDisallowed: true,
        }}
        className={cx(css.text, className)}
        carriageReturn={true}
        {...rest}
      />
    )
  }

  return (
    <div className={cx(css.LabelTitleText, className, {})}>
      {label && (
        <Label tag="div" className={css.label} theme={theme}>
          <div className={css.animateLabel}>{label}</div>
        </Label>
      )}
      {title && (
        <Title size="large" {...titleProps} className={css.title}>
          <div className={css.titleContainer}>
            <span>{title}</span>
          </div>
        </Title>
      )}
      {text && renderRichText()}
      {checkIfLinks(button) && (
        <ul className={css.links}>
          {button &&
            button.map(({ className, ...rest }, index) => {
              return (
                <li className={css.link} key={`button-${index}`}>
                  <Button
                    {...linkProps}
                    {...buttonProps}
                    {...rest}
                    className={cx(className, css.button)}
                  />
                </li>
              )
            })}
        </ul>
      )}
      {children && (
        <div>{typeof children === 'function' ? children() : children}</div>
      )}
    </div>
  )
}
