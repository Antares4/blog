import type { NextPage } from 'next'
import Post from '../components/posts/post' 
import Nav from '../components/navbar/nav'
import  {GetStaticProps} from 'next'
import React, {useState, useCallback} from 'react';
import Head from 'next/head'
import Link from 'next/link'

import { getServers } from 'dns';
import { stringify } from 'querystring';
type Props = {
  title:string,
  body:string  
}
const Home: React.FC<Props> = (props:Props) => {
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
    <div>
      <Head>
        <title>Antaretsuki</title>
        <meta name="key" content="Blog Development"></meta>
      </Head>
      <div>
      <Nav/>
      <Post title={props.title} body={props.body}/>
      <div onClick={GetNext} style={{cursor:'pointer'}}>
        data is {data}
      </div>
    <Link href="/home">
        <a>home</a>
    </Link>
    </div>
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => { // must be async
  // const res = await fetch("http://localhost:5000")
  // const text:Props = await res.json()
  var t = "sbb"
  // const response = await fetch('http://localhost:5000').then(
  //   response => response.json()
  //   ).then(
  //     data => {
  //       t = data.message
  //     }
  //   )
  

  return {
    props: {
      title: t,
      body:"sss"
    },
  };
};

export default Home
