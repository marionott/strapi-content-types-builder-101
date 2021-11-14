import React from 'react'
import Page from 'components/shared/Page'
import delve from 'dlv'
import fetch from 'isomorphic-unfetch'
import App from 'next/app'
import Error from 'next/error'
import 'reset-css/sass/_reset.scss'

export default class CustomApp extends App {
  static async getInitialProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/global`)
    const data = await res.json()
    const { navigation } = data

    return {
      navigation,
    }
  }

  render() {
    const { Component, navigation, pageProps } = this.props
    const statusCode = delve(pageProps, 'statusCode')

    return (
      <Page header={navigation}>
        {statusCode && statusCode === 404 ? (
          <Error statusCode={statusCode} />
        ) : (
          <Component {...pageProps} />
        )}
      </Page>
    )
  }
}
