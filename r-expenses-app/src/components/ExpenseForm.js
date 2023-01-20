import React, { useState } from 'react';
import Button from '../elements/Button';
import { BigInput, ButtonContainer, FilterContainer, Form, Input } from './../elements/ElementsForms';
import { ReactComponent as PlusIcon } from './../assets/images/plus.svg';

const ExpenseForm = () => {

    const [description, changeDescription] = useState('');
    const [value, changeValue] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'Description') {
            changeDescription(e.target.value);
        } else {
            changeValue(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    return ( 
        <Form>
            <FilterContainer> filters </FilterContainer>
            <div>
                <Input type="text" name='Description' id='description' placeholder='Description' value={description} onChange={handleChange}/>
                <BigInput type="text" name='Value' id='Value' placeholder='$0.00' value={value} onChange={handleChange}/>
            </div>
            <ButtonContainer>
                <Button as="button" primario conIcono type='submit'>
                    Add expense <PlusIcon/>
                </Button>
            </ButtonContainer>
        </Form>
    );
}
 
export default ExpenseForm;