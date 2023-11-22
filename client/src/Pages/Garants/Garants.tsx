import React from 'react'
import styles from './Garants.module.css'
import { Link } from 'react-router-dom'
import { Box, Image } from '@chakra-ui/react'
import { FaInfoCircle, FaPhone, FaStar, FaStore } from 'react-icons/fa'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import License from '../../.././Public/Image/GarantImage/license.jpeg'
import Certificate from '../../.././Public/Image/GarantImage/certificate.jpeg'

export default function Garants() {

  return (
    <div className={styles.IShopFlag}>

      <div className={styles.IShopDivLeft}>
        <Link className={styles.LinkShop} to="/IShop" >
          <FaStore color="#5796f5" size={20} />
          <span >О МАГАЗИНАХ</span>
        </Link>
        <Link className={styles.LinkShop1} to="/Garant" >
          <AiOutlineSafetyCertificate size={20} color="#4caf50" />
          <span >ГАРАНТИИ</span>
        </Link>
        <Link className={styles.LinkShop2} to="/contacts" >
          <FaPhone size={20} color="#000" />
          <span >КОНТАКТЫ</span>
        </Link>
        <Link className={styles.LinkShop3} to="/review" >
          <FaStar size={30} color="#ffc107" />
          <span >ОТЗЫВЫ О МАГАЗИНЕ</span>
        </Link>
        <Link className={styles.LinkShop4} to="/IShop" >
          <FaInfoCircle size={20} color="#909090" />
          <span >О КОМПАНИИ</span>
        </Link>
      </div>
      <div className={styles.IShopDivRightFlag}>
        <div className={styles.IShopDivRight1}>
          <Link className={styles.LinkRightShop} to="/" >
            Главная
          </Link>
          <span style={{ paddingLeft: '5px', marginBottom: '20px' }}>/ Гарантия качества</span>
        </div>

        <div className={styles.MainDiv}>
          <div className={styles.GarantDiv}>
            <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Гарантия качества</h2>
            <span>
              В наших магазинах представлена только оригинальная продукция, имеющая документально подтвержденное происхождение. Каждый напиток сопровождается официальным сертификатом соответствия Росаккредитации, подлинность которого может быть проверена при помощи содержащегося в нем QR-кода. Если вы хотите получить копии сертификатов на заказанную продукцию, пожалуйста, сообщите об этом менеджеру магазина.
            </span>
            <span>
              Сеть магазинов WineGlass сотрудничает только с проверенными производителями и поставщиками, предлагающими исключительно качественную продукцию и тщательно контролирующими технологические процессы на всех этапах производства. Наша организация имеет всю необходимую разрешительную документацию, продажи ведутся под контролем системы ЕГАИС (Единой государственной автоматизированной информационной системы) и в строгом соответствии с законодательством Российской Федерации: мы не приемлем реализации алкогольной продукции несовершеннолетним и в ночное время.
            </span>
            <span>
              Отзывы покупателей — дополнительная гарантия качества, то, на что мы обращаем внимание, выстраивая диалог с вами. Почитать, что думают о нас клиенты, можно тут: <Link className={styles.Link} to="/review" >отзывы о магазине.</Link>
            </span>
          </div>

          <div className={styles.Image}>
            <Box>
              <Image src={License} alt="Image" htmlWidth={250} htmlHeight={200} boxShadow="xl" _hover={{ boxShadow: "2xl", transform: "scale(2.05)" }} transition="all 0.3s" />
            </Box>

            <Box>
              <Image src={Certificate} alt="Image" htmlWidth={250} htmlHeight={200} boxShadow="xl" _hover={{ boxShadow: "2xl", transform: "scale(2.05)" }} transition="all 0.3s" />
            </Box>
          </div>

          <div className={styles.Vid}>
            <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Внешний вид</h2>
            <span>
              Обращаем внимание, что фотографии продукции на сайте размещаются в ознакомительных целях. Внешний вид напитков может отличаться от изображения. Дело в том, что производители регулярно обновляют дизайн подарочных упаковок и бутылок. Мы стараемся максимально оперативно размещать актуальные фотографии, но из-за большого количества позиций в каталоге это иногда происходит уже после поступления обновленных позиций в продажу. Актуальную информацию о внешнем виде продукции можно уточнить у сотрудников нашего магазина.
            </span>
            <h2 style={{ fontSize: '30px', marginBottom: '20px', marginTop: '20px' }}>Дегустационные характеристики</h2>
            <span>
              Необходимо также учитывать, что дегустационные характеристики разрабатываются производителями или составляются нашими специалистами, и носят сугубо рекомендательный характер. Органолептические впечатления и гастрономические предпочтения индивидуальны, пробуйте и составляйте собственное мнение!
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}
