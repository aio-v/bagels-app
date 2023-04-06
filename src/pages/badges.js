import Head from 'next/head';
import { ComingSoon } from '@/components/error';


export default function Badges() {
  return (
    <>
      <Head>
        <title>Bagels - Badges</title>
        <meta 
          name="description" 
          content="A list of badge achievement history for guild members." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}