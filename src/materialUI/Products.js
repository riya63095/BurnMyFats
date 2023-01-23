import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Margin } from '@mui/icons-material';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import productData from '../productData/productData';


 
export default function Products() {
  const navigate = useNavigate();
  
  const clickProduct =(e)=>{
  //console.log(e.target.alt)
  
  localStorage.setItem('pname', e.target.alt)
  navigate('/productdetails')
 }
  return (
    <>
    <ResponsiveAppBar />
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:50}}>
    
    {
      productData.map((data)=>(
        
      <Card key={data.alt} onClick={clickProduct} sx={{ maxWidth: 260, margin:1, boxShadow:7}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image={data.img}
            alt={data.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {data.name}
            </Typography>
            <Typography variant="body4" color="text.secondary">
            {data.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    ))}
    
</div>
</>
  );
}