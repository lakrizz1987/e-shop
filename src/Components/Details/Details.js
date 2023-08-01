import styles from './Details.module.css';
import ProductContext from '../../context/ProductContext';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


const Details = () => {
    //get product id
    const { id } = useParams();
    
    const navigate = useNavigate();
    const ctx = useContext(ProductContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(ctx.allProducts.filter(product => product.id === id)[0])
    }, [ctx.allProducts, id])


    return (
        product ?
            <div className={styles['details-wraper']}>
                <h1>{product.name}</h1>
                <img className={styles.image} src={product.img} alt='product'></img>
                <div className={styles.numbers}>
                    <span>40</span>
                    <span>41</span>
                    <span>42</span>
                    <span>43</span>
                    <span>44</span>
                    <span>45</span>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className={styles.buttons}>
                    <button onClick={()=>ctx.addItemToBag()}>Add to bag</button>
                    <button onClick={()=>navigate(-1)}>Back</button>
                </div>
            </div> : <h1>Loading....</h1>
    )
}

export default Details;