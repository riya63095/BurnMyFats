import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../appBar/ResponsiveAppBar';
import './Blogs.css';

const Blogs = () => {
  return (
    <>
      <ResponsiveAppBar />
    <div class = 'blog-top-image'>
      <div class= 'blog-image-label'>
        <label>Blogs</label>
      </div>
    </div>
    <div class='low-carb-diet'>
      <div class='low-carb-image'>
        <img src='http://cdn.shopify.com/s/files/1/0233/6459/9885/articles/shutterstock_1717786156_1_1200x1200.jpg?v=1599106135'/>
      </div>
      <div class='low-carb-content'>
        <div class='low-carb-content-lbl'>
          <label>Table of content</label>
        </div>
        <div class='low-carb-content-list'>
          <ol>
            <li><a href='' title='What are carbohydrates?'>What are carbohydrates?</a></li><br/>
            <hr/>
            <li><a href='' title='Why should you limit your Carbohydrate intake?'>Why should you limit your Carbohydrate intake?</a></li><br/>
            <hr/>
            <li><a href='' title='Rebalance your plate'>Rebalance your plate</a></li><br/>
            <hr/>
            <li><a href='' title='Low carb foods'>Low carb Indian foods</a></li><br/>
            <hr/>
            <li><a href='' title='How to plan diet meals with low carb Indian food?'>How to plan diet meals with low carb food?</a></li><br/>
            <hr/>
            <li><a href='' title='PURE VEGETARIAN DIET PLAN'>PURE VEGETARIAN DIET PLAN</a></li><br/>
            <hr/>
            <li><a href='' title='VEGETARIAN (WITH EGGS) DIET PLAN'>VEGETARIAN (WITH EGGS) DIET PLAN</a></li><br/>
            <hr/>
            <li><a href='' title='NON-VEGETARIAN DIET PLAN'>NON-VEGETARIAN DIET PLAN</a></li><br/>
            <hr/>
          </ol>
        </div>
      </div>
    </div>
    <div class='content-def'>
      <p>
      Low-carb diets are popular at the moment. In this article we will explain what a low-carb diet really is, low carb food, 
      how it can help you and a diet chart you can follow to implement a lower-carb diet.
      </p>
      <h2>What are carbohydrates?</h2>
      <p>
      Carbohydrates are the sugars, starches and fibers that are the main source of energy in our bodies. We get it from most staple foods,
       mainly grains like rice and wheat. Almost all foods that we eat contain carbohydrates in some amount. We need to distinguish foods that 
       have little carbohydrates and foods that are mostly carbohydrates.
      </p>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/165.jpg' alt='carbohydrate foods'/>
      <p>
      Foods high in carbohydrates.
      The foods that are mostly comprise of carbohydrates are:
      </p>
      <ul>
        <li>All grains eg. wheat, white rice, brown rice, millets, quinoa, barley, oats, muesli, rye, spelt.</li><br/>
        <li>Certain vegetables like roots & tubers eg. potato, sweet potato, raw banana, corn, taro, yam,
         green peas, colocasia (arbi), cassava (tapioca, sabudana)</li><br/>
        <li>Anything made from the above foods will also be mostly carbohydrates. For example, chapati, roti, upma, pasta, biscuits are usually
          made from wheat or other such grains, idli and dosa are made from white rice, corn tortillas are made from corn 
          and are all therefore mostly carbohydrates.</li><br/>
        <li>Legumes including channa, rajma, chickpeas, sprouts, lentils such as yellow/black dal, etc contain some protein but have a
         lot more carbohydrates.</li>
      </ul>
      <h2>Why should you limit your Carbohydrate intake?</h2>
      <p>
      The current diet tends to be very heavy in carbs. Here is an example to show this. Imagine a day where you eat the following:
      </p>
      <ul>
        <li>Breakfast: oats.</li><br/>
        <li>Lunch: rice with dal & veggies.</li><br/>
        <li>Snack: tea with biscuits</li><br/>
        <li>Dinner: roti with rajma & veggies.</li><br/>
      </ul>
      <p>
       We don’t realize it, but it’s likely that for many of us 70% or more of our daily diet is made up of carb-rich foods.The oats, rice, dal & rajma 
       are all high in carbohydrates. There is some protein in the dal/rajma but you should note that they have 3-4
       times the amount of carbs. Similarly, millets like ragi are also marketed as being higher in protein than white rice. While this is true, 
       millets also contain a fairly high amount of carbs as well!
      </p>
      <h3>Are carbs bad?</h3>
      <p>
        No. The poison is in the dose. Remember two things:
      </p>
      <ul>
        <li>There are really no ‘good’ or ‘bad’ foods.</li><br/>
        <li>You can have too much of a good thing.</li><br/>
      </ul>
      <p>Carbs are essential as a source of energy. For most of us, the carbs come from grains – rice, roti, bread.</p>
      <p>There’s nothing wrong with having Carbs. But you can't have too much of it.<br/><br/>And that’s exactly what we see with most people. When you 
        add up all the carbs in the day, it can be 70% or more of your daily diet. That is too much and causes the following problems:<br/><br/>

        <h4>Problem 1: You overeat<br/></h4>

        Compared to protein and fat, you’ll need to eat a lot of carbs to feel full. There’s a reason many meals have a mountain of rice in the center,

        because there isn’t really much else on that plate.<br/>

        High-carb meals get digested quickly and you will feel hungry soon after. This is why you have sugar or sweet cravings soon after a high-carb meal.<br/><br/>

        <h4>Problem 2: You lose out on nutrients<br/></h4>

        Carbs don’t tend to have as many nutrients as other foods like vegetables and protein. If most of your diet is carbs, you just won’t get the nutrients your body needs.
        That results in nutrient deficiency and health problems down the line. For example, deficiency in vitamin B12.<br/><br/>

        <h4>Problem 3: You don’t get enough protein<br/></h4>

        Your daily diet should be about 25-30% protein. With 80% carbs, you’re certainly not going to get enough protein. That’s a problem as protein is involved
        in most of the processes that occur within the body, and is important for several reasons including your bones, skin, immunity and hormones.<br/><br/>

        <h4>Problem 4: You’re at risk of lifestyle diseases like diabetes<br/></h4>

        Your body will store all excess energy as fat, whether it comes from too much carbs or fat or something else.<br/>

        Overeating carbs over a period results in weight gain and compromises many systems in the body.<br/>

        This ends up causing problems like diabetes, fatty liver, PCOS, thyroid issues and hypertension.<br/>
      </p>
      <h2>Rebalance your plate</h2>
      <p>Instead of focusing on reducing carbs, start thinking of re-balancing your plate to accommodate more vegetables and protein. This is a better way to get the 
        right amount of nutrients required for the vital functioning of the body. Also, this will automatically take care of reducing the carbs.<br/><br/>Here’s a great 
        example of what a balanced plate looks like. You’ll notice that grains (carbs) only make up about a quarter of the plate. This makes space for plenty of 
        vegetables, protein and fruit.
      </p>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/167.jpg' alt='balanced diet'/>
      <p>
        If you’re looking at this plate and thinking that this is far away from where you are now, do not worry. 
        Start with small steps and you’ll be surprised at how soon the little changes add up.
      </p>
      <h2>Low carb foods</h2>
      <p>Low-carb diets are popular but that is not what we are saying. We are not suggesting that you give up on carbs or adopt some form of a low-carb diet.
        Such diets usually require you to have carbs to be under 20%. This is not sustainable, especially for women.<br/><br/>
        Going too low on carbs can adversely impact women’s hormonal health since their bodies are very sensitive to energy intake.<br/><br/>
        What we are saying is that it’s likely that you’re eating too much carbs now and that you should reduce the carbs and make space for important foods like protein foods and vegetables. So lower-carbs and now just low-carb.<br/><br/>
        Individual carbohydrate requirements vary between individuals, so instead of making drastic changes to your diet, start with small and sustainable changes. Observe how you
        feel and then think about improving it one step at a time. You will find the right balance to help you in achieving your goals soon.<br/><br/>
      </p>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/168.png'/>
      <h2>How to plan diet meals with low carb food</h2>
      <p>
      Below is an easy to follow low-carb diet chart with an Indian diet that can be followed for a week (7 days). The portions are based on someone in the weight range of 
      65-75 kgs and should be used as a guide.<br/><br/>
      We have provided three separate low-carb diet plans – one for pure vegetarians, a plan for those who eat eggs and a plan for non-vegetarians.<br/><br/>
      Please note the following points:
      </p>
      <ul>
        <li>Some foods are noted in cups. A cup = 240ml. This is a standard unit of measure and you can buy it from Amazon, see these options. 
        See the cup in red below to get an idea of how much it is.</li><br/>
        <li>Some foods (like paneer) are noted in fist-sized quantities. A fist = your fist. Keep the food next to your first to estimate the quantity.</li><br/>
        <li>You can modify this diet plan to swap one vegetable for another or to have one grain for another (rice instead of roti for example).</li>
      </ul>
      <p>While we have provided a low-carb diet plan below, please use this as a guide only. There is no single ideal diet chart as a one-size-fits-all answer approach will not work when it comes to a weight loss diet plan.
        One’s nutritional requirements will vary based on a number of factors, including gender, height, weight, meal preferences, any medical conditions, allergies etc.
        Chewing food helps your brain realize you are full.Drinking juice does not have the same effect.
      </p>
      <h2>PURE VEGETARIAN DIET PLAN</h2>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/137.jpg'/>
      <h4>Breakfast:</h4>
      <ul>
        <li>1 fist paneer bhurji with ½ cup tomato, onion, capsicum</li>
        <li>1 slice toast</li>
        <li>1 orange</li>
        <li>1 cup tea/coffee</li>
      </ul>
      <h4>Lunch:</h4>
      <ul>
        <li>½ cup rice</li>
        <li>¾ cup methi dal (½ cup lentils)</li>
        <li>½ cup cauliflower</li>
        <li>½ cup yoghurt</li>
      </ul>
      <h4>Snack:</h4>
      <ul>
        <li>½ scoop Whey fruit smoothie with ½ cup milk</li>
        <li>1 banana</li>
      </ul>
      <h4>Dinner:</h4>
      <ul>
        <li>1 cup veg stir fry</li>
        <li>¾ cup dal (½ cup lentils)</li>
        <li>½ cup jeera rice</li>
        <li>½ cup green salad</li>
      </ul>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/169.jpg'/>
      <h2>VEGETARIAN (WITH EGGS) DIET PLAN</h2>
      <h4>Breakfast:</h4>
      <ul>
        <li>2 egg omelette with ½ cup tomato, onion, capsicum</li>
        <li>1 orange</li>
        <li>1 cup tea/coffee</li>
      </ul>
      <h4>Lunch:</h4>
      <ul>
        <li>½ cup egg rice with 1 egg</li>
        <li>¾ cup dal (½ cup lentils)</li>
        <li>½ cup cauliflower</li>
        <li>½ cup yoghurt</li>
      </ul>
      <h4>Snacks:</h4>
      <ul>
        <li>½ scoop Whey fruit smoothie with ½ cup milk, 1 banana</li>
      </ul>
      <h4>Dinner:</h4>
      <ul>
        <li>1 cup veg stir fry</li>
        <li>Mutter paneer with 1 fist paneer</li>
        <li>½ cup jeera rice</li>
        <li>½ cup green salad</li>
      </ul>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/139.jpg'/>
      <h2>NON-VEGETARIAN DIET PLAN</h2>
      <h4>Breakfast:</h4>
      <ul>
        <li>2 egg omelette with ½ cup tomato, onion, capsicum</li>
        <li>1 orange</li>
        <li>1 cup tea/coffee </li>
      </ul>
      <h4>Lunch:</h4>
      <ul>
        <li>½ cup egg rice with 1 egg</li>
        <li>½ cup dal</li>
        <li>½ cup cauliflower</li>
        <li>½ cup yoghurt</li>
      </ul>
      <h4>Snacks:</h4>
      <ul>
        <li>½ scoop Whey smoothie with ½ cup milk + 1 banana</li>
      </ul>
      <h4>Dinner:</h4>
      <ul>
        <li>1 cup veg stir fry</li>
        <li>1 fist chicken breast</li>
        <li>½ cup jeera rice</li>
        <li>½ cup green salad</li>
      </ul>
      <img src='https://thedaily9.in/wp-content/uploads/2022/10/141.jpg'/>
    </div>
    

    
    </>
  );
}
export default Blogs;