import React from 'react'
import styles from './Brendes.module.css'
import Brende from '../../../Public/Brendes.png'

export default function Brendes() {
  return (
      <div className={styles.BrendesFlag}>
          <div>
              <img src={Brende} alt="img" />
          </div>
      </div>
  )
}
