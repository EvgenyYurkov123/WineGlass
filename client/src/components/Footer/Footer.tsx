import React from 'react'
import styles from './Footer.module.css'
// import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'

export default function Footer() {
    return (
        <div className={styles.FooterFlag}>
            <div className={styles.foo}>
                © 2023 Copyright


            </div>
            {/* <Menu>
        <MenuButton as={Button} colorScheme="blue" className={styles.FootI} >
        </MenuButton>
        <MenuList>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </MenuList>
      </Menu> */}



        </div>
    )
}