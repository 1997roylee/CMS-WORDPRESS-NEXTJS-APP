/* eslint-disable react/prop-types */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { renderStatic } from '../src/shared/renderer';
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const page = await ctx.renderPage()
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(page.html);

    console.log(styles)
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
