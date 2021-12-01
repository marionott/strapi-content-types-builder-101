import TypoComponentWrapper, {
  TypoComponentWrapperProps,
} from '~/components/typo/TypoComponentWrapper'

export default function Text({
  tag = 'p',
  theme = 'gray',
  size = 'normal',
  ...props
}: TypoComponentWrapperProps) {
  return (
    <TypoComponentWrapper
      type="Text"
      tag={tag}
      theme={theme}
      size={size}
      {...props}
    />
  )
}
