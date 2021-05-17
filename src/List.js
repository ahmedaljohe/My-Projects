import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {checkTask} from './reducer';

const Widget = styled.div`
/* background-color:#393a3f; */
border-radius:24px;
display: flex;
width:95%;
margin:auto;
border:solid red;

`

const InptCheckbox = styled.input.attrs({ type: 'checkbox' })`

`;
console.log(`InptCheckbox`, InptCheckbox)
const Lable = styled.label `
color:wheat;
`;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${props => props.checked ? 'salmon' : 'papayawhip'};
//   border-radius: 3px;
//   transition: all 150ms;
// `

const List = () => {
  const comTask = useSelector((state)=>state.counter.comTask)
  const uncomTask = useSelector((state)=>state.counter.uncomTask)
  const dispatch = useDispatch()
  return (
    <Widget>
      <h1>{comTask}</h1>
      <h1>{uncomTask}</h1>
      <Lable>task 1</Lable>
      <InptCheckbox 
        // value={true}
        // checked={Value}
        // name='value'
        onClick={(e)=>dispatch(checkTask(e.target.checked))}
      />
       <Lable>task 2</Lable>
      <InptCheckbox 
        // value={true}
        // checked={Value}
        // name='value'
        onClick={(e)=>dispatch(checkTask(e.target.checked))}
      />
       <Lable>task 3</Lable>
      <InptCheckbox 
        // value={true}
        // checked={Value}
        // name='value'
        onClick={(e)=>dispatch(checkTask(e.target.checked))}
      />
      {/* <StyledCheckbox /> */}
    </Widget>
    )
}

export default List;
