import logo from "../../assets/SupaMenu_yellow.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import authStorage from "../../auth/storage";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const MenuCreate = () =>{
    const [selectedCategory, setSelectedCategory] = useState('drinks');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    return(
        <div>
            <nav className="nav">
                <img src={logo} alt="logo" style={{marginTop: 40, marginLeft: 60, marginBottom:10 }}/>
            </nav>
            <div className="flex-reg">
                <div className="steps">
                    <h4>1. Create your restaurant profile</h4>
                    <div className="flex-steps">
                        <div className="nbr">1</div>
                        <div className="step">
                            <h5>Restaurant Information</h5>
                            <p>Restaurant name, address, Details, owner details</p>
                        </div>

                    </div>
                    <div className="flex-steps">
                        <div className="nbr">2</div>
                        <div className="step">
                            <h5>Restaurant Type & Timings</h5>
                            <p>Establisment & cuisine type, opening hours</p>
                        </div>

                    </div>
                    <div className="flex-steps">
                        <div className="nbr-picked">3</div>
                        <div className="step">
                            <h5>Create your menu</h5>
                            <p>Menu, restaurant food images</p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div className="menu-items">
                        <div
                        className={`menu-item ${selectedCategory === 'drinks' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('drinks')}
                        >
                            Drinks
                        </div>
                        <div
                        className={`menu-item ${selectedCategory === 'starters' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('starters')}
                        >
                            Starter
                        </div>
                        <div
                        className={`menu-item ${selectedCategory === 'appetizers' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('appetizers')}
                        >
                            Appetizer
                        </div>
                        <div
                        className={`menu-item ${selectedCategory === 'dessert' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('dessert')}
                        >
                            Dessert
                        </div>
                        <div
                         className={`menu-item ${selectedCategory === 'main' ? 'active' : ''}`}
                         onClick={() => handleCategoryClick('main')} 
                        >
                            Main
                        </div>

                    </div>
                        <div id="drinks">
                        <label htmlFor="foodName" style={{ display: 'block', fontWeight: 500, fontSize: 14, marginTop: 30 }}>
                            Name
                        </label>
                        <input type="text" name="foodName" id="restInput" placeholder="Menu name" />
                        <label htmlFor="foodPrice" style={{ display: 'block', fontWeight: 500, fontSize: 14, marginTop: 20 }}>
                            Price
                        </label>
                        <input type="text" name="price" id="restInput" placeholder="RWF" />
                        <label htmlFor="foodDescription" style={{ display: 'block', fontWeight: 500, fontSize: 14, marginTop: 20 }}>
                            Menu description
                        </label>
                        <input type="text" name="description" id="restInput" placeholder="Ingredients" />
                        <label htmlFor="foodDescription" style={{ display: 'block', fontWeight: 500, fontSize: 14, marginTop: 20 }}>
                            Image
                        </label>
                        <input type="file" name="images" id="restInput" />
                        </div>
                    


                </div>
            </div>
            <button className="next-back back">
                <FontAwesomeIcon icon={faArrowLeft} />
                <a href="/register/type" style={{color: "#F7941D", textDecoration: "none"}}>back</a>
            </button>
            <button className="next-back next">
            <a href="/menu" style={{color: "#fff", textDecoration: "none"}}>Next</a>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default MenuCreate