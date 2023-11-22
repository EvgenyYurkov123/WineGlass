import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Link } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapYandex from '../Map/Map';
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.mainDiv}>

      <div className={styles.navDiv}>
        <span style={{ fontWeight: '900' }}>Контакты</span>
        <p>Свяжитесь с нами в рабочее время магазинов, поможем с выбором и уточним наличие:</p>
        <p> <PhoneIcon />  +7 (495) 662-58-95</p>
        <span style={{ fontWeight: '900', marginTop: '10px' }}>Адреса магазинов</span>
      </div>

      <div className={styles.divTabs}>
        <Tabs>
          <TabList>
            <Tab style={{ marginRight: '50px' }}>Ленинский пр-т, 68</Tab>
            <Tab style={{ marginRight: '50px' }}>Новая Басманная, 31с1</Tab>
            <Tab>Мастеркова, 1</Tab>
          </TabList>

          <TabPanels>

            <TabPanel>
              <div className={styles.divPanel}>
                <div className={styles.divP}>
                  <p>Магазин расположен на юго-западе Москвы, угол Ленинского проспекта и Молодежной улицы. Станция метро "Университет" находится в 12 минутах ходьбы. Запарковать машину можно непосредственно перед магазином, на дублере Ленинского проспекта.</p>
                  <p><PhoneIcon /> +7 (495) 565-36-12</p>
                  <p>Проложить маршрут:</p>
                  <p><Link _hover={{ color: 'blue' }} href='https://yandex.ru/maps/213/moscow/?ll=37.551905%2C55.691303&mode=routes&rtext=~55.689141%2C37.545833&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY3MjkwNBJG0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCb0LXQvdC40L3RgdC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCA2OC8xMCIKDfAuFkIVrsFeQg%2C%2C&z=16'><FaMapMarkerAlt color='red' />Яндекс.Карты</Link></p>
                </div>
                <div className={styles.Map}><MapYandex /></div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className={styles.divPanel}>
                <div className={styles.divP}>
                  <p>Магазин расположен в центральном районе (Басманный округ) на улице Новая Басманная. В 10 минутах ходьбы располагаются станции метро: Бауманская, Красные ворота, Комсомольская. Муниципальная парковка расположена на улице напротив магазина.</p>
                  <p><PhoneIcon /> +7 (495) 540-46-12</p>
                  <p>Проложить маршрут:</p>
                  <p><Link _hover={{ color: 'blue' }} href='https://yandex.ru/maps/213/moscow/?ll=37.666968%2C55.769779&mode=routes&rtext=~55.769869%2C37.665731&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcyOTQwMRJL0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCd0L7QstCw0Y8g0JHQsNGB0LzQsNC90L3QsNGPINGD0LvQuNGG0LAsIDMx0YExIgoNtqkWQhVZFF9C&z=17'><FaMapMarkerAlt color='red' />Яндекс.Карты</Link></p>
                </div>
                <div className={styles.Map}><MapYandex /></div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className={styles.divPanel}>
                <div className={styles.divP}>
                  <p>Магазин расположен в южном районе Москвы (Даниловский округ) на улице Мастеркова, в 200 метрах ходьбы от станции метро Автозаводская. Муниципальная парковка расположена на улице напротив магазина.</p>
                  <p><PhoneIcon /> +7 (495) 225-44-12</p>
                  <p>Проложить маршрут:</p>
                  <p><Link _hover={{ color: 'blue' }} href='https://yandex.ru/maps/213/moscow/?ll=37.658877%2C55.710099&mode=routes&rtext=~55.710098%2C37.658877&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4MTk1MRI-0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JzQsNGB0YLQtdGA0LrQvtCy0LAsIDEiCg2yohZCFSTXXkI%2C&z=16'><FaMapMarkerAlt color='red' />Яндекс.Карты</Link></p>
                </div>
                <div className={styles.Map}><MapYandex /></div>
              </div>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}
