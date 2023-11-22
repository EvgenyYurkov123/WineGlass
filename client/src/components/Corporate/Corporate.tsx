import React from 'react'
import styles from './Corporate.module.css'
import Corpor from '../../../Public/Image/Corpor.png'
export default function Corporate() {
    return (
        <div className={styles.CorporateFlag}>
            <div>
                <img src={Corpor} alt="img" />
            </div>
        </div>
    )
}
