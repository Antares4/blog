import React from 'react'

interface PostType {
    title:string,
    body:string,
  }

const Post:React.FC<PostType> = ({
    title,
    body,
    ...props
}) => {
    return (
        <div>
            <div>
            body: {title}
            </div>
            <div>
               s : {body}
            </div>
            <h1 className="title">
            </h