import React from 'react'
import styles from '../../styles/post.module.css'
import Link from 'next/link'
import {PostType} from '../types'

const Post_preview = (props:{blogs:PostType}) => {
    return (
        <>
            <div className={styles.cardtitle}>
                <h1 >{props.blogs.Header}</h1>
            </div>
            <div className={styles.cardbody}>
                <p>{props.blogs.Body}</p>
            </div>
            <Link href={`/posts/${props.blogs.id}`}>
                <a className={styles.cardLink}>VIEW</a>
            </Link>
        </>
    )
}

export default Post_preview