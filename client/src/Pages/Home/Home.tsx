import React from "react";
import styles from "./Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../Public/Image/Carousel/1.gif";
import slide2 from "../../../Public/Image/Carousel/2.png";
import slide3 from "../../../Public/Image/Carousel/3.png";
import slide4 from "../../../Public/Image/Carousel/4.jpg";
import slide5 from "../../../Public/Image/Carousel/5.gif";
import slide6 from "../../../Public/Image/Carousel/6.gif";
import slide7 from "../../../Public/Image/Carousel/7.jpg";
import slide8 from "../../../Public/Image/Carousel/8.png";
import Recommend from "../../components/Recommend/Recommend";
import AboutStores from "../../components/AboutStores/AboutStores";
import Corporate from "../../components/Corporate/Corporate";
import Brendes from "../../components/Brendes/Brendes";


export default function Home() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
    <>
      <div className={styles.HomeFlag}>
        <div className={styles.HomeDiv}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <img src={slide1} alt="Slide 1" />
              <div className={styles.slides1}>
                <span style={{ fontSize: '35px' }}>
                  "Я не доверяю верблюдам, и вообще всем, кто может неделю не пить"
                </span>
                <span style={{ fontSize: '25px', marginLeft: '200px', marginTop: '20px' }}>Джо Луис</span>
              </div>
            </div>
            <div className={styles.slide}>
              <img src={slide2} alt="Slide 2" />
              <div className={styles.slides2}>
                <span>
                  "Вино – это солнце, запертое в ягодах."
                </span>
                <span style={{ fontSize: '25px', marginLeft: '100px', marginTop: '20px' }}>
                  Галилей Галилеевич
                </span>
              </div>
            </div>
            <div className={styles.slide}>
                <img src={slide3} alt="Slide 3" />
              <div className={styles.sli3}>
                <span>
                  "Что попало я не пью, у меня большой IQ"
                </span>
                <span style={{ fontSize: '25px', marginLeft: '90px', marginTop: '20px' }}>
                  Альберт Эйнштейн
                </span>
              </div>
            </div>
            <div className={styles.slide}>
              <img src={slide4} alt="Slide 3" />
              <div className={styles.slide4}>
                <span>
                  "Если выпил хорошо, утром будет плохо
                </span>
                <span>
                  Если утром хорошо, значит выпил плохо."
                </span>
                <span style={{ fontSize: '25px', marginLeft: '90px', marginTop: '20px' }}>
                  Эрнест Хемингуэй
                </span>
              </div>
            </div>
            <div className={styles.slide}>
              <img src={slide5} alt="Slide 3" />
            </div>
            <div className={styles.slide}>
              <img src={slide6} alt="Slide 3" />
            </div>
            <div className={styles.slide}>
              <img src={slide7} alt="Slide 3" />
            </div>
            <div className={styles.slide}>
              <img src={slide8} alt="Slide 3" />
              <div className={styles.slide8}>
                <span>
                  "Алкоголь — это самый социальный и доступный вид психотерапии."
                </span>
                
                <span style={{ fontSize: '20px', marginLeft: '200px', marginTop: '20px' }}>
                  Игорь Манн
                </span>
              </div>
            </div>


          </Slider>
        </div>
      </div>

      <div>
        <Recommend />
        <Corporate />
        <AboutStores />
        <Brendes />
      </div>
     
    </>
  );
}
