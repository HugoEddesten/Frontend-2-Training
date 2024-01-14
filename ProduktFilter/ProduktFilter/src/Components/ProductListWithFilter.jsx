import Products from "./Products.jsx"
import Filter from "./Filter.jsx"
import { items } from '../data.jsx'
import styles from "../styles/productListWithFilter.module.css"
import React, {useState} from 'react';


function ProductListWithFilter() {
    
    let selectedFilter = useState();
    
    let [filteredItems, setFilteredItems] = useState(items);
    const filters = [...new Set(items.map((val) => val.material))];
    console.log(filteredItems);
    

    const filterButtonClicked = (category) => {
        filteredItems = items
        
        selectedFilter = category;
        setFilteredItems(filteredItems.filter((product) => {
            return product.material === selectedFilter;
        }))
        
    }
   

    return (
        <div className={styles.productListWithFilter}>
            <Filter handler={filterButtonClicked} filters={filters}/>
            <Products products={filteredItems} key={selectedFilter}/>
        </div>
    )
}

export default ProductListWithFilter