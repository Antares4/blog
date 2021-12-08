import React from 'react'
import Nav from './navbar/nav'
import style from '../styles/Home.module.css'
const layout = ({children}) => {
    return (
        <>
            <Nav/>
                <main className={style.main}>
                    {children}
                </main>
        </>
    )
}

export default layout
