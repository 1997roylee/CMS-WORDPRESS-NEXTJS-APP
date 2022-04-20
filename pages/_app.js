/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
// import dynamic from 'next/dynamic';

// import {
//   ThemeProvider,
//   CSSReset,
//   ColorModeProvider
// } from '@chakra-ui/core'

function MyApp({ Component, pageProps }) {

  // const ChakraProvider = dynamic(() => import('@chakra-ui/react').then(module => module.ChakraProvider))

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
