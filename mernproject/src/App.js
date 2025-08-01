
import './App.css';
// import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
   <CartProvider>
    {/* by introducing the cartprovider component we make it global and can be used anywhere in the code  */}

    <Router>
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route eact path="/login" element={<Login/>} />
        <Route eact path="/createuser" element={<Signup/>} />
        <Route eact path="/myOrder" element={<MyOrder/>} />
      </Routes>


    </div>
    
    </Router>
   </CartProvider>
  );
}

export default App;
