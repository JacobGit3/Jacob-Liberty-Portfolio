import { NEXT_CLIENT_SSR_ENTRY_SUFFIX } from 'next/dist/shared/lib/constants'
import { Html, Head, Main, NextScript } from 'next/document'

export default function document() {
  return (
    <Html className='dark'>
      <Head>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}