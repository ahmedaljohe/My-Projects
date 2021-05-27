import React from 'react'
import styled from 'styled-components';
import {ReactComponent as DarkMood } from './assets/dark-mode-6682 (1).svg';

const Heading = styled.div`
background-color:#1c2024;
display: flex;
justify-content:space-around;
width:95%;
margin:auto;
border:solid black;
`

const Title= styled.h1`
font-weight:400px;
font-size:36px;
color:whitesmoke;
`;

const Button = styled.button`
  background-color:hsl(223deg 6% 23%);
  cursor:pointer;
  width: 50px;
  border:none;
  height: 25px;
  border-radius: 10px;
  color: white;
  text-align: end;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin:auto 0;
  /* margin-top:10px; */
`;

const Header = (props)=> {

  return (
    <Heading>
      <Title
      style={props.style}
      >
        Taskhero
        {props.title}
      </Title>
      <Button><DarkMood width={20} height={20}/></Button>
    </Heading>
    )
}

export default Header
