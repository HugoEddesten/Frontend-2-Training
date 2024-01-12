
import styles from "../Styles/hero.module.css"
import heroImage from "../assets/Yarn2.webp"

function Hero(){
    return (
        <div className={styles.herodiv}>
            
            <img className={styles.heroimage} src={heroImage} />
        </div>
    )
}

export default Hero