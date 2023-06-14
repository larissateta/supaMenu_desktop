import logo from "../../assets/SupaMenu_yellow.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DashboardTopNav from "../../components/DashboardTopNav";
import jwtDecode from "jwt-decode";
import authStorage from "../../auth/storage";
import { ErrorMessage, Formik } from "formik";
import { useState } from "react";
import restaurantApi from "../../api/restaurants";




const RestoRegister = () =>{
    const token = authStorage.getToken();
    const user = jwtDecode(token);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleRegister = async({
        restaufname,
        restauphone,
        ownerPhone,
        ownerName,
        ownerEmail,
        createdBy  = user
    })=>{
        setLoading(false);
        const result = await restaurantApi.register(
            restaufname,
            restauphone,
            ownerPhone,
            ownerName,
            ownerEmail,
            createdBy
        );

        if(!result.ok) return setError(result.data.status || result.data.error);

    }
    return(
        <div>
            {/* <nav className="nav">
                <img src={logo} alt="logo" style={{marginTop: 40, marginLeft: 60, marginBottom:10 }}/>
            </nav> */}
            <div style={{display: "flex"}}>
                <img src={logo} alt="logo" style={{marginTop: 40, marginLeft: 60, marginBottom:10 }}/>
                <div style={{marginLeft: 990, marginTop: 10}}>
                    <DashboardTopNav user={user} />
                </div>
            </div>

            <div className="flex-reg">
                <div className="steps">
                    <h4>1. Create your restaurant profile</h4>
                    <div className="flex-steps">
                        <div className="nbr-picked">1</div>
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
                        <div className="nbr">3</div>
                        <div className="step">
                            <h5>Create your menu</h5>
                            <p>Menu, restaurant food images</p>
                        </div>

                    </div>
                </div>
                <Formik
                        initialValues={{
                            restaufname: "",
                            restauphone: "",
                            ownerPhone: "",
                            ownerName: "",
                            ownerEmail: ""
                        }}
                        onSubmit={(values)=> handleRegister(values)}
                    >
                        {({
                            handleChange,
                            handleSubmit,
                            setFieldTouched,
                            touched,
                            errors
                        })=>(
                            <div className="info">
      
                            <div>
                                <h4>Restaurant Information</h4>
                                <input type="text" name="restau_name" id="restInput" placeholder="Restaurant Name" />
                                <input type="text" name="restaufname" id="restInput" placeholder="Restaurant Complete Name" onChange={handleChange("restaufname")} onBlur={()=> setFieldTouched("restaufname")}/>
                                {/* {touched.restaufname && <ErrorMessage text={errors.restaufname}/>} */}
                                <h4>Contacts number</h4>
                                <input type="text" name="phone" id="restInput" placeholder="Mobile number start with +250"onChange={handleChange("restauphone")} onBlur={()=> setFieldTouched("restauphone")}/>
                                {/* {touched.restauphone && <ErrorMessage text={errors.restauphone}/>} */}
                                <h4>Restaurant Owner details</h4>
                                <input type="text" name="phone" id="restInput" placeholder="Mobile number start with +250"onChange={handleChange("ownerPhone")} onBlur={()=> setFieldTouched("ownerPhoone")}/>
                                {/* {touched.ownerPhone && <ErrorMessage text={errors.ownerPhone}/>} */}
                                <input type="text" name="ownerName" id="ownerDetails" placeholder="Owner Name" onChange={handleChange("ownerName")} onBlur={()=> setFieldTouched("ownerName")}/>
                                {/* {touched.ownerName && <ErrorMessage text={errors.ownerName}/>} */}
                                <input type="email" name="ownerEmail" id="ownerDetails" placeholder="Owner Email" onChange={handleChange("ownerEmail")} onBlur={()=> setFieldTouched("ownerEmail")}/>
                                {/* {touched.ownerEmail && <ErrorMessage text={errors.ownerEmail}/>} */}
                            </div>
                        </div>
                                
                        )}
                        
                    </Formik>
                    
                
            </div>
            <button className="next-back back">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </button>
            {/* <button className="next-back next" text={"loadin...g" ? }>
                <a href="/register/type" style={{color: "white", textDecoration: "none"}}>Next</a>
            </button> */}
            <button onClick={handleSubmit} className="next-back next">
                {loading ? 'Loading' : 'Next'}
                <FontAwesomeIcon icon={faArrowRight} />
            </button>

        </div>
    )
}

export default RestoRegister