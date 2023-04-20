import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadAllPathIGNs } from '@/lib/load-sheets';
import { fetchMemberStats } from '@/lib/fetch-sheets';
import MemberCards from '@/components/membercards';
import { ComingSoon } from '@/components/error';


export default function Member({ memberStats }) {
    const router = useRouter();
    const { ign } = router.query;
    return (
        <>
        <Head>
            <title>{ ign }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <ComingSoon />
            {/* <MemberCards memberStats={memberStats} /> */}
        </main>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await loadAllPathIGNs();
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const memberStats = await fetchMemberStats(context.params.ign);
    
    return {
      props: { 
        memberStats: memberStats
      },
      revalidate: 150, // In seconds
    };
  }