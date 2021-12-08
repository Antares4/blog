import React from 'react'
import Link from 'next/link'
import styles from './navstyle.module.css'


export const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>            
                    <Link href="/create"><a>New</a></Link>
                </li>
                <li>
                    <Link href="/blogs"><a>Blog</a></Link>
                </li>
                <li>
                    <div>About</div>
                </li>
                <li>
                    <div>LogIn</div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav