/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import parser from 'html-react-parser';

export default function SEOMeta(props) {
    const { seo } = props;
    // const { metaDesc } = seo;
    const yoastHead = parser(seo.fullHead);
    return (
        <Head>
            {/* <title>{title}</title>
        <meta name="description" content={metaDesc} /> */}
            {yoastHead}
        </Head>
    );
}
