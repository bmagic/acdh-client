import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from 'pages/styles.scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
        </Head>
        <body>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
