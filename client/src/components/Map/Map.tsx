import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './Map.module.css'

export default function MapYandex() {
  return (
    <div className={styles.Map}>
        <YMaps>
      <Map
        defaultState={{
          center: [55.755449, 37.619216], 
          zoom: 10, 
        }}
        style={{ width: '100%', height: '400px' }} 
      >
        <Placemark
          geometry={[55.689141, 37.545833]} 
        />
        <Placemark
          geometry={[55.769869, 37.665731]} 
        />
        <Placemark
          geometry={[55.710098, 37.658877]} 
        />
      </Map>
    </YMaps>
    </div>
    
  )
}
