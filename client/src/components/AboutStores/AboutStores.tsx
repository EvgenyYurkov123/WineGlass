import React from 'react'

import styles from "./AboutStores.module.css";
import { Stack, Button } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../../Public/Image/ImageStore/1.png";
import Slide2 from "../../../Public/Image/ImageStore/2.png";
import Slide3 from "../../../Public/Image/ImageStore/3.png";
import Slide4 from "../../../Public/Image/ImageStore/4.png";
import Slide5 from "../../../Public/Image/ImageStore/5.png";
import { Link } from 'react-router-dom';

export default function AboutStores() {
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

        <div className={styles.Containur}>
            <div className={styles.mainAbStore}>
                <div className={styles.AbStore}>
                    <h2>О магазинах</h2>
                    <span style={{paddingBottom: '15px'}}>На полках наших винных магазинов вы найдете как самые редкие и эксклюзивные напитки, так и пользующиеся широкой известностью бренды элитного алкоголя. Мы по праву гордимся нашей коллекцией виски и коньяка — крупнейшей в России. Кависты магазина деликатно помогут подобрать алкоголь в подарок или идеальную гастрономическую пару к вашему ужину.
                    </span>
                    <span style={{ paddingBottom: '15px' }}>Вся представленная в ассортименте продукция официально импортирована на территорию Российской Федерации, имеет документально подтвержденное происхождение и хранится с соблюдением рекомендуемых производителями условий.</span>
                    <Stack direction='row' spacing={6} align='center' justifyContent='center'>

                        <Button colorScheme='teal' w='200px' fontSize='14px' variant='outline'>
                            <Link className={styles.LinkShop} to="/IShop" style={{ color: 'black' }}>
                                Подробнее о магазинах
                            </Link> 
                        </Button>

                    </Stack>
                </div>
                <div className={styles.RecDivRight}>


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
        </div>
    )

}
