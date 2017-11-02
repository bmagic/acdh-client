import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from './styles.scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <link rel='icon' type='image/png' href='/static/img/favicon/favicon-16x16.png' sizes='16x16' />
          <link rel='icon' type='image/png' href='/static/img/favicon/favicon-32x32.png' sizes='32x32' />
          <link rel='icon' type='image/png' href='/static/img/favicon/favicon-96x96.png' sizes='96x96' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
