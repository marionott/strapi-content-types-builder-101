import SliceManager from 'components/shared/SliceManager'
import React from 'react'
import { fetchPage } from 'src/utils/api'

const Home = ({ pageData: { slices } }) => {
  return <>{slices && <SliceManager slices={slices} />}</>
}

export async function getStaticProps() {
  const extendedData = await fetchPage({ type: 'homepage' })
  return { props: { pageData: extendedData } }
}

export default Home
