import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { CMS_NAME } from '../src/lib/constants';
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { Stack, VStack } from '@chakra-ui/react';
import factory from '../src/utils/factory';

export default function Index({ blocks, preview }) {
    console.log(blocks);

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>
                <VStack spacing={8}>{factory(blocks)}</VStack>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const { data } = await client.query({
        query: GET_PAGE,
        variables: {
            uri: '/',
        },
    });

    const {
        page: { blocksJSON },
    } = data;

    const blocks = JSON.parse(blocksJSON);

    return {
        props: { blocks, preview },
    };
}
