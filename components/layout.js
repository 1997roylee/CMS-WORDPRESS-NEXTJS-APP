// import Alert from '../components/alert'
/* eslint-disable react/prop-types */
import React from 'react';
import Footer from '../src/components/Footer';
import Meta from '../components/meta';
import Header from '../src/components/Header/Header';

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <Header />
            <main style={{ minHeight: '100vh' }}>{children}</main>
            <Footer />
        </>
    );
}
