import Header from './Header';
import List from './List';
import styled from 'styled-components';
import Space from './Space';

const Container = styled.div`
background-color:#1c2024;
display: flex;
flex-direction:column;
width:80%;
margin:auto;
border:solid black;

`
function App() {
  return (
    <Container>
      <Header />
      <Space />
      <List />
    </Container>
  );
}

export default App;
