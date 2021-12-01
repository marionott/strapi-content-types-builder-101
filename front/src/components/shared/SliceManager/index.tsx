import css from './styles.module.scss'
import Hero, { HeroProps } from '~/components/slices/Hero'
import TopFeatures, { TopFeaturesProps } from '~/components/slices/TopFeatures'

interface SliceProps {
  __component: string
  [key: string]: any
}

const getSliceComponent = (
  { __component, ...rest }: SliceProps,
  index: number
) => {
  switch (__component) {
    case 'slices.top-features':
      return (
        <TopFeatures
          key={`topFeature${index}`}
          className={css.slice}
          {...(rest as TopFeaturesProps)}
        />
      )
    case 'slices.hero':
      return (
        <Hero
          key={`hero${index}`}
          className={css.slice}
          {...(rest as HeroProps)}
        />
      )
  }
}

const SliceManager = ({ slices }) => slices.map(getSliceComponent)

SliceManager.defaultProps = {
  slices: [],
}

export default SliceManager
