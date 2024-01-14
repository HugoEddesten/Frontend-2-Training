import styles from "../styles/products.module.css"
import Product from "./Product"
import React from 'react';

function Products({ products }, key) {

    

    return (
        <div className={styles.productList}>
            {
            products.map((product, index) => (
                <Product key={index} name={product.name} price={product.price} material={product.material} imgName={product.imgName}/>
            ))}
        </div>
    )
}

export default Products