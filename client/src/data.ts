import { IProduct } from './types/types';

export const products: IProduct[] = [
  {
    id: 1,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/307730-shampanskoe-ruinart-blanc-de-blancs-0-75-l.jpg',
    name: 'Шампанское Ruinart Blanc de Blancs 0,75 л',
    article: '07-079',
    rate: 4.6,
    tags: ['Франция', 'вино', '12,5%'],
    price: 22330,
    balance: 1,
  },
  {
    id: 2,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/373967-prosekko-cantine-maschio-dei-cavalieri-prosecco-extra-dry-treviso-0-75-l-f.jpg',
    name: 'Игристое вино Cantine Maschio dei Cavalieri Prosecco Extra Dry Treviso 0,75 л',
    article: '07-113628',
    rate: 4.3,
    tags: ['Италия', 'Белое', 'Брют', '11%'],
    price: 1216,
    balance: 1,
  },

  {
    id: 3,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/391185-shampanskoe-moet-chandon-brut-imperial-0-75-l.jpg',
    name: 'Шампанское Moet & Chandon Brut Imperial 0,75 л',
    article: '07-052',
    rate: 4.4,
    tags: ['Франция', 'белое', '3 года', '12%'],
    price: 7440,
    balance: 1,
  },
  {
    id: 4,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/302040-viski-johnnie-walker-blue-label-0-7-l-f.jpg',
    name: 'Виски Johnnie Walker Blue Label 0.7 л в коробке',
    article: '05-021',
    rate: 4.1,
    tags: ['Шотландия', 'купажированный', '25 года', '40%'],
    price: 26123,
    balance: 0,
  },
  {
    id: 5,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/371869-viski-chivas-regal-royal-salute-21-yo-0-7-l-f.jpg',
    name: 'Виски Chivas Regal Royal Salute 21 YO 0.7 л в коробке',
    article: '05-036',
    rate: 4.3,
    tags: ['Шотландия', 'купажированный', '21 года', '40%'],
    price: 28820,
    balance: 0,
  },
  {
    id: 6,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/370985-viski-macallan-double-cask-12-years-old-0-7-l-f.jpg',
    name: 'Виски Macallan Double Cask 12 Years Old 0.7 л в коробке',
    article: '05-1101',
    rate: 4.1,
    tags: ['Шотландия', 'односолодовый', '12 лет', '40%'],
    price: 17710,
    balance: 0,
  },
  {
    id: 0,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/395255-viski-jameson-orange-0-7-l-f.jpg',
    name: 'Виски Jameson Orange 0.7 л',
    article: '05-236990',
    rate: 3.1,
    tags: ['Ирландия', 'купажированный', '3 года', '30%'],
    price: 2880,
    balance: 1,
  },
  {
    id: 7,
    isFavourite: false,
    imageProduct:
      'https://decanter.ru/image/406801-kon-iak-hennessy-vsop-0-7-l-f.jpg',
    name: 'Коньяк Hennessy VSOP 0.7 л в коробке',
    article: '01-027',
    rate: 1.1,
    tags: ['Франция', 'VSOP', 'от 6 до 12 лет', '40%'],
    price: 3223,
    balance: 1,
  },
];
