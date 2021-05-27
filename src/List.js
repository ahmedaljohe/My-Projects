import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Space from './Space';
import {checkTask, setTasks } from './reducer';

const Container = styled.div`
background-color:#1c2024;
display: flex;
flex-direction:column;
width:80%;
margin:auto;
border:solid black;
`
const Widget = styled.div`
background-color:hsl(223deg 6% 23%);
border-radius:24px;
display: flex;
width: 100%;
margin:auto;
`
const Input= styled.input.attrs({ type: 'text' , placeholder:"Insert a new tesk",}) `
  width: 350px;
  border-radius: 4px;
  
`
const Line = styled.div `
 border-left: 1px solid whitesmoke;
            height: 25px;
            left: 50%;
            width:70px;
            margin:auto 0;
`
const Taitle=styled.div `
  display: flex;
  justify-content:space-around;
  color:whitesmoke;
`
const Heading = styled.div`
display:flex;
flex-direction:column;

`
const Span = styled.span `
text-align:center;
font-weight:400;
`
const InptCheckbox = styled.input.attrs({ type: 'checkbox' })`

`;
console.log(`InptCheckbox`, InptCheckbox)
const Lable = styled.label `
color: whitesmoke;
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
  const todeReducer = useSelector((state) => state.todeReducer)

  {console.log(`todeReducer.`, todeReducer)}
//  const comTask=useSelector((state)=>state.counter.comTask)
//  const uncomTask=useSelector((state)=>state.counter.uncomTask)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setTasks([{ id: 1, name: 'task 1', complated: false}, { id: 2, name: 'task 8', complated: false}, { id: 3, name: 'task 5', complated: true}]))
  }, [])
  return (
    <Container>
      <Taitle>
        <Heading>
        <Span>{todeReducer.comTask}</Span>
        <Span>Task Com</Span>
        </Heading>
        <Line />
        <Heading>
        <Span>{todeReducer.uncomTask}</Span>
        <Span>Task unCom</Span>
        </Heading>
 
      </Taitle>
        <Widget>
          {todeReducer.tasks?.map((item,i) => (
            <div key={i}>
             <InptCheckbox
             value={todeReducer.tasks.complated}
             name={todeReducer.tasks.name}
             id={todeReducer.tasks.id}
             onClick={(e)=>dispatch(checkTask(e.target.value))}
             />
            <Lable>task{i}</Lable>
            </div>
          ))}
        </Widget>
        <Space size={10}/>
         {/* <Space size={10}/>
        <Widget>
          <InptCheckbox 
            onClick={(e)=>dispatch(checkTask(e.target.checked))}
         />
          <Lable>task 1</Lable>
        </Widget>
        <Space size={10}/>
        <Widget>
          <InptCheckbox 
           onClick={(e)=>dispatch(checkTask(e.target.checked))}
          />
          <Lable>task 2</Lable>
        </Widget>
        <Space size={10}/> */}
        <Input />
      {/* <StyledCheckbox /> */}
    </Container>
    )
}

export default List;
