import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ООО Хэдмейд, headmade.pro: Headmade LLC</title>
        <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="globalLoader">
</div>
      </body>
      
    </Html>
  )
}
