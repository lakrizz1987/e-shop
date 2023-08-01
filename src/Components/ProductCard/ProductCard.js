import styles from './ProductCard.module.css';
import ProductContext from '../../context/ProductContext';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const { addItemToBag } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <div className={styles['product-box']}>
            <img className={styles['product-card-img']} src={props.img} alt='product' />
            <h4>{props.name}</h4>
            <section className={styles.price}>
                {props.prevPrice && <span className={styles.prevPrice}>{props.prevPrice}$</span>}
                <span>{props.price}$</span>
            </section>
            <button onClick={addItemToBag} className={styles.bagBtn}>Add to bag</button>
            <button className={styles.bagBtn} onClick={() => navigate(`/details/${props.id}`)}>Details</button>
        </div>
    )
}

export default ProductCard;