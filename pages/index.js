import Layout from '../components/layout';
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { VStack } from '@chakra-ui/react';
import factory from '../src/utils/factory';
import SEOMeta from '../src/components/SeoMeta';
import { preloadLazyBlockComponents } from '../src/components/Wordpress';

const Components = preloadLazyBlockComponents();

export default function Index({ DynamicLazyComponenth, seo, blocks, preview }) {
    return (
        <>
            <SEOMeta seo={seo} />
            <Layout preview={preview}>
                <VStack spacing={8}>{factory(blocks, Components)}</VStack>
            </Layout>
        </>
    );
}

export async function getServerSideProps({ req, res, preview = false }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const result = await client.query({
        query: GET_PAGE,
        variables: {
            uri: '/',
        },
    });

    const { data } = result;

    const {
        page: { blocksJSON, seo },
    } = data;

    const blocks = JSON.parse(blocksJSON);

    // const blocksFactory = factory(blocks)

    return {
        props: { blocks, seo, preview },
    };
}