import styles from '../styles/product.module.css'

function Product({name, price, material, imgName}) {
    return (
        <a className={styles.product}>
            <img className={styles.productImg} src={`../../public/${imgName}`}/>
            <p>{name}</p>
            <p>{price} SEK</p>
        </a>
    )
}

export default Product