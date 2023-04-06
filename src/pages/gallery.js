import Head from 'next/head';
import { ComingSoon } from '@/components/error';


export default function Gallery() {
  return (
    <>
      <Head>
        <title>Bagels - Gallery</title>
        <meta 
          name="description" 
          content="Guild pics!" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}