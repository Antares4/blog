import React from 'react'
import {useRouter,NextRouter} from 'next/router'
import {GetServerSideProps} from 'next'
import { InferGetServerSidePropsType } from 'next'
interface Blogs{
    title:string,
    content:string,
    date: Date
}
interface Props {
    returnedPosts:Blogs[]
}
const article = () => {
    const route:NextRouter = useRouter()
    const {id} = route.query
    return (
        <div>
            This is Blog {id}
        </div>
    )
}
// export const getServerSideProps : GetServerSideProps = async (context) => { 
//     var returnedPosts:Blogs[] = []
//     const response = await fetch(`http://localhost:5000/posts/${context.params.id}`).then(response => response.json()).then(
//         data => {
//           if(data.hasOwnProperty("items")){
//             if(Array.isArray(data.items)){
//                 returnedPosts = data.items;
//             }
//           }
//         }
//       )
//     return {
//       props: {returnedPosts}
//   };
// }


export default article