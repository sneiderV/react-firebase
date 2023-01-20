import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';
import { ReactComponent as DownIcon } from './../assets/images/down.svg';

const SelectContainer = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
const SelectedOption = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Options = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Option = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

const CategoriesSelect = ({category, changeCategory}) => {

    const [showSelect, changeSelect] = useState(false);

    const categoriesList = [
        {id: 'food', text: 'Food'},
        {id: 'bills and payments', text: 'Bills and payments'},
        {id: 'home', text: 'Home'},
        {id: 'transportation', text: 'Transportation'},
        {id: 'clothing', text: 'Clothing'},
        {id: 'health and hygiene', text: 'Health and Hygiene'},
        {id: 'shopping', text: 'Shopping'},
        {id: 'fun', text: 'Fun'}
    ]

    const handleClick = (e) => {
        changeCategory(e.currentTarget.dataset.value);
    }
    return ( 
        <SelectContainer onClick={()=>{changeSelect(!showSelect)}}>
            <SelectedOption>{category}</SelectedOption>

            {showSelect &&
                <Options>
                    {categoriesList.map((cat) => {
                        return <Option key={cat.id} onClick={handleClick} data-value={cat.id}> 
                                {cat.text} </Option>
                    })}
                </Options>
            }
        </SelectContainer>
     );
}
 
export default CategoriesSelect;