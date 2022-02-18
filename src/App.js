import './App.css';
import Product from './Components/Product';
import styled from 'styled-components';
import products from './products.json';
function App() {
  return (
    <AppFrame className="App">
    {products.map((e,index)=>(
      <Product product={e} key={index}/>
    ))}
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
