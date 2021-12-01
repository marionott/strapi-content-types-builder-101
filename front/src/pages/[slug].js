import { fetchPage, fetchPaths } from 'src/utils/api'
import SliceManager from '~/components/shared/SliceManager'

const Universals = ({ slices }) => {
  return <>{slices && <SliceManager slices={slices} />}</>
}

export async function getStaticPaths() {
  const paths = await fetchPaths({ type: 'universals' })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const pageData = await fetchPage({ type: 'universals', slug: params.slug })

  return {
    props: pageData,
  }
}

export default Universals
