import React, { useState } from 'react';
import Button from '../elements/Button';
import { BigInput, ButtonContainer, FilterContainer, Form, Input } from './../elements/ElementsForms';
import { ReactComponent as PlusIcon } from './../assets/images/plus.svg';
import CategoriesSelect from './CategoriesSelect';
import DatePicker from './DatePicker';
import AddExpense from '../firebase/addExpense';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from '../context/AuthContext';

const ExpenseForm = () => {

    const [description, changeDescription] = useState('');
    const [value, changeValue] = useState('');
    const [category, changeCategory] = useState('home');
    const [date, changeDate] = useState(new Date());
    const { user } = useAuth();

    const handleChange = (e) => {
        if (e.target.name === 'Description') {
            changeDescription(e.target.value);
        } else {
            changeValue(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AddExpense({
            uidUser: user.uid,
            description: description,
            value: value,
            category: category,
            date: getUnixTime(date)
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FilterContainer>
                <CategoriesSelect category={category} changeCategory={changeCategory} />
                <DatePicker date={date} changeDate={changeDate} />
            </FilterContainer>
            <div>
                <Input type="text" name='Description' id='description' placeholder='Description' value={description} onChange={handleChange} />
                <BigInput type="text" name='Value' id='Value' placeholder='$0.00' value={value} onChange={handleChange} />
            </div>
            <ButtonContainer>
                <Button as="button" primario conIcono type='submit'>
                    Add expense <PlusIcon />
                </Button>
            </ButtonContainer>
        </Form>
    );
}

export default ExpenseForm;