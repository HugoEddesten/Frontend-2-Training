import React from "react";
import styles from "../Styles/product.module.css";





function Product({name, price, imgName}) {
    
    return (
        <a className={styles.product}>
            <img className={styles.productImage} src={`../../public/${imgName}`} alt="Picture of product"/>
            <p>{name}</p>
            <p>{price} SEK</p>
        </a>
    )
}

export default Product