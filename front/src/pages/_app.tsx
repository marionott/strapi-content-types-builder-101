import { AppProps } from 'next/app'
import Error from 'next/error'
import Page from '~/components/shared/Page'
import '~/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const statusCode = pageProps?.statusCode

  return (
    <Page {...pageProps}>
      {statusCode && statusCode === 404 ? (
        <Error statusCode={statusCode} />
      ) : (
        <Component {...pageProps} />
      )}
    </Page>
  )
}
