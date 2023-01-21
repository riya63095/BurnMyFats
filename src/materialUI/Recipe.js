import React, { useState } from 'react';
import './Recipe.css';
import {content,contentLunch,contentDinner} from '../productData/RecipeData';


const Recipe = () =>{
    
    const [search,setSearch] = useState('');
    const [breakfastFlag,setBreakfastFlag] = useState(true);
    const [lunchFlag,setLunchFlag] = useState(false);
    const [dinnerFlag,setDinnerFlag] = useState(false);
    // const [searchVal,setSearchVal] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleBreakfast = (e) => {
        setBreakfastFlag(true)
        setLunchFlag(false)
        setDinnerFlag(false)
    }
    const handleLunch = (e) => {
        setLunchFlag(true)
        setBreakfastFlag(false)
        setDinnerFlag(false)
    }
    const handleDinner = (e) => {
        setDinnerFlag(true)
        setBreakfastFlag(false)
        setLunchFlag(false)
    }

    // const handleClick = (e) => {
    //     e.preventDefault();

    // }
    return(
        <>
            <div class='top-bar'>
                BURN MY FATS
            </div>
            <div class='topnav'>
                <button class='top-button' onClick={handleBreakfast} style={{display:breakfastFlag ? 'none' : ''}}>Check out our Breakfast ideas</button>
                <button class='top-button' onClick={handleLunch} style={{display:lunchFlag ? 'none' : ''}} >Check out our Lunch ideas</button>
                <button class='top-button' onClick={handleDinner} style={{display:dinnerFlag ? 'none' : ''}}>Check out our Dinner ideas</button>
                <input type='text' placeholder='Search recipe....' value={search} onChange={handleSearch} />
                {/* <button onClick={handleClick}>Search</button> */}
                <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png' />
            </div>
            {
                breakfastFlag &&
            <>
                <div class= 'recipe-parent'>
                    <h2 >Best Breakfast Recipes to Help Lose Abdominal Fat</h2>
                    <h5 style={{color:'red'}}>These  creative  breakfast  ideas can help make your mornings more healthier and exciting...</h5>
                    <img style={{width:'100%'}} src='http://template-kits.cmsmasters.net/demo-food-and-nutrition/wp-content/uploads/sites/4/2020/03/blog-post-8.png'></img>
                    <p>Breakfast is not just a delicious way to start your day, but an important one for weight loss—as long as you're making the right meal.
                    Eating plenty of protein, healthy fats, and fiber for breakfast can help you lose abdominal fat and pursue your weight loss goals.
                    If you're running out of ideas for yummy breakfast recipes that are also good for losing weight, we've got you covered. 
                    Here's a roundup of some of the best breakfast recipes to help you lose abdominal fat. And for more healthy recipes, 
                    check out Best Dinner Recipes for Abdominal Fat Loss.</p>
                    <p >I find that the most enjoyable way to eat well during short winter days is to focus on loading up on vegetables, rather
                    than denying myself the cheesy, carb-heavy meals that I’m craving. Here are 29 delicious dinners that are lightened up with fresh and nutritious ingredients. Sneaky!
                    Want to add a side salad to any of the following? For the meals with an Asian spin, try my carrot-ginger dressing. For the
                    others, try my green goddess dressing, creamy sunshine (honey mustard) dressing or perhaps a simple vinaigrette. I find that
                    the most enjoyable way to eat well during short winter days is to focus on loading up on vegetables, rather than denying myself the cheesy,
                    carb-heavy meals that I’m craving. Sneaky!</p>
                </div>
            
                {content.map((data,index)=>(

                    data.recipeName.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) ?

                <div>
                    <div class='circle-parent'>
                    <div class='circle'>{data.index}</div>
                    <div class='recipe-name'>{data.recipeName}</div>
                    </div>
                    <div class='recipe-pic'>
                        <img alt={data.recipeName} src={data.recipePic}></img>
                    </div>
                    <div class='nutrition'>
                    {data.nutrition}
                    </div>
                    <div  class='heading'>
                    YOU'LL NEED
                    </div>
                    {data.list.map((item,i)=>(

                    <div class='list'>
                        <ul style={{listStyle:'none'}}>
                            <li>{item}</li>
                        </ul>                
                    </div>
                    ))}
                    <div  class='heading'>
                    HOW TO PREPARE
                    </div>
                    
                    {data.preparation.map((steps,i)=>(
                    <div class='list'>
                        <ul>
                            <li>{steps}</li>
                        </ul>
                    </div>
                    ))}
                    
                </div>
                : <div>NO RESULT FOUND</div>
            
            ))}
            </>
            
            }
            {
            lunchFlag &&
            <>
                <div class= 'recipe-parent'>
                    <h2 >Healthy Lunch Recipes That Take 10 Minutes to Help Lose belly Fat</h2>
                    <h5 style={{color:'red'}}>These  creative  lunch  ideas can help boosting your immune system...</h5>
                    <img style={{width:'100%'}} src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/08/workday_lunch_ideas.jpeg.jpg'></img>
                    <p>Successfully making a quick and healthy lunch that doesn't come out of a greasy takeout bag is all about thinking ahead. If you keep healthy proteins in the fridge, 
                    like a rotisserie chicken, your favorite cheeses, eggs, and low-sodium lunch meats, the options for a meal you can whip up in no time are pretty endless.
                    Although, it's also important to stock your pantry with other ingredients that lend themselves to a fast midday meal. You'll need canned beans, quick-cooking rice,
                    and your favorite spices. In the freezer, stock your favorite frozen veggie combos and some specialty items like frozen udon noodles.
                    This way, you'll have everything you need to throw together all of these quick healthy lunch recipes.</p>
                    <p >The swift and delicious lunch recipes that follow don't require full-on meal prep. Instead, all of these meals can be made on the fly or prepped before
                    you head out the door. Plus, if you're super short on time, don't miss 20+ Healthy Mug Recipes You Can Make in 5 Minutes (Or Less!) 
                    </p>
                </div>
                {contentLunch.map((data)=>(

                    data.recipeNameL.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) ?

                    <div>
                    <div class='circle-parent'>
                    <div class='circle'>{(data.indexL)}</div>
                    <div class='recipe-name'>{data.recipeNameL}</div>
                    </div>
                    <div class='recipe-pic'>
                        <img alt={data.recipeNameL} src={data.recipePicL}></img>
                    </div>
                    <div class='nutrition'>
                    {data.nutritionL}
                    </div>
                    <div  class='heading'>
                    YOU'LL NEED
                    </div>
                    {data.listL.map((item)=>(

                    <div class='list'>
                        <ul style={{listStyle:'none'}}>
                            <li>{item}</li>
                        </ul>                
                    </div>
                    ))}
                    <div  class='heading'>
                    HOW TO PREPARE
                    </div>
                    
                    {data.preparationL.map((prep)=>(
                    <div class='list'>
                    <ul>
                        <li>{prep}</li>
                    </ul>
                    </div>
                    ))}

                    
                    
                </div>

                : <div>NO RESULT FOUND</div>

                ))}
            </>
            }

            {
            dinnerFlag &&
            <>
                <div class= 'recipe-parent'>
                    <h2 >Healthy Dinner Recipes That Take 30 Minutes to Help Lose belly Fat</h2>
                    <h5 style={{color:'red'}}>These  creative  dinner  ideas can help make your night more healthier ...</h5>
                    <img style={{width:'100%'}} src='https://i.ytimg.com/vi/CH0BamRC91k/maxresdefault.jpg'></img>
                    <p>When you're trying to lose weight, it's important to not only eat healthily but to make sure you eat! If your weeks are super busy,
                     your mind may not even want to think about making dinner for yourself at night. Instead, you may resort to quick takeout, which doesn't 
                     always lead to the healthiest options. Or, you may try to skip dinner altogether, which is something you shouldn't be doing while trying to lose weight.
                     And although these may seem like the two "easier" options for weight loss with your crazy schedule, they're certainly not the best.</p>
                    <p >Coming up with simple, quick, and healthy dinner ideas can be a fun challenge for some, and a dreaded task for others. If you fall into the latter category,
                     know that you aren't alone. While many have their go-to healthy dinners that they lean on, eating the same food day in and day out can get old very quickly.
                     Instead of turning to take-out dinners or heating up a healthy frozen dinner, try out one of these dietitian-recommended healthy meals on for size. Below are 24 healthy dinner ideas,
                    recommended by dietitians—because we can all use a little inspiration in the kitchen these days.Well, what if we told you it's possible to cook healthy dinner
                     ideas for weight loss that will match your hectic schedule and keep you on track for your weight loss?
                    </p>
                </div>
                {contentDinner.map((data)=>(
                    <div>
                        <div class='circle-parent'>
                        <div class='circle'>{(data.indexD)}</div>
                        <div class='recipe-name'>{data.recipeNameD}</div>
                        </div>
                        <div class='recipe-pic'>
                            <img alt={data.recipeNameD} src={data.recipePicD}></img>
                        </div>
                        <div class='nutrition'>
                        {data.nutritionD}
                        </div>
                        <div  class='heading'>
                        YOU'LL NEED
                        </div>
                        {data.listD.map((item)=>(

                        <div class='list'>
                            <ul style={{listStyle:'none'}}>
                                <li>{item}</li>
                            </ul>                
                        </div>
                        ))}
                        <div  class='heading'>
                        HOW TO PREPARE
                        </div>
                        
                        {data.preparationD.map((prep)=>(
                        <div class='list'>
                        <ul>
                            <li>{prep}</li>
                        </ul>
                        </div>
                        ))}

                    
                    
                </div>
                ))}
            </>
            }

            
            
        </>
        );
}






export default Recipe;
