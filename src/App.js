import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Redirect, Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Signup from './component/Signup';
import Login from './component/Login';
import Search from './component/Search';
import Cart from './component/Cart';
import CartBtn from './component/CartBtn';
import Checkout from './component/Checkout';
import Payment from './component/Payment';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/cartbtn" component={CartBtn}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/payment" component={Payment}/>
        


        
        
        
        
        <Redirect to="/" />

        <Home />
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
