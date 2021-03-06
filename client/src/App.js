import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import AuthState from '../src/context/authContext/authState';
import setToken from '../src/utils/setToken';
import PrivateRoute from '../src/components/pages/routes/PrivateRoute';
import UploadProduct from './components/pages/uploadProduct/UploadProduct'

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
             
        <Router>
        <Navbar />
          <div className="">
          
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/upload/product' component={UploadProduct} />
            </Switch>
          </div>
        </Router>
      
    </AuthState>
  );
}
export default App;