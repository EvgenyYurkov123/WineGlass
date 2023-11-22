import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link className={styles.DivLogotip} to="/">
            <span className={styles.Logotip} />
        </Link>
    )
}

export default Logo
