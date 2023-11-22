import React, { useContext, useEffect } from 'react';
import { ContextAll } from '../../context/context';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Link,
  Icon,
} from '@chakra-ui/react';
import styles from './MenuCategories.module.css';
import { FaTelegram } from 'react-icons/fa';

const dataMenu = [
  {
    id: 1,
    categories: 'Виски',
    brands: [
      'Johnnie Walker',
      'Chivas Regal',
      'Macallan',
      'Jameson',
      'Jack Daniels',
      'Все',
    ],
    country: ['Шотландия', 'Ирландия', 'США', 'Япония', 'Все'],
    type: [
      'Односолодовый',
      'Купажированный',
      'Бурбон',
      'Солодовый',
      'Теннесии',
      'Все',
    ],
  },
  {
    id: 2,
    categories: 'Коньяк',
    brands: [
      'Hennessy',
      'Courvoisier',
      'Remy Martin',
      'Camus',
      'Арарат',
      'Все',
    ],
    country: ['Франция', 'Армения', 'Россия', 'Все'],
    type: ['VS', 'VSOP', 'XO', '3 звезды', '5 звезд', 'Все'],
  },
  {
    id: 3,
    categories: 'Шампанское',
    brands: ['Moet', 'Ruinart Blanc', 'Ruinart', 'Mondoro', 'Mastro Binelli', 'Perrier Jouet', 'Все'],
    country: ['Франция', 'Все'],
    type: ['Все'],
  },
  {
    id: 4,
    categories: 'Вино',
    brands: ['Chateau Margaux', 'Chateau Lafite Rothschild', 'Chateau Latour', 'Chateau Haut-Brion', 'Все'],
    country: ['Франция', 'Италия', 'Испания', 'Грузия', 'Россия', 'ЮАР', 'Все'],
    type: ['Красное', 'Белое', 'Розовое', 'Игристое', 'Все'],
  },
  {
    id: 5,
    categories: 'Крепкие напитки',
    brands: ['Angostura', 'Zacapa', 'Havana Club', 'Legendario', 'Все'],
    country: ['Куба', 'Гватемала', 'Ямайка', 'Все'],
    type: ['Ром', 'Все'],
  },
  {
    id: 6,
    categories: 'Водка',
    brands: ['Белуга', 'Чистые Росы', 'Русский Стандарт', 'Absolut', 'Все'],
    country: ['Россия', 'Все'],
    type: ['Все'],
  },
  {
    id: 7,
    categories: 'Другие напитки',
    brands: ['Stortebeker', 'Schlenkerla', 'Leikeim', 'Ayinger', 'Все'],
    country: ['Германия', 'Все'],
    type: ['Пиво', 'Сидр', 'Мидер', 'Крафтовые напитки', 'Все'],
  },
];

export default function MenuCategories() {
  const { setQuery } = useContext(ContextAll);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.MenuCategories')) {
        resetSearch();
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickFilter = (e) => {
    e.preventDefault();
    setQuery(e.target.textContent);
  };

  return (
    <div className={styles.Navbar3}>
      <div className="MenuCategories">
        {dataMenu.map(({ categories, brands }) => (
          <Menu key={categories}>
            <MenuButton
              as={Button}
              className={styles.FootI}
              _hover={{ background: 'transparent', color: 'your-hover-color' }}
            >
              {categories}
            </MenuButton>
            <MenuList maxH="200px" overflowY="auto">
              <h2>
                <b>Бренды</b>
              </h2>
              {brands.map((brand) => (
                <MenuItem key={brand} onClick={handleClickFilter}>
                  {brand}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </div>
      <div className={styles.Social}>
        <div>
          <Link
            href="tel:+1234567890"
            isExternal
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: '900',
              color: 'black',
            }}
          >
            +7 (495) 555-55-55
          </Link>
        </div>
        <div>
          <Link
            href="https://t.me/"
            isExternal
            mr={4}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Icon
              className={styles.tele}
              as={FaTelegram}
              boxSize={6}
              style={{ color: '#01b7ff' }}
            ></Icon>
          </Link>
        </div>
      </div>
    </div>
  );
}
function resetSearch() {
  throw new Error('Function not implemented.');
}

