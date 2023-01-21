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
  const product=[{

    img:'https://images.marico.in/800x0/uploads/8901088129824-6-713.jpg',
    alt:'Oats',
    name:'Saffola Masala Oats | Classic Masala| 500g',
    description:`Classic Masala Oats - Now with wholegrain oats, carrots, onions and green peas. 
                  Delicious and comforting, just like the taste of home-cooked food. It is very rich in nutrients`,
  
  },
  {
    img:'https://m.media-amazon.com/images/I/71jOQYCRI2L._SL1340_.jpg',
    alt:'wheyProtein',
    name:'Scitron Essential Whey Protein - 2 kg',
    description:`Whey protein is a super-blend drink which is
    fortified with multi-enzyme blend that breaks down molecules to make better use of consumed nutrients and increases digestion effectiveness.`,
  
  },
  {
    img:'http://cdn.shopify.com/s/files/1/0520/1572/6762/products/AlpinoComboPack-ChocolatePeanutButterSmooth1KG_NaturalPeanutButterCrunch1KG.png?v=1667560491',
    alt:'peanutButter',
    name:'Alpino All Natural Peanut Butter - 350g',
    description:`Peanut Butter contains More Unsaturated Fats than Saturated Fats, 
    making it a Fat Friendly Food Which Lowers the Risk of Heart Disease due to Various Benefits and Source of Everything Healthy.`,
  
  },
  {
    img:'https://www.jiomart.com/images/product/original/590000255/sprouts-mixed-1-pack-approx-200-g-250-g-product-images-o590000255-p590000255-0-202203170518.jpg',
    alt:'Sprouts',
    name:'Sprouts-(Approx 200 g - 250 g)',
    description:`Sprouts are tiny young plants that not just look but also taste great. This mixed variety has a crunchy texture, packed with nutrition and flavour. 
    Sprouts make perfect snacks anytime of the day.`,
  
  },
  {
    img:'https://www.bigbasket.com/media/uploads/p/xxl/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg',
    alt:'Eggs',
    name:'Fresho Farm Eggs - Table Tray',
    description:`Eggs are one of the common food items in most of the households. 
    Poached, boiled, fried; we all have our own favourite choices. 
    Not only are they delicious, but they are also crammed with health benefits.`,
  
  },
  {
    img:'https://m.media-amazon.com/images/I/71sFvHts2UL._SL1200_.jpg',
    alt:'Dark Chocolates',
    name:'Swee10 Zero Calorie Dark Chocolates',
    description:`Dark chocolate is loaded with organic compounds that are biologically active and function as antioxidants.
    It contains a decent amount of soluble fiber and is loaded with minerals.`,
  
  },
  {
    img:'https://www.bigbasket.com/media/uploads/p/xxl/40162924_4-britannia-100-whole-wheat-bread.jpg',
    alt:'Bread',
    name:'Britannia 100% Whole Wheat Bread',
    description:`Milled from 100% whole grains of wheat, this bread is low in saturated fat and doubles up as a good source of fibre.
    Whether you live to eat or eat to live, it’s best when it’s done right. `,
  
  },
  {
    img:'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg',
    alt:'Chicken',
    name:'Chicken Curry Cut - Small Pieces',
    description:`The high protein of the chicken will help rebuild damaged muscle fibres while the carbohydrate content of the rice will replace muscle glycogen levels and refuel.
    Perfect for a post-workout meal.`,
  
  },
  {
    img:'https://thumbs.dreamstime.com/z/variety-berries-fruits-sale-grocery-store-fresh-organic-strawberries-raspberries-blackberries-grapes-all-126504979.jpg',
    alt:'Berries',
    name:'Fresh berries - 350g',    
    description:`Berries are power-packed super-fruits that you can include in your muscle-building foods. 
    They contain a huge number of antioxidants, which help in gaining muscle mass.It is filled with the goodness you need to keep your body healthy and happy.`,
  
  },
  {
    img:'https://cdn.shopify.com/s/files/1/0039/5886/5987/products/Fruit-and-Nut-04_aa125438-cb9d-40d0-babc-a9197450a220.jpg?v=1656322586',
    alt:'Muesli',
    name:`Kellogg's Muesli-Fruit & Nut, 160g`,
    description:`A mixture of nuts and dry fruits makes muesli rich in minerals like calcium, magnesium, phosphorus, and selenium.Muesli contains oat bran, which includes an oat fiber called beta-glucan.`,  
 
  },
  {
    img:'https://m.media-amazon.com/images/I/91BC5rXoYkL._SX679_.jpg',
    alt:'Dry Fruits and Nuts',
    name:'Dry Fruits and Nuts-60gm',    
    description:`Dry fruits are rich in potassium, magnesium, calcium, zinc, phosphorus and various vitamins like vitamin A, D, B6, K1 and E.
    These nutrients are essential for a healthy immune system.`,
  
  },
  {
    img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/4/0/HE_smoked-salmon-istock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1449264491029.jpeg',
    alt:'Salmon Fish',
    name:'Salmon Fish - 300g',    
    description:`Any types of fish could qualify as fitness foods, but salmon certainly tops the list — it’s sustainable, low in mercury, easy to prepare, and packed with nutrients to promote healthy muscles.
    Salmon is also one of the best sources of Omega-3 fats you can find.  `,
  
  }
]
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
        
      <Card key={data.alt} onClick={clickProduct} sx={{ maxWidth: 250, margin:1, boxShadow:7}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
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