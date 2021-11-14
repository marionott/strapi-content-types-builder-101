import React from 'react'
import TopFeatures from 'components/slices/TopFeatures'
import Hero from 'components/slices/Hero'
import classnames from 'classnames/bind'
import css from './styles.module.scss'

const cx = classnames.bind(css)

const getSliceComponent = ({ __component, ...rest }, index) => {
  let Slice

  switch (__component) {
    case 'slices.top-features':
      Slice = TopFeatures
      break
    case 'slices.hero':
      Slice = Hero
      break
  }

  return Slice ? (
    <Slice key={`index${index}`} className={css.slice} {...rest} />
  ) : null
}

const SliceManager = ({ slices }) => slices.map(getSliceComponent)

SliceManager.defaultProps = {
  slices: [],
}

export default SliceManager
