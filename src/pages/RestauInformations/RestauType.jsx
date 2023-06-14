import logo from "../../assets/SupaMenu_yellow.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RestoType = () =>{
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
                        <div className="nbr-picked">2</div>
                        <div className="step">
                            <h5>Restaurant Type & Timings</h5>
                            <p>Establisment & cuisine type, opening hours</p>
                        </div>

                    </div>
                    <div className="flex-steps">
                        <div className="nbr">3</div>
                        <div className="step">
                            <h5>Create your menu</h5>
                            <p>Menu, restaurant food images</p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <h4>Restaurant Type &#40; restaurant, pub, hotel, coffeshop, other &#41;</h4>
                    <input type="text" name="restauType" id="restInput" placeholder="Restaurant Type"/>
                    <input type="text" name="cuisineType" id="restInput" placeholder="Cuisine Type African, American, ..."/>
                    <h4>Opening hours</h4>
                    <div style={{display: "flex"}}>
                        <div>
                            <h5>FROM</h5>
                            <input type="text" name="openingTime" id="ownerDetails" placeholder="00:00" />
                        </div>
                        <div>
                            <h5>TO</h5>
                            <input type="text" name="closingTime" id="ownerDetails" placeholder="00:00" />
                        </div>
                    </div>
                    <input type="file" name="images" id="restInput" />


                </div>
            </div>
            <button className="next-back back">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </button>
            <button className="next-back next">
                <a href="/register/menu" style={{color: "white", textDecoration: "none"}}>Next</a>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default RestoType