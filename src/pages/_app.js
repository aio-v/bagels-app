import '@/styles/globals.css';
import '@fontsource/lora';
import '@fontsource/poppins';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
