import React from 'react'
import Link from 'next/link'

type Props={
    id:number
}
const Blogitems = ({id}:Props) => {
    console.log(id)
    return (
            <Link href={`/posts/${id}`}>
                <a>post{id}</a>
            </Link>
    )
}

export default Blogitems