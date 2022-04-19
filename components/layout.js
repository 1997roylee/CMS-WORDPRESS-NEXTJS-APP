// import Alert from '../components/alert'
import Footer from '../src/components/Footer'
import Meta from '../components/meta'
import Header from '../src/components/Header/Header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header/>
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
