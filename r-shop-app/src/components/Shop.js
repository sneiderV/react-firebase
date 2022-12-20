import React from 'react';

import Products from "./Products"

const Shop = ({productsList}) => {
    return ( 
        <div>
            <h1>Shop</h1>
            <Products productsList={productsList}/>
        </div>
     );
}
 
export default Shop;