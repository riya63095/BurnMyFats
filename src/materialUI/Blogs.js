import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import './Blogs.css';

export default function Blogs() {
  return (
    <>
      <ResponsiveAppBar />
    
      <Box class='box' component="main" >
        <Typography class='typography'>            
            Eating a healthy, balanced diet is one of the most important things you can do to protect your health. 
            In fact, up to 80% of premature heart disease and stroke can be prevented through your life choices and habits, such as eating a healthy diet and being physically active.
            A healthy diet can help lower your risk of heart disease and stroke by:

            <ul>
                <li>improving your cholesterol levels</li>
                <li>reducing your blood pressure</li>
                <li>helping you manage your body weight</li>
                <li>controlling your blood sugar.</li>
            </ul>
            <h1>What does a healthy, balanced diet look like?</h1>
            Canada’s Food Guide recommends eating a variety of healthy foods each day. This includes eating plant-based foods more often and choosing highly-processed or ultra-processed foods less often.
            A healthy diet includes:
            <ol>
                <li><b>Eating lots of vegetables and fruit</b></li>
            
                <ul>
                    <li>This is one of the most important diet habits. Vegetables and fruit are packed with nutrients (antioxidants, vitamins, minerals and fibre) and help you maintain a healthy weight by keeping you full longer.</li>
                    <li>Fill half your plate with vegetables and fruit at every meal and snack.</li>
                </ul>
                <li><b>Choosing whole grain foods</b></li>
                <ul>
                    <li>Whole grain foods include whole grain bread and crackers, brown or wild rice, quinoa, oatmeal and hulled barley. They are prepared using the entire grain. Whole grain foods have fibre, protein and vitamins to help you stay healthy and full longer.</li>
                    <li>Choose whole grain options instead of processed or refined grains like white bread and pasta.</li>
                    <li>Fill a quarter of your plate with whole grain foods.</li>
                </ul>
            </ol>
            <img  alt='healthy diet' src='https://heartstrokeprod.azureedge.net/-/media/images/get-healthy/eat-variety-healthy-foods-image.ashx?rev=55e9bc26f3824338a02737d72a63fdfe&h=345&w=614&la=en&hash=5BB1FA96012855C0785B6DD1E5D17ECC'></img>
        

        </Typography>
      </Box>
    
    </>
  );
}