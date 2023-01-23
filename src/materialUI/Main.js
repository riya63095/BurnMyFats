import  React from 'react';
import Products from './Products';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import HomePage from '../homePage/HomePage';
import Login from '../Login/Login';
import ProductDetails from '../productDetails/ProductDetails';
const Main = () => {

    const data = localStorage.getItem('keys')
     
    return(
        <div>
        {/* <ProductDetails /> */}
           <Login />
            {/* <Products /> */}
        </div>
    );
}

export default Main;