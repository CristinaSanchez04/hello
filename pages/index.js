import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Rosa CristinaSánchez Cebrero" />
        <p className="description">
          Usando hosting gratuito <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
