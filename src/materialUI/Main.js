import  React from 'react';
import Products from './Products';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import HomePage from '../homePage/HomePage';
import ProductDetails from '../productDetails/ProductDetails';
const Main = () => {

    const data = localStorage.getItem('keys')
     
    return(
        <div>
        {/* <ProductDetails /> */}
            <ResponsiveAppBar />
            <HomePage />
            {/* <Products /> */}
        </div>
    );
}

export default Main;