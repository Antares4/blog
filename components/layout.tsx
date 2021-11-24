import React from 'react'
import Nav from './navbar/nav'
const layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout
