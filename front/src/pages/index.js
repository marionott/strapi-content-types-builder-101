import { fetchPage } from 'src/utils/api'
import SliceManager from '~/components/shared/SliceManager'

const Home = ({ slices }) => {
  return <>{slices && <SliceManager slices={slices} />}</>
}

export async function getStaticProps() {
  const pageData = await fetchPage({ type: 'homepage' })
  return { props: pageData }
}

export default Home
