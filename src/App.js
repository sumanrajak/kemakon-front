import './App.css';
import Nav from './Nav'
import Cards from './Cards'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './screens/Home'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Login from './screens/Login'

//https://oldamazona.webacademy.pro/cart/5f65ed2cb4ff4b32a5ba5ace?qty=1
function App() {
  return (
    
      
    <BrowserRouter>
    <div className="App">
      <div className="Navv">
        <Nav></Nav>
      </div>
      <Route path='/' component={Home} exact></Route>
      <Route path='/product/:id' component={Product}></Route>
      <Route path='/cart' component={Cart}></Route>
      <Route path='/login' component={Login}></Route>


     
    </div>
    </BrowserRouter>

  );
}

export default App;
