import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';

const Form = () => {
    const [name,changeName] = useState('');
    const [email,changeEmail] = useState('');

    const onSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            console.log('saving...');
            const docRef = await addDoc(collection(db,'users'),{name:name, email:email});
            console.log('saving :'+name+email+" Document written with ID: ", docRef.id);
            changeName('');
            changeEmail('');
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <form action='' onSubmit={onSubmit}>
            <Input 
				type="text"
				name="name"
				value={name}
				onChange={(e) => changeName(e.target.value)}
				placeholder="Name"
			/>
			<Input 
				type="email"
				name="email"
				value={email}
				onChange={(e) => changeEmail(e.target.value)}
				placeholder="Email"
			/>
			<Button type="submit">Add +</Button>
        </form>
     );
}

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

const Button = styled.button`
	padding: 10px 30px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;
 
 
export default Form;