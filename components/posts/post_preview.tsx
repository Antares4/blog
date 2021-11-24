import React from 'react'
import styles from './post.module.css'
interface PostType {
    title:string,
    body:string,
  }

const Post_preview:React.FC<PostType> = ({
    title,
    body,
    ...props
}) => {
    
    return (
        <div className={styles.card}>
            <div className={styles.cardtitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.cardbody}>
                <p>{body}</p>
            </div>
        </div>
    )
}


export default Post_preview