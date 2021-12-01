import Typo from '~/components/typo/TypoComponentWrapper'
import { TypoComponentWrapperProps } from '~/components/typo/TypoComponentWrapper'

export default function Label({
  tag = 'span',
  ...props
}: TypoComponentWrapperProps) {
  return <Typo type="Label" tag={tag} {...props} />
}
