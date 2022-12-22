import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import {collection, onSnapshot} from 'firebase/firestore'
import Contact from './Contact';

const ContactsList = () => {
    const [contacts, updateContacts] = useState([]);

    //hook
    useEffect(()=>{
        onSnapshot(
            collection(db,'users'),
            (snapShot)=>{
                updateContacts(
                    snapShot.docs.map((doc)=>{
                        return {...doc.data(), id:doc.id};
                    })
                );
            },
            (error)=>{
                console.error("Some wrong with snapshot!");
            }
            );
    },[]);

    return (
        <ContactsContainer>
            {
                contacts.map((c)=>{
                    return <Contact key={c.id} id={c.id} name={c.name} email={c.email}/>
                })
            }
            
        </ContactsContainer>
      );
}

const ContactsContainer = styled.div`
    margin-top: 40px;
`;
 
export default ContactsList;