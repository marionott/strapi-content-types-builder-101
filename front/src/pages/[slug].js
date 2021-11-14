import SliceManager from 'components/shared/SliceManager'
import delve from 'dlv'
import React from 'react'
import { fetchPage, fetchPaths } from 'src/utils/api'

const Universals = ({ pageData }) => {
  const slices = delve(pageData, 'slices')

  return <>{slices && <SliceManager slices={slices} />}</>
}

export async function getStaticPaths() {
  const paths = await fetchPaths({ type: 'universals' })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const pageData = await fetchPage({ type: 'universals', slug: params.slug })

  if (json?.length === 0 || !json) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      pageData,
    },
  }
}

export default Universals
