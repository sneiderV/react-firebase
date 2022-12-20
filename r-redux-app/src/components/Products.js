import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Products = ({productsList, addProductToSC}) => {
    return ( 
        <div>
            <h3>Products</h3>
            <ContainerProducts>
                {
                    productsList.map((p, index)=>{
                        return (
                            <Product key={index}> 
                                {p.name}
                                <Button onClick={()=> addProductToSC(p.id, p.name)}> Add + </Button> 
                            </Product>
                            
                        )
                    })
                }
            </ContainerProducts>
        </div>
     );
}

const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Product =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
const Button = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`
const mapStateToProps = (globalState)=>{
    return {
        productsList: globalState.products
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addProductToSC: (id,name)=>{ 
            dispatch({
                id: id,
                name: name,
                type:'ADD_PRODUCT'
            });}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);