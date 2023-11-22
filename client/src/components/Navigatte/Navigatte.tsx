import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigatte.module.css";

import { ContextAll } from '../../context/context';
import { ChevronDownIcon, HamburgerIcon, Icon } from '@chakra-ui/icons';
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Tooltip, Button } from '@chakra-ui/react';
import { IoMdTime } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';







export default function Navigatte() {
    const { user, setUser } = useContext(ContextAll);
    const [loading, setLoading] = useState(true);




    const logoutHandler = async () => {
        try {
            const response = await fetch(`http://localhost:3002/user/logout`, {
                credentials: 'include',
            });
            const res = await response.json();
            setUser({
                ...user,
                user: res.user,
                userName: res.user.userName,
                userEmail: res.user.userEmail,
                authUser: false,
            });
            localStorage.removeItem('user');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async function () {
            try {
                const savedUser = localStorage.getItem("user");
                if (savedUser) {
                    const parsedUser = JSON.parse(savedUser);
                    setUser(prev => ({
                        ...prev,
                        user: parsedUser.user,
                        authUser: parsedUser.authUser,
                    }));
                }

                const response = await fetch('http://localhost:3002/user', {
                    credentials: 'include',
                });
                const res = await response.json();
                if (res.user) {
                    setUser((prev) => ({ ...prev, user: res.user, authUser: true }));
                    localStorage.setItem('user', JSON.stringify({ user: res.user, authUser: true }));
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, [setUser]);

    return (
        <div className={styles.NavBegin} >
            <div className={styles.contain}>
                <Menu>
                    <div className='menuDivBatton ' style={{ display: 'flex', alignItems: 'center' }}>
                        <MenuButton className={styles.MenusButton} as={IconButton} icon={<HamburgerIcon />} color="white">

                        </MenuButton>
                        <span className='wordMenu' style={{ marginLeft: '5px', color: '#c6c6c6', fontWeight: 'bold' }}>
                            Меню
                        </span>
                    </div>
                    <MenuList className={styles.MenusList}>
                        <MenuItem style={{ color: 'black' }}>
                            <Link className={styles.LinkShop} to="/IShop" style={{ color: 'black' }}>
                                О магазинах
                            </Link>
                            
                        </MenuItem>
                        <MenuItem style={{ color: 'black' }}><Link className={styles.LinkShop} to="/Garant" style={{ color: 'black' }}>
                            Гарантии
                        </Link></MenuItem>
                        <MenuItem style={{ color: 'black' }}><Link className={styles.LinkShop} to="/review" style={{ color: 'black' }}>
                            Отзывы о магазине
                        </Link></MenuItem>
                        
                        
                    </MenuList>
                </Menu>

            </div>
            <div className={styles.navPanel}>

                <div className={styles.DivMagas}>
                    <Link className={styles.Magas} to="/IShop">
                        О магазинах
                    </Link>
                </div>
                <div className={styles.DivAllProducts}>
                    <Link className={styles.LinkAllProducts} to="/AllProducts">
                        Вся продукция
                    </Link>
                </div>
                <div className={styles.divGarant}>
                    <Link className={styles.Garant} to="/Garant">
                        Гарантии
                    </Link>
                </div>
                <div className={styles.DivContact}>
                    <Link className={styles.Contact} to="/contacts">
                        Контакты
                    </Link>

                </div>
                <Menu>
                    <MenuButton className={styles.buttAdress} as={Button}
                        leftIcon={<FaMapMarkerAlt size={14} color="#FF6665" />} rightIcon={<ChevronDownIcon />}
                        style={{ background: 'transparent', color: '#c6c6c6', fontSize: '14px', border: 'transparent' }}>
                        Адреса
                    </MenuButton>
                    <MenuList className={styles.adressMenu}>
                        <MenuItem >{<FaMapMarkerAlt size={14} color='#23bc3c' style={{ marginRight: '7px', fontSize: '10px' }} />}  Москва</MenuItem>
                        <Link to='/contacts'><MenuItem style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '900', }}>Ленинский пр-т, 68</span>
                            <div >
                                <span style={{ fontSize: '15px', fontWeight: '900', color: '#9b2015', marginRight: '5px' }}>M</span>
                                <span style={{ fontSize: '13px' }}>Университет</span>

                            </div>
                        </MenuItem></Link>

                        <Link to='/contacts'><MenuItem style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '900', }}>Новая Басманная, 31с1</span>
                            <div >
                                <span style={{ fontSize: '15px', fontWeight: '900', color: '#0000ff', marginRight: '5px' }}>M</span>
                                <span style={{ fontSize: '13px' }}>Бауманская</span>

                            </div>
                        </MenuItem></Link>


                        <Link to='/contacts'><MenuItem style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '900', }}>Мастеркова, 1</span>
                            <div >
                                <span style={{ fontSize: '15px', fontWeight: '900', color: '#00ff00', marginRight: '5px' }}>M</span>
                                <span style={{ fontSize: '13px' }}>Автозаводская</span>

                            </div>
                        </MenuItem></Link>
                    </MenuList>
                </Menu>
                <div className={styles.divTime}>
                    <Tooltip label="Магазин открыт" bg={'green.400'}>
                        <div className={styles.divTimeTooltip}>
                            <span className={styles.spanTime}>
                                <Icon as={IoMdTime} boxSize={4} bg="blue.500" color="white" rounded="full" />
                            </span>
                            <span style={{ marginLeft: '5px' }}>
                                11:00 - 22:00
                            </span>
                        </div>
                    </Tooltip>
                </div>
            </div>
            <div className={styles.links}>
                {user.authUser ? (
                    <>
                        <div className={styles.Hello}>Привет!</div>
                        <div className={styles.Hello1}>{user.user.userName}</div>
                        <Link className='l' to={'/'} onClick={logoutHandler}>
                            Выйти
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className='l' to="/login">
                            Войти
                        </Link>
                        <Link className='l' to="/reg">
                            Регистрация
                        </Link>
                    </>
                )}



            </div>
        </div>
    )
}
