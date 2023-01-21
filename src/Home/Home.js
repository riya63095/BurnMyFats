import React from "react"

const Home = () => {
    return(
        <div >
            <h1>Hello, {sessionStorage.getItem('user')} </h1>
        </div>
    );
 }

 export default Home;
 