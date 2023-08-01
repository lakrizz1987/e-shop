import styles from './Main.module.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductContext from '../../context/ProductContext';

import { useContext, useEffect, useState } from 'react';


const Main = ({ category, search }) => {

    const ctx = useContext(ProductContext);
    const [count, setCount] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const [allProducts, setAllProducts] = useState(ctx.allProducts.sort((a,b)=> a.name.localeCompare(b.name)));

    const [color, setColor] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    function filterProductsByColor(e) {
        const color = e.target.value;
        setColor(color);
    }

    function filterProductsByPrice(e) {
        const price = e.target.value;
        setPriceRange(price);
    }

    const [criteria,setCriteria] = useState('A-Z')

    function sortProducts(e){
       setCriteria(e.target.value)
        
        if(criteria === 'priceDesc'){
            setAllProducts(state=>state.sort((a,b)=> Number(a.price)-Number(b.price)))
        }else if(criteria === 'priceAsc'){
            setAllProducts(state=>state.sort((a,b)=> Number(b.price)-Number(a.price)))
        }else if(criteria === 'A-Z'){
            setAllProducts(state=>state.sort((a,b)=> b.name.localeCompare(a.name)))
        }else if(criteria === 'Z-A'){
            setAllProducts(state=>state.sort((a,b)=> a.name.localeCompare(b.name)))
        }

        setCount(8)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (category === 'All') {
            setAllProducts(ctx.allProducts);
            setAllProducts(state=>state.sort((a,b)=> a.name.localeCompare(b.name)))
            if (priceRange === 'less') {
                setAllProducts(state => state.filter(product => Number(product.price) <= 100))
            } else if (priceRange === 'up') {
                setAllProducts(state => state.filter(product => Number(product.price) > 100))
            }
            if (color === 'red') {
                setAllProducts(ctx.allProducts.filter(prod => prod.color === 'red'))
                if (priceRange === 'less') {
                    setAllProducts(state => state.filter(product => Number(product.price) <= 100))
                } else if (priceRange === 'up') {
                    setAllProducts(state => state.filter(product => Number(product.price) > 100))
                }
            } else if (color === 'white') {
                setAllProducts(ctx.allProducts.filter(prod => prod.color === 'white'))
                if (priceRange === 'less') {
                    setAllProducts(state => state.filter(product => Number(product.price) <= 100))
                } else if (priceRange === 'up') {
                    setAllProducts(state => state.filter(product => Number(product.price) > 100))
                }
            }

            if (search) {
                setAllProducts(ctx.allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase())))
            }

        } else {
            setAllProducts(ctx.allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase()))
            if (priceRange === 'less') {
                setAllProducts(state => state.filter(product => Number(product.price) <= 100))
            } else if (priceRange === 'up') {
                setAllProducts(state => state.filter(product => Number(product.price) > 100))
            }
            if (color === 'red') {
                setAllProducts(oldState => oldState.filter(product => product.color === 'red'))

                if (priceRange === 'less') {
                    setAllProducts(state => state.filter(product => Number(product.price) <= 100))
                } else if (priceRange === 'up') {
                    setAllProducts(state => state.filter(product => Number(product.price) > 100))
                }
            } else if (color === 'white') {
                setAllProducts(oldState => oldState.filter(product => product.color === 'white'))

                if (priceRange === 'less') {
                    setAllProducts(state => state.filter(product => Number(product.price) <= 100))
                } else if (priceRange === 'up') {
                    setAllProducts(state => state.filter(product => Number(product.price) > 100))
                }
            }
            setAllProducts(state=>state.sort((a,b)=> a.name.localeCompare(b.name)))
        }

        
    }, [category, search, color, priceRange, ctx.allProducts])
    // get first 8 products
    const products = allProducts.slice(0, count);
    // load 8 more products with state change
    function loadMoreProducts() {
        setIsLoading(true);
        setCount(count => count += 8);
        setIsLoading(false)
    }

    return (
        <section className={styles['main-wraper']}>
            <section className={styles.sorting}>
                <div className={styles.categoryBox}>
                    <span>Category:{category}</span>
                    <span>Products: {allProducts.length}</span>
                </div>
                <div>
                    <label htmlFor="sorting">Sort by:</label>
                    <select defaultChecked="A-Z" name="sorting" id="products" onChange={sortProducts}>
                        <option value="A-Z">A-z</option>
                        <option value="Z-A">Z-a</option>
                        <option value="priceAsc">Prise Asc</option>
                        <option value="priceDesc">Price Desc</option>
                    </select>
                </div>
            </section>

            <aside className={styles.aside}>
                <fieldset>
                    <legend>Select color:</legend>
                    <form onChange={filterProductsByColor}>
                        <div>
                            <input defaultChecked={true} type="radio" id="all" name="favColors" value="all" />
                            <label htmlFor="all-colors">All</label>
                        </div>

                        <div>
                            <input type="radio" id="red" name="favColors" value="red" />
                            <label htmlFor="red">Red</label>
                        </div>

                        <div>
                            <input type="radio" id="white" name="favColors" value="white" />
                            <label htmlFor="white">White</label>
                        </div>
                    </form>
                </fieldset>

                <fieldset>
                    <legend>Price:</legend>
                    <form onChange={filterProductsByPrice}>
                        <div>
                            <input defaultChecked={true} type="radio" id="all-price" name="favPrice" value="all-price" />
                            <label htmlFor="all-price">All</label>
                        </div>

                        <div>
                            <input type="radio" id="less" name="favPrice" value="less" />
                            <label htmlFor="less">{"<=100"}</label>
                        </div>

                        <div>
                            <input type="radio" id="up" name="favPrice" value="up" />
                            <label htmlFor="up">{">100"}</label>
                        </div>
                    </form>
                </fieldset>

            </aside>

            <section className={styles.products}>
                {products.length === 0 && <h2 style={{ 'alignSelf': 'center' }}>No products!</h2>}
                {products.map(product => <ProductCard
                    name={product.name}
                    img={product.img}
                    prevPrice={product.prevPrice}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                />)}
                <div className={styles['btn-container']}>
                <button className={styles.btnMore} disabled={count >= allProducts.length} onClick={loadMoreProducts}>{isLoading ? 'Loading...' : 'Load more...'}</button>
            </div>
            </section>
            
        </section>
    )
}

export default Main;