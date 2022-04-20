// import Alert from '../components/alert'
import { Box } from '@chakra-ui/react'
import Footer from '../src/components/Footer'
import Meta from '../components/meta'
import Header from '../src/components/Header/Header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
    </>
  )
}
