
import React from 'react';
import Head from 'next/head'
import type { ReactElement } from 'react'
import Layout from '../components/layout'


type Props = {
  title:string,
  body:string  
}
const Home = (props:Props) => {
  return (
    <main>
      <Head>
        <title>Antaretsuki</title>
        <meta name="key" content="Blog"></meta>
      </Head>
    </main>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home
