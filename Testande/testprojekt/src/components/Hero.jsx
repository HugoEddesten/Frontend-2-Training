
import styled from "styled-components"
import styles from "../Styles/hero.module.css"
import heroImage from "../assets/Yarn2.webp"

const Header = styled.h1 `
    display: flex;
    padding: 5em;
    font-size: 2em;
    font-family: sans-serif;
    
`

function Hero(){
    return (
        <div className={styles.herodiv}>
            <Header>Super Yarn Company</Header>
            <img className={styles.heroimage} src={heroImage} />
        </div>
    )
}


export default Hero