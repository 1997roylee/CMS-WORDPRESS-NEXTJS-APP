import Layout from '../components/layout';
import client from '../src/apollo/client';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { VStack } from '@chakra-ui/react';
import factory from '../src/utils/factory';
import SEOMeta from '../src/components/SeoMeta';

export default function Index({ seo, blocks, preview }) {
    return (
        <>
            <SEOMeta seo={seo} />
            <Layout preview={preview}>
                <VStack spacing={8}>{factory(blocks)}</VStack>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const result = await client.query({
        query: GET_PAGE,
        variables: {
            uri: '/',
        },
    });

    const {data} = result;
    console.log(data, result);
    const {
        page: { blocksJSON, seo },
    } = data;

    console.log(seo);

    const blocks = JSON.parse(blocksJSON);

    return {
        props: { blocks, seo, preview },
    };
}
