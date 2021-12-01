import css from './styles.module.scss'
import { useRouter } from 'next/router'
import Header from 'src/components/global/Header'

export default function Page({ navigation, children }) {
  const { asPath } = useRouter()

  return (
    <>
      {navigation && <Header {...navigation} />}
      <section key={`page-${asPath}`} className={css.Page}>
        {children}
      </section>
    </>
  )
}
