import React from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Management Chat App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Trang cho phép quản lý dữ liệu của ứng dụng chat"/>
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
    )
}

export default MyApp