import React from 'react'
import {GetStaticProps} from 'next'

interface Blogs{
    title:string,
    content:string,
    date: Date
}
interface Props {
    returnedPosts:Blogs[]
}

//display gallary of blogs click to enter
export const home = (props: Props) => {
    console.log(props)

    return (
        <div>
            hello
        {props.returnedPosts.map((blo) => (
        <p key={blo.title}>Hello, {blo.title} from {blo.content}!</p>
        ))}
        </div>
    )
}
export const getStaticProps: GetStaticProps = async () => { // must be async
    var t = "sbb"
    var returnedPosts:Blogs[] = []
    const response = await fetch('http://localhost:5000/posts').then(response => response.json()).then(
        data => {
          if(data.hasOwnProperty("items")){
            if(Array.isArray(data.items)){
                returnedPosts = data.items;
            }
          }
          else{
              console.log("fail")
          }
        }
      )
    return {
      props: {returnedPosts}
  };
}
export default home