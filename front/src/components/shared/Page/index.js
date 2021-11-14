import Header from 'src/components/global/Header'
import { useRouter } from 'next/router'
import React from 'react'
import css from './styles.module.scss'

export default function Page({ header, children }) {
  const { asPath } = useRouter()

  return (
    <>
      {header && <Header {...header} />}
      <section key={`page-${asPath}`} className={css.Page}>
        {children}
      </section>
    </>
  )
}
