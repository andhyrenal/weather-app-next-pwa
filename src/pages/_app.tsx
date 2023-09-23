import '@/styles/globals.css'
import '@/styles/weather.scss'
import type { AppProps } from 'next/app'
import { ReactQueryProvider } from '../provider/ReactQueryProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  )
}
