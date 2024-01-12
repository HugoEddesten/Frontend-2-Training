import styles from "../Styles/product.module.css"
import yarn from "../assets/Yarn2.webp"



function Product({name, price}) {
    return (
        <a className={styles.product}>
            <img className={styles.productImage} src={yarn} alt=""/>
            <p>{name}</p>
            <p>{price} SEK</p>
        </a>
    )
}

export default Product