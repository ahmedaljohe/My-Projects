import React from 'react'
import styled from 'styled-components';

const Spacing = styled.div`
height:10px;
width:100%;
`
const Space= ({size}) => {
  return (
   <Spacing style={{height:size}}/>
    )
}

export default Space
