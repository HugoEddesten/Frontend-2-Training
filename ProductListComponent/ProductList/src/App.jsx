/* eslint-disable no-unused-vars */
import HorizontalProductList from "./components/HorizontalProductList"
import styles from "./Styles/app.module.css"


function App() {
  const productList = [
    {name: "Bomull Kit", price: 79, imgName: "Yarn.webp"},
    {name: "Bomull Tunn Kit", price: 99, imgName: "Yarn2.webp"},
    {name: "Bomull Kit", price: 79, imgName: "Yarn.webp"},
    {name: "Bomull Tunn Kit", price: 99, imgName: "Yarn2.webp"},
    {name: "Bomull Kit", price: 79, imgName: "Yarn.webp"},
    {name: "Bomull Tunn Kit", price: 99, imgName: "Yarn2.webp"},
    {name: "Bomull Kit", price: 79, imgName: "Yarn.webp"},
    {name: "Bomull Tunn Kit", price: 99, imgName: "Yarn2.webp"},

  ]

  const productList2 = [
    {name: "Bomull Röd", price: 79, imgName: "Yarn2.webp"},
    {name: "Bomull Röd", price: 79, imgName: "Yarn2.webp"},
    {name: "Bomull Röd", price: 79, imgName: "Yarn2.webp"},
    {name: "Bomull Röd", price: 79, imgName: "Yarn2.webp"},
    {name: "Bomull Röd", price: 79, imgName: "Yarn2.webp"},

  ]

  return (
    <div className={styles.app}>
      <HorizontalProductList products={productList}/>
      <HorizontalProductList products={productList2}/>
      
    </div>
    
  )
}

export default App
