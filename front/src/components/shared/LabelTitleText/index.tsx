import css from './styles.module.scss'
import classnames from 'classnames/bind'
import { ReactNode } from 'react'
import Button, { ButtonProps } from '~/components/shared/Button'
import { Label, RichText, Title } from '~/components/typo'
import { TypoComponentWrapperProps } from '~/components/typo/TypoComponentWrapper'

const cx = classnames.bind(css)

function checkIfLinks(button) {
  return !!(button && button.length)
}

export interface LabelTitleTextProps {
  className?: string
  label?: string
  title?: string
  buttons?: ButtonProps[]
  text?: string
  children?: ReactNode | ReactNode[]
  linkProps?: {
    [key: string]: string
  }
  buttonProps?: {
    [key: string]: string
  }
  titleProps?: {
    [key: string]: string
  }
  textProps?: {
    [key: string]: string
  }
  theme?: TypoComponentWrapperProps['theme']
}

export default function LabelTitleText({
  label,
  title,
  buttons,
  text,
  children,
  className,
  linkProps,
  buttonProps,
  titleProps,
  textProps,
  theme,
}: LabelTitleTextProps) {
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
          <span className={css.titleContainer}>
            <span>{title}</span>
          </span>
        </Title>
      )}
      {text && renderRichText()}
      {checkIfLinks(buttons) && (
        <ul className={css.links}>
          {buttons?.map((button, index) => {
            return (
              <li className={css.link} key={`button-${index}`}>
                <Button
                  className={css.button}
                  {...linkProps}
                  {...buttonProps}
                  {...button}
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
