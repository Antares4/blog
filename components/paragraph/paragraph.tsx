import { stringify } from 'querystring'
import React from 'react'

interface Props {
    id:number,

}

export const paragraph = (props: Props) => {
    return (
        <div className='paragraph'>
            <input type="textarea" id={props.id.toString()} />
        </div>
    )
}
