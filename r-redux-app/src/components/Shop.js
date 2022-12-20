import React from 'react';

import Products from "./Products"

const Shop = ({productsList, addProductToSC}) => {
    return ( 
        <div>
            <h1>Shop</h1>
            <Products productsList={productsList} addProductToSC={addProductToSC}/>
        </div>
     );
}
 
export default Shop;