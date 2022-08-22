import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/config'
import { RecoilRoot } from 'recoil'
import dynamic from 'next/dynamic'

const YoutubePlayer = dynamic(() => import('@/layers/YoutubePlayer'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  console.log('MyApp')
  return (
    <>
      <Header />
      <RecoilRoot>
        <YoutubePlayer />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
