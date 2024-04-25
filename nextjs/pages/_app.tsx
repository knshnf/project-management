import type { AppProps } from 'next/app'
import { client } from '../utils/apollo-client'

import {
  ApolloProvider,
} from '@apollo/client'

function App({ Component, pageProps: pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ApolloProvider client={client}>
      <AnyComponent {...pageProps} />
    </ApolloProvider>
  )
}

App.getInitialProps = async () => ({})

export default App
