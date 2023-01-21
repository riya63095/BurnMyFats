import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './HomePage.css';

const HomePage = () =>{

    return(
        <>
            <div class='homepage'>
                <div class='homepage-child'>
                    <label>&emsp;&ensp;You don't </label>
                    <label >have to eat less, </label>
                    <label>&emsp;&emsp;you just  </label>
                    <label>have to eat right. </label>
                </div>
                

            </div>
            <div class='recipe'>
                <div style={{width:'80%',marginLeft:'80px'}}>
                    <img  src='http://template-kits.cmsmasters.net/demo-food-and-nutrition/wp-content/uploads/sites/4/2020/03/spots1.png'></img><br />
                    <p style={{fontSize:'2.3rem',width:'90%',height:'25vh'}}>Sharing some <br />
                    recipes that will help to <br />
                    low your carbs.....</p>
                    
                    <img src='http://template-kits.cmsmasters.net/demo-food-and-nutrition/wp-content/uploads/sites/4/2020/03/spots2.png'></img>
                </div> 

                <Card style={{'textAlign':'center',width:'60%',marginLeft:'40px'}} sx={{boxShadow:10}} >
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://cdn.pixabay.com/photo/2016/10/27/22/16/pesto-1776673__340.jpg"
                        alt=""
                    />
                    <CardContent>
                        <Typography fontWeight={700} fontSize={26}   gutterBottom variant="h5" component="div">
                        Recipes
                        </Typography>
                        <Typography fontWeight={300} fontSize={20} variant="body4" color="text.secondary">
                        For your body and mind
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button style={{'marginLeft':'120px'}} size="small" color="primary">
                        EXPLORE
                    </Button>
                    </CardActions>
                </Card>

                <Card style={{'textAlign':'center',width:'60%',marginLeft:'40px'}} sx={{boxShadow:10}} >
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://media.istockphoto.com/id/1130415473/photo/eating-ketogenic-food.jpg?s=612x612&w=0&k=20&c=3XwTFYC5FadIkdiLe8OoLacJNb8wd8yHngpCFdRuJMs="
                        alt=""
                    />
                    <CardContent>
                        <Typography fontWeight={700} fontSize={26}   gutterBottom variant="h5" component="div">
                        Products
                        </Typography>
                        <Typography fontWeight={300} fontSize={20} variant="body4" color="text.secondary">
                        Some low calorie products
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button style={{'marginLeft':'120px'}} size="small" color="primary">
                        EXPLORE
                    </Button>
                    </CardActions>
                </Card>

            </div> 

        </>
    );
}

export default HomePage;