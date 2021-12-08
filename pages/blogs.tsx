import React,{useState} from 'react'
import Post_preview from '../components/postpreview/post_preview'
import { GetServerSideProps} from 'next'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import {PostType} from '../components/types'
import style from '../styles/blogs.module.css'
import cardStyle from '../styles/post.module.css'

interface Props {
    data:Array<PostType>
}

const Blogs = (props: Props) => {
    var pos:number = 5;
    const areas=['a','b','c','d','e','f']
    return (
        <div className={style.preview_container}>
            {props.data.map((item:PostType)=>{
                pos = (pos+1)%6
                return (
                <div key={item.id} className={cardStyle.card} style={{gridArea:areas[pos]}}> 
                        <Post_preview blogs={item}/>
                </div>)
            })}
            
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
export const getServerSideProps:GetServerSideProps = async () =>{
    let blogs: PostType[] = [];
    const axios = require('axios').default;
    const response = await axios.get(`http://localhost:5000/archives/1`).then(response=>{
        console.log(response.data)
        blogs = response.data
    })
    var dt = new Date(1912, 5, 23).toJSON()
    var dummy = [{id:1,
        position:'TL',
        Header:'string',
        Body:'string',
        date: dt}]
    return{
        props:{
            data:blogs
        }
    }
}
export default Blogs