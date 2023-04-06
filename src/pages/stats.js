import Head from 'next/head';
import { ComingSoon } from '@/components/error';


export default function Stats() {
  return (
    <>
      <Head>
        <title>Bagels - Stats</title>
        <meta 
          name="description" 
          content="History of Bagels guild scores." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}