import styles from "./Header.module.css";
import ProductContext from "../../context/ProductContext";
import PopUpModal from "../Modal/Modal";

import { NavLink } from 'react-router-dom';
import { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { ImMenu } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    //stete for mobile nav
    const [isMobile, setIsmobile] = useState(false);
    //set ref to input
    const textInput = useRef(null);

    const navigate = useNavigate();

    const { itemsInBag } = useContext(ProductContext);

    function toggleMenu() {
        setIsmobile(state => !state)
    }

    // add searching by text handler
    function submitHandler(e) {
        e.preventDefault();

        const searchText = textInput.current.value;

        if (searchText) {
            navigate({ pathname: '/search', search: searchText })
            textInput.current.value = '';
        }

    };

    //creating header with nav,search and shopping cart
    return (
        <>

            <div className={styles['header-wraper']}>
                <PopUpModal />
                <button className={`${styles['menu-icon']}`}
                    onClick={toggleMenu}>{isMobile ? 'X' : <ImMenu></ImMenu>}</button>

                <h1 className={styles['header-logo']}>Nova Shoes</h1>

                <nav className={`${styles['mobile-nav']} ${isMobile ? `${styles['mobile-nav-active']}` : ''}`}>
                    <button className={`${styles['menu-icon-close']}`}
                        onClick={toggleMenu}>X</button>
                    <NavLink onClick={toggleMenu} style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/'}>All</NavLink>
                    <NavLink onClick={toggleMenu} style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/sport'}>Sport</NavLink>
                    <NavLink onClick={toggleMenu} style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/casual'}>Casual</NavLink>
                </nav>

                <nav className={styles['site-nav']}>
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/'}>All</NavLink>
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/sport'}>Sport</NavLink>
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '', textDecoration: isActive ? 'underline' : '' } }}
                        className={styles.link} to={'/casual'}>Casual</NavLink>
                </nav>
                <form className={styles.navForm} onSubmit={submitHandler}>
                    <input ref={textInput} name="searchText" className={styles['input-field']} type="text" placeholder="Search product...." />
                    <input className={styles.button} value='' type="submit" />
                </form>

                <div className={styles.shoppingcart}>
                    <FiShoppingCart style={{ 'fontSize': '24px' }} />
                    <span>{itemsInBag}</span>
                </div>

            </div >

            <img style={{ 'width': '100%', 'maxHeight': '180px', "objectFit": "cover" }}
                src="https://allgoodtales.com/wp-content/uploads/2018/10/Nike-Header-min.jpg" alt="banner"></img>

        </>

    )

}

export default Header;