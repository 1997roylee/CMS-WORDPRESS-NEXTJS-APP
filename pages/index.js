import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { CMS_NAME } from "../src/lib/constants";
import client from "../src/apollo/client";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { Box } from "@chakra-ui/react";
import factory from "../src/utils/factory";

export default function Index({ blocks, preview }) {
  // const { data, loading, error } = useQuery(QUERY_POSTS);
  console.log(blocks);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
         <Box>
         {factory(blocks)}
         </Box>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
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
