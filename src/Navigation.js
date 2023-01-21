import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';
import { Register } from './Register/Register';
import Home from './Home/Home';
import Products from './materialUI/Products';
import ResponsiveAppBar from './appBar/ResponsiveAppBar';
import Main from './materialUI/Main';
import Recipe from './materialUI/Recipe';
import Blogs from './materialUI/Blogs'
import ProductDetails from './productDetails/ProductDetails';

 const Navigation=()=>
{
    return(
        <>
        <Router>
            <Routes>
                
                <Route path='/productdetails' element={<ProductDetails/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/recipe' element={<Recipe/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                {/* <Route path='/appbar' element={<ResponsiveAppBar/>}/> */}
                <Route path='/main' element={<Main/>}/>

                <Route path="/" element={<Main/>} />
                
            </Routes>
        </Router>

        </>
    );
}
export default Navigation;