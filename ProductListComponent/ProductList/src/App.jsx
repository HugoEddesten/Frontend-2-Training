/* eslint-disable no-unused-vars */
import HorizontalProductList from "./components/HorizontalProductList"
import styles from "./Styles/app.module.css"


function App() {
  const productList = [
    {name: "Bomull Röd", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
  ]

  const productList2 = [
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
    {name: "Bomull Grön", price: 79},
  ]

  return (
    <div className={styles.app}>
      <HorizontalProductList products={productList}/>
      <HorizontalProductList products={productList2}/>
      
    </div>
    
  )
}

export default App
