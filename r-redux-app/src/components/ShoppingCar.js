import React from 'react';
import styled from 'styled-components';

const ShoppingCar = ({listCar}) => {
   
    return ( 
        <div>
            <h3>Shopping Car</h3>
            {
                listCar.length>0 ? 
                listCar.map((p,i)=>{
                    return(
                        <Product key={i}>
                            <NameProduct>{p.name}</NameProduct>
                            Quantity: {p.quantity}
                        </Product>
                        
                    )
                })
                :
                <p> Haven't yet added products</p>
            }
        </div>
     );
}
const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;
const NameProduct = styled.p`
    font-weigth: bold;
    font-size: 16px;
    color: #000;
`;
export default ShoppingCar;