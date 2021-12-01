import themes from '../themes.module.scss'
import typography from '../typography.module.scss'
import classnames from 'classnames/bind'
import { forwardRef, ReactNode, RefObject } from 'react'

const css = Object.assign({}, themes, typography)

const cx = classnames.bind(css)

export interface TypoComponentWrapperProps {
  className?: string
  type?: 'Label' | 'Title' | 'Text'
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div'
  >
  theme?:
    | 'white'
    | 'dark'
    | 'lynch'
    | 'gray'
    | 'blue'
    | 'bay-blue'
    | 'selago'
    | 'purple'
    | 'green'
    | 'red'
    | 'background'
  size?: 'smaller' | 'small' | 'normal' | 'medium' | 'big' | 'large' | 'legend'
  children?: ReactNode | ReactNode[]
  forwardRef?: HTMLHtmlElement
}

function TypoComponentWrapper(
  {
    className,
    type,
    tag: Wrapper = 'p',
    theme = 'gray',
    size,
    children,
    forwardRef,
    ...rest
  }: TypoComponentWrapperProps,
  ref: RefObject<any>
) {
  return (
    <Wrapper className={cx(type, className, size, theme)} ref={ref} {...rest}>
      {children}
    </Wrapper>
  )
}

export default forwardRef<HTMLElement, TypoComponentWrapperProps>(
  TypoComponentWrapper
)
