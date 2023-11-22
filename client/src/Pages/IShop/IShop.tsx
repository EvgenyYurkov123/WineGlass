import React from 'react'
import styles from './IShop.module.css'
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaPhone, FaStar, FaStore } from 'react-icons/fa'
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import Slider from 'react-slick';
import Slide1 from "../../../Public/Image/ImageStore/1.png";
import Slide2 from "../../../Public/Image/ImageStore/2.png";
import Slide3 from "../../../Public/Image/ImageStore/3.png";
import Slide4 from "../../../Public/Image/ImageStore/4.png";
import Slide5 from "../../../Public/Image/ImageStore/5.png";
export default function IShop() {



  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <div className={styles.IShopGif}>
         <img src="" alt="" />
        </div>
      </div>
      <div className={styles.IShopDivRightFlag}>
        <div className={styles.IShopDivRight1}>
          <Link className={styles.LinkRightShop} to="/" >
            Главная
          </Link>
          <span style={{ paddingLeft: '5px', marginBottom: '20px' }}>/ О Магазинах</span>
        </div>
        <div>
          <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>О Магазинах</h2>
          <span>
            Магазины WineGlass — возможность выбрать из крупнейшей в России коллекции алкогольных напитков и сразу же совершить покупку. У нас всегда представлены лимитированные серии виски и коньяка, широкий ассортимент тихих и игристых вин, редкие релизы и оригинальные упаковки.
          </span>
        </div>

        <div className={styles.SliderDivFlag}>
          <div className={styles.SliderDiv}>
            <Slider {...settings} className={styles.customSlider}>
              <div className={styles.slide}>
                <img src={Slide1} alt="Slide 1" />
              </div>
              <div className={styles.slide}>
                <img src={Slide2} alt="Slide 2" />
              </div>
              <div className={styles.slide}>
                <img src={Slide3} alt="Slide 3" />
              </div>
              <div className={styles.slide}>
                <img src={Slide4} alt="Slide 4" />
              </div>
              <div className={styles.slide}>
                <img src={Slide5} alt="Slide 5" />
              </div>



            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
