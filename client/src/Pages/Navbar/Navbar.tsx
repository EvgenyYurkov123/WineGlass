import styles from './Navbar.module.css';
import Logo from '../../components/Logo/Logo';
import InputSearch from '../../components/InputSearch/InputSearch';
import Favorite from '../../components/Favorite/Favorite';
import ComponentBasket from '../../components/ComponentBasket/ComponentBasket';
import MenuCategories from '../../components/MenuCategories/MenuCategories';
import Navigatte from '../../components/Navigatte/Navigatte';

export default function Navbar() {

  return (
    <>
      <div className={styles.NavFlag}>

        <Navigatte />
          <div className={styles.podNav}>
           <Logo />
           <InputSearch />
            <div className={styles.DivFavBas}>
            <Favorite />
            <ComponentBasket />
          </div>
          </div>
           <div className={styles.MenuCategories}>
          <MenuCategories />
           </div>
      </div>
    </>
  );
}
