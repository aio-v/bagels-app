import Head from 'next/head';
import { ComingSoon } from '@/components/error';


export default function TBA() {
  return (
    <>
      <Head>
        <title>Bagels - Work In Progress</title>
        <meta 
          name="description" 
          content="Feature coming soon?" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}