import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/config'
import dynamic from 'next/dynamic'
import { RecoilRoot } from 'recoil'

const YoutubePlayer = dynamic(() => import('@/layers/YoutubePlayer'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <YoutubePlayer />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
