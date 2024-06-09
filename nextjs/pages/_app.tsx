import type { AppProps } from 'next/app'
import { client } from '../utils/apollo-client'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  ApolloProvider,
} from '@apollo/client'

const defaultTheme = createTheme();

function App({ Component, pageProps: pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <AnyComponent {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

App.getInitialProps = async () => ({})

export default App
