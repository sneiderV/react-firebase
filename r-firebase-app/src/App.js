import React from 'react';
import styled from 'styled-components';
import ContactsList from './components/ContactsList';
import Form from './components/Form';

const App = () => {
  return ( 
    <Container>
      <Tittle>Contact list</Tittle>
      <Form/>
      <ContactsList/>
    </Container>
   );
}

const Container = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
`;
 
const Tittle = styled.h2`
  margin-bottom: 10px
`;

export default App;