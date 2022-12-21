import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
    const [name,changeName] = useState('');
    const [email,changeEmail] = useState('');

    return ( 
        <form action=''>
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