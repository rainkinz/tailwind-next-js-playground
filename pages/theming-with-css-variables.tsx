import Head from 'next/head'
import CallToAction from '../components/CallToAction'

export default function Grid() {
  return (
    <div>
      <Head>
        <title>Theming with CSS variables</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid place-items-center min-h-screen">
        <CallToAction />
        <CallToAction theme="theme-swiss" />
        <CallToAction theme="theme-neon" />
      </main>
    </div>
  )
}
