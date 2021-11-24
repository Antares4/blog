import React from 'react'
import Blogitems from '../components/blogitem/blogitems'
import { GetServerSideProps } from 'next'
import type { ReactElement } from 'react'
import Layout from '../components/layout'

type blog = {
    id:number,
    title:string,
    content:string,
    date:Date
}
interface Props {
    data:Array<blog>
}

const Blogs = (props: Props) => {
    return (
        <div>
            <div>
            {props.data.map((item:blog)=>{
                return (<div key={item.id}><span>abc</span> <Blogitems id={item.id}></Blogitems></div>)
            })}
            </div>
            
        </div>
    )
}
Blogs.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export const getServerSideProps:GetServerSideProps = async (context) =>{
    let blogs = null
    const axios = require('axios').default
    const response = await axios.get('http://localhost:5000/posts').then(response=>{
        blogs = response.data.items
    })
    return{
        props:{
            data:blogs
        }
    }
}
export default Blogs