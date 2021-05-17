import React from 'react'
import styled from 'styled-components';
import {ReactComponent as DarkMood } from './assets/dark-mode.svg';

const Heading = styled.div`
background-color:#1c2024;
display: flex;
justify-content:space-around;
width:100%;
margin:auto;
border:solid black;
`
const Title= styled.h1`
font-weight:400px;
font-size:24px;
color:#fbeec1;
`;

const Button = styled.button`
background-color:black;
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
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
        hello world
        {props.title}
      </Title>
      <Button><DarkMood fill="ffe400" width={20} height={20}/></Button>
    </Heading>
    )
}

export default Header
