import '@styles/global.scss'
import type { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import initFontAwesomeIcons from '@utils/icons/Icons'
import Layout from '@components/Layout'

config.autoAddCss = false
initFontAwesomeIcons()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
