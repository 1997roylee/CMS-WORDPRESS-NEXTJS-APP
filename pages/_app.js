/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';

import ExecutionEnvironment from 'exenv';
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider
            cssVarsRoot={
                ExecutionEnvironment.canUseDOM &&
                ExecutionEnvironment.canUseViewport
                    ? null
                    : ''
            }
            theme={theme}
        >
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default MyApp;
