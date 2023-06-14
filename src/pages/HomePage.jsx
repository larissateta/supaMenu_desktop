// import React from "react";
import logo from "../assets/yellow-logo.png"
import registration from "../assets/Registration.png"
import food from "../assets/Food.png"
import order from "../assets/Order.png"
import { useNavigate } from "react-router-dom"
const HomePage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <div className="main">
                <div>
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="reg">
                    <h2>Register your restaurant on SupaMenu</h2>
                    <h4>for free and get more revenue!</h4>
                    <button className="reg-btn" onClick={() => navigate("/signup")}>Register your Restaurant</button>
                    <button className="sign-btn" onClick={() => navigate('/login')}> Restaurant already registered? Sign in</button>
                </div>
            </div>
            <div className="abt-div">
                <h1 className="about">How it works</h1>
                <div className="card-div">
                    <div className="card">
                        <img src={registration} alt="registration" />
                        <h3>Step 1</h3>
                        <p>Register your restaurant</p>
                    </div>
                    <div className="card">
                        <img src={food} alt="food" style={{width: 45}} />
                        <h3>Step 2</h3>
                        <p>Create your restaurant profile and create menu items</p>
                    </div>
                    <div className="card">
                        <img src={order} alt="order" />
                        <h3>Step 3</h3>
                        <p>Start receiving orders</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default HomePage