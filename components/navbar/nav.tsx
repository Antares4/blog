import React from 'react'
import Link from 'next/link'
import styles from './navstyle.module.css'

interface Props {
    
}

export const Nav = (props: Props) => {
    return (
        <nav className={styles.nav}>
            <Link href="/home">
                <a>home</a>
            </Link>
            <Link href="/blogs">
                <a>Blog</a>
            </Link>
            <div>About</div>
            <div>Contact</div>
        </nav>
    )
}

export default Nav