import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Logo from "../components/Logo";
import COLOR_PALETTE from "../constants/colors";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../api/auth";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function SignupPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async ({
    firstName,
    lastName,
    phone,
    email,
    password,
  }) => {
    setLoading(true);
    const result = await authApi.signup(
      firstName + lastName,
      phone,
      email,
      password
    );
    setLoading(false);
    
    if (!result.ok) return setError(result.data.status || result.data.error);

    authStorage.storeToken(result.data.jwt_token);
    navigate('/regrestaurant');
  };

  return (
    <Container>
      <div className="logo-container">
        <Logo font_size={40} onClick={() => navigate('/')}/>
      </div>
      <div className="details-container">
        <div>
          <h3 style={{marginTop: "1em", color: "#adadb3", textAlign: "center"}}>Welcome</h3>
          <h2 className="header-text">Sign up to SupaMenu</h2>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => handleSignup(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            touched,
            errors,
          }) => (
            <div className="input-container">
              <div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
                {error && <ErrorMessage text={error} />}
              </div>

              <div className="row">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type={"text"}
                  onChange={handleChange("firstName")}
                  onBlur={() => setFieldTouched("firstName")}
                  placeHolder={"First Name"}
                  width={100}
                />
                {touched.firstName && <ErrorMessage text={errors.firstName} />}
              </div>

              <div className="row">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type={"text"}
                  onChange={handleChange("lastName")}
                  onBlur={() => setFieldTouched("lastName")}
                  placeHolder={"Last Name"}
                  width={100}
                />
                {touched.lastName && <ErrorMessage text={errors.lastName} />}
              </div>

              <div className="row">
                <label htmlFor="phone">Phone</label>
                <Input
                  type={"text"}
                  onChange={handleChange("phone")}
                  onBlur={() => setFieldTouched("phone")}
                  placeHolder={"Phone"}
                  width={100}
                />
                {touched.phone && <ErrorMessage text={errors.phone} />}
              </div>

              <div className="row">
                <label htmlFor="password">Email</label>
                <Input
                  type={"text"}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  placeHolder={"Email adddress"}
                  width={100}
                />
                {touched.email && <ErrorMessage text={errors.email} />}
              </div>

              <div className="row">
                <label htmlFor="password">Password</label>
                <Input
                  type={"password"}
                  onChange={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  placeHolder={"Your  password"}
                  width={100}
                />
                {touched.password && <ErrorMessage text={errors.password} />}
              </div>

              <div className="row">
                <Button text={loading ? 'Loading.....' : "Sign Up"} width={100} onClick={handleSubmit} />
              </div>
            </div>
          )}
        </Formik>

        <div className="other-links">
          <p className="header-text" style={{marginRight: 20, marginTop: 25, fontSize: 13}}>
            Already have an account? <a href="login">login</a>
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: ${COLOR_PALETTE.PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-container {
    width: 30%;
  }
  .details-container {
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    background-color: ${COLOR_PALETTE.WHITE};
    .header-text {
      text-align: center;
      margin: 10px 0px 10px 0px;
    }

    a {
      text-decoration: none;
    }
  }
`;
export default SignupPage;
