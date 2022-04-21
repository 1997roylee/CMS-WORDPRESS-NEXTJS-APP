/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import createEmotionCache from '../src/lib/createEmotionCache';
import { CacheProvider } from '@emotion/react';

const cache = createEmotionCache();

// import ExecutionEnvironment from 'exenv';
function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider
      theme={theme}
    >
      <CacheProvider value={cache}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CacheProvider>
    </ChakraProvider>

  );
}

export default MyApp;
