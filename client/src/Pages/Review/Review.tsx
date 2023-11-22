import React from 'react'
import styles from './Review.module.css'
import { Link } from 'react-router-dom'
import { Avatar, HStack } from '@chakra-ui/react';
import { FaInfoCircle, FaPhone, FaStar, FaStore, FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import Sergey from '../../../Public/Image/Review/1.png'
import Anton from '../../../Public/Image/Review/2.png'
import Denis from '../../../Public/Image/Review/3.png'
import Dmitriy from '../../../Public/Image/Review/4.png'
import Oleg from '../../../Public/Image/Review/5.png'
import Gif from '../../../Public/Image/Gif/image_861704191557558928998.gif'
import Slider from 'react-slick';




export default function IShop() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3 ,
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
<div style={{marginTop: '30px'}}>
  <img src={Gif} alt="img"  style={{width: '160px', height: '200px'}}/>
</div>
      </div>
      <div className={styles.IShopDivRightFlag}>
        <div className={styles.IShopDivRight1}>
          <Link className={styles.LinkRightShop} to="/" >
            Главная
          </Link>
          <span style={{ paddingLeft: '5px', marginBottom: '20px' }}>/ Отзывы о магазине</span>
        </div>
        <div>
          <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Отзывы о магазине</h2>
          <hr />
          <br />
          <span style={{fontSize: '18px'}}>
            На этой странице вы можете прочитать отзывы о нашей работе. Обратная связь и конструктивная критика помогают нам становиться лучше, расширять ассортимент с учетом ваших пожеланий, делать работу магазина еще удобнее и доступнее.
          </span>
          
          
        </div>
        <br />
        <hr/>
        <div className={styles.mainReview}>

         

        </div>
        <div className={styles.ReviewFlag}>
          <div className={styles.ReviewDiv}>
            <Slider {...settings} className={styles.Sliders}>
              <div className={styles.slide}>
                <div className={styles.slides1}>
                  <div className={styles.comment}>

                    <div className={styles.Top}>

                      <div>
                        <Avatar size='md' src={Sergey} />
                      </div>

                      <div className={styles.Name}>
                        <span>Сергей Дочкин</span>
                      </div>
                    </div>

                    <div className={styles.Rating}>

                      <div className={styles.Rate}>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <div className={styles.Data}>
                        <span>1 июня 2023</span>
                      </div>
                    </div>

                    <div className={styles.DivText}>
                      <p>Добрый день! Хочу поделиться впечатлениями об этом бутике алкоголя! Покупал вино на годовщину в этом великолепном месте! Ассортимент огромный, цены приятно удивили, сервис на высочайшем уровне!</p>
                    </div>

                    <div className={styles.DivLike}>
                      <HStack spacing={10}>
                        <FaThumbsUp />
                        <FaThumbsDown />
                      </HStack>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slides2}>
                  <div className={styles.comment}>

                    <div className={styles.Top}>
                      <div>
                        <Avatar size='md' src={Anton} />
                      </div>
                      <div className={styles.Name}>
                        <span>Антон Атнагулов</span>
                      </div>
                    </div>

                    <div className={styles.Rating}>

                      <div className={styles.Rate}>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <div className={styles.Data}>
                        <span>11 cен 2023</span>
                      </div>
                    </div>

                    <div className={styles.DivText}>
                      <p>Конечно только плюсы! Красиво, информативно, доступно, имеется алкоголь на любой вкус и кошелек. Вино высокого качества. На подарок замечательный выбор!</p>
                    </div>

                    <div className={styles.DivLike}>
                      <HStack spacing={10}>
                        <FaThumbsUp />
                        <FaThumbsDown />
                      </HStack>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slides3}>
                  <div className={styles.comment}>

                    <div className={styles.Top}>
                      <div>
                        <Avatar size='md' name='Denis' src={Denis} />
                      </div>

                      <div className={styles.Name}>
                        <span>Денис Образцов</span>
                      </div>
                    </div>

                    <div className={styles.Rating}>

                      <div className={styles.Rate}>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <div className={styles.Data}>
                        <span>10 cен 2023</span>
                      </div>
                    </div>

                    <div className={styles.DivText}>
                      <p>Магазин прекрасный! Огромный выбор качественного алкоголя. Сотрудники магазина - настоящие профессионалы своего дела!</p>
                    </div>

                    <div className={styles.DivLike}>
                      <HStack spacing={10}>
                        <FaThumbsUp />
                        <FaThumbsDown />
                      </HStack>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slide}>
                
                <div className={styles.slide4}>
                  <div className={styles.comment}>

                    <div className={styles.Top}>
                      <div>
                        <Avatar size='md' src={Dmitriy} />
                      </div>
                      <div className={styles.Name}>
                        <span>Дмитрий Рудаков</span>
                      </div>
                    </div>

                    <div className={styles.Rating}>

                      <div className={styles.Rate}>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <div className={styles.Data}>
                        <span>11 апр 2022</span>
                      </div>
                    </div>

                    <div className={styles.DivText}>
                      <p>Мне понравилось удобно заказал и забрал. Виски Пушка. На подарок замечательный выбор!</p>
                    </div>

                    <div className={styles.DivLike}>
                      <HStack spacing={10}>
                        <FaThumbsUp />
                        <FaThumbsDown />
                      </HStack>

                    </div>
                    </div>

                </div>
              </div>
              <div className={styles.slide}>
                
                <div className={styles.slide5}>
                  <div className={styles.comment}>

                    <div className={styles.Top}>
                      <div>
                        <Avatar size='md' bg='teal.500' src={Oleg} />
                      </div>

                      <div className={styles.Name}>
                        <span>Олег Доденко</span>
                      </div>
                    </div>

                    <div className={styles.Rating}>

                      <div className={styles.Rate}>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <div className={styles.Data}>
                        <span>08 cен 2023</span>
                      </div>
                    </div>

                    <div className={styles.DivText}>
                      <p>Отличное место, большой выбор! Ставлю 5! Обнял, поднял, перевернул!</p>
                    </div>

                    <div className={styles.DivLike}>
                      <HStack spacing={10}>
                        <FaThumbsUp />
                        <FaThumbsDown />
                      </HStack>
                    </div>
                  </div>
                      
                  

                </div>
              </div>



            </Slider>
          </div>
        </div>
      </div>

    </div>
  )
}
