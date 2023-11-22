import React from 'react'
import NameShop from "../NameShop/NameShop";
import styles from "./Recommend.module.css";
import { Button, Link, Stack } from '@chakra-ui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from "../../../Public/Image/ImageProduct/ImageReccomend/1.png";
import Slide2 from "../../../Public/Image/ImageProduct/ImageReccomend/2.png";
import Slide3 from "../../../Public/Image/ImageProduct/ImageReccomend/3.png";
import Slide4 from "../../../Public/Image/ImageProduct/ImageReccomend/4.png";
import Slide5 from "../../../Public/Image/ImageProduct/ImageReccomend/5.png";
import Slide6 from "../../../Public/Image/ImageProduct/ImageReccomend/6.png";


export default function Recommend() {


    const Categories = ['Виски', 'Коньяк', 'Вино', 'Шампанское', 'Ликер', 'Текила', ' Водка', 'Ром']
    const settings = {
        infinite: true,
        autoplay: true  ,
        autoplaySpeed: 2000,
        slidesToShow: 2,
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
        <div className={styles.Containir}>
            <div className={styles.mainRecommend}>
                <div className={styles.Recommend}>
                    <NameShop />
                    <h2>рекомендует</h2>
                    <span>Кависты нашего магазина
                        подготовили коллекцию спиртных напитков,
                        получивших самые лучшие отзывы клиентов,
                        высокие оценки экспертов и награды
                        международных конкурсов</span>
                    <Stack direction='row' spacing={6} align='center' justifyContent='center'>

                        <Button colorScheme='teal' w='150px' fontSize='14px' variant='outline'>
                            Посмотреть все
                        </Button>

                    </Stack>
                </div>
                <div className={styles.RecDivRight}>
                    <div className={styles.RecDivRightMenu}>

                        {Categories.map((category, index) => (
                            <Link className={styles.RecDivRightMenuLink} key={index} color='grey.500' href={`#${category}`}>
                                {category}
                            </Link>
                        ))}
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
                                <div className={styles.slide}>
                                    <img src={Slide6} alt="Slide 6" />
                                </div>
                                

                            </Slider>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}