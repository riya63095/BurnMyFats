import React from 'react';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import './ProductDetails.css';
import productData from '../productData/productData';

const ProductDetails = () => {
const item = localStorage.getItem('pname');
return(
    <div>
        < ResponsiveAppBar />
                    
            {productData.map((pdata,index)=> (                
                <div key={index}>
                {item===pdata.alt &&
                <div>
                    <a href={pdata.img}>
                        <img class="styleImg" src={pdata.img} alt={pdata.alt} />
                    </a>
                    <div class = "def">
                        <h1 >{pdata.name}</h1>
                        <h4>Total Nutritional Value in DV(Daily Value) :-</h4>
                        <table style={{'paddingLeft':5}}>

                        {Object.entries(pdata.content).map((data)=>(                                                            
                        <tr>
                        {console.log(data)}
                            <td>{data[0]}</td>
                            <td style={{'paddingLeft':30}}>{data[1]}</td>                
                        </tr>
                        ) 
                        )}                       
                        </table>
                        <h4>Description</h4>
                        <p >{pdata.description}</p>
                    </div>
                </div> 
                }
                </div>
            ))}
        
        
        
    </div>
    );
}
export default ProductDetails;