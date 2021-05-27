import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
   <Nav>
     <Title>To Do List</Title>
     <Button>light</Button>
   </Nav>
  )
}

const Nav = styled.div`
  display:flex;
  justify-content: space-around;
  justify-items:baseline;
  color: ${props => props.color ? props.color : 'red'};
  background-color: #202020;
`
const Title = styled.h1`
  color:wheat;
`
const Button = styled.button`
margin-top:27px;
width: 40px;
height: 40px;
`
export default Header
