import TypoComponentWrapper, {
  TypoComponentWrapperProps,
} from '~/components/typo/TypoComponentWrapper'

export default function Title({
  tag = 'h1',
  theme = 'dark',
  ...props
}: TypoComponentWrapperProps) {
  return <TypoComponentWrapper type="Title" {...props} />
}
