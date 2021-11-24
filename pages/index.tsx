import Post from '../components/posts/post_preview' 
import  {GetStaticProps} from 'next'
import React, {useState, useCallback} from 'react';
import Head from 'next/head'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import style from '../styles/Home.module.css'

type Props = {
  title:string,
  body:string  
}
const Home = (props:Props) => {
  const [data, setData] = useState("inital")
  const GetNext = async ()=> {
    const response = await fetch('http://localhost:5000').then(
    response => response.json()
    ).then(
      data => {
        setData(data.message)
      }
    )
  }
  return (
    <main className={style.wrapper}>
      <Head>
        <title>Antaretsuki</title>
        <meta name="key" content="Blog Development"></meta>
      </Head>
      <div>
        <Post title={props.title} body={props.body}/>
        <div onClick={GetNext} style={{cursor:'pointer'}}>
          {data} 
      </div>

      </div>
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
export const getStaticProps: GetStaticProps = async () => { // must be async
  return {
    props: {
      title: "title",
      body:"body"
    },
  };
};

export default Home
