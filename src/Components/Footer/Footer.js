import styles from './Footer.module.css';

import { NavLink } from 'react-router-dom';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={styles['footer-wraper']}>
            <div className={styles['icon-wraper']}>
                <BsFacebook className={styles.icons} />
                <BsInstagram className={styles.icons} />
                <BsLinkedin className={styles.icons} />
            </div>

            <nav className={styles.nav}>
                <NavLink className={styles.links}>About us</NavLink>
                <NavLink className={styles.links}>Contacts</NavLink>
                <NavLink className={styles.links}>Terms of usage</NavLink>
            </nav>
        </div>
    )
}

export default Footer;