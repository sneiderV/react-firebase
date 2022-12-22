import React, { useState } from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import {doc, updateDoc, deleteDoc } from 'firebase/firestore';

const Contact = ({id, name, email}) => {
    const [isEditingContact, editingContact] = useState(false);
    const [newName, updateName] = useState(name);
    const [newEmail, updateEmail] = useState(email);
   
    const updateContact = async (e)=>{
        e.preventDefault();
        try {
            await updateDoc(
                doc(db,'users',id),
                {name: newName, email:newEmail}
                );
            editingContact(false);
        } catch (error) {
            console.error("Some wrong with update document in firebase!");            
        }
    }

    const deleteContact = async (id)=>{
        try {
            await deleteDoc(doc(db,'users',id));
        } catch (error) {
            console.error("Some wrong with delete document in firebase!");      
        }
    }
    
    return ( 
        <ContactContainer>
             {
                isEditingContact ? 
                <form action='' onSubmit={updateContact}>
                    <Input 
						type="text"
						name="name"
						value={newName}
						onChange={(e) => updateName(e.target.value)}
						placeholder="Name"
					/>
					<Input 
						type="email"
						name="email"
						value={newEmail}
						onChange={(e) => updateEmail(e.target.value)}
						placeholder="Email"
					/>
					<Button type="submit">Update</Button>
                </form>
                :
                <>
					<Name>{name}</Name>
					<Email>{email}</Email>
					<Button 
                    onClick={() => editingContact(!isEditingContact)}> Edit </Button>
					<Button onClick={() => deleteContact(id)}> Delete </Button>
				</>
             }
        </ContactContainer>
     );
}

const ContactContainer = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Name = styled.p`
	font-weight: bold;
`;
 
const Email = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Button = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

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
 
export default Contact;