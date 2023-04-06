import Head from 'next/head';
import { loadWeeklyMemberScores, loadBestScores, load1kers, loadWeeklyGuildScores } from '../lib/load-sheets';
import MainTable from '@/components/maintable';
import MainCards from '@/components/maincards';


export default function Home({ playerData, bestOfData, flagGangData, guildData }) {
  return (
    <>
      <Head>
        <title>Bagels - Home</title>
        <meta 
          name="description" 
          content="A flag and culvert tracker for Reboot server's Bagels guild." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainCards bestOfData={bestOfData} flagGangData={flagGangData} guildData={guildData} />
        <MainTable data={playerData} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const [playerData, bestOfData, flagGangData, guildData] = await Promise.all(
    [loadWeeklyMemberScores(), loadBestScores(), load1kers(), loadWeeklyGuildScores()]);
  
  return {
    props: { 
      playerData: playerData,
      bestOfData: bestOfData,
      flagGangData: flagGangData,
      guildData: guildData,
    },
    revalidate: 10, // In seconds
  };
}