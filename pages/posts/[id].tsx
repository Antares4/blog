import React from 'react'
import {useRouter,NextRouter} from 'next/router'

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
            Blog{id}
        </div>
    )
}

export default article