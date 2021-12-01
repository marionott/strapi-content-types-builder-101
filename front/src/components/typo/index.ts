import dynamic from 'next/dynamic'
import TypoComponentWrapper from '~/components/typo/TypoComponentWrapper'

const DynamicRichText = dynamic(() => import('~/components/typo/RichText'))
export { default as Title } from '~/components/typo/Title'
export { default as Label } from '~/components/typo/Label'
export { default as Text } from '~/components/typo/Text'
export { DynamicRichText as RichText }

export default TypoComponentWrapper
