import React from 'react'
import Link from 'next/link'

const Blogitems = ({id}) => {
    console.log(id)
    return (
            <Link href='/posts/[id]'>
            </Link>
    )
}

export default Blogitems