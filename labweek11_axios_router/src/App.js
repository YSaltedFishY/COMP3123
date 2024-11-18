import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import {Routes, Route, BrowserRouter, NavLink, Link} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserDetails from './components/UserDetails';
import { Component } from 'react';

export default class App extends Component{
      render() {
        return(
          <div>
            <h1>Axios and Navigation</h1>
            {/* <UserList/> */}
            <BrowserRouter>
              <nav>
            
                <a href= '/home'>Home </a> |  
                <a href= '/about?college=GBC'>About </a> | 
                <NavLink to='/contact/HaoYun'>Contact</NavLink> |
                <Link to='/userList'>User list</Link>
              </nav>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contact/:name' element={<Contact/>}/>
                <Route path='/userList' element={<UserList/>}/>
                <Route path='/user/:userid' element={<UserDetails/>}/>
              </Routes>
            </BrowserRouter>
          </div>
    )
  }
}
