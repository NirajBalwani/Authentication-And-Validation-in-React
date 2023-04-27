import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";

const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
}

const Registration = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (

        <Wrapper>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <div className="content">
                        <div className="input-box">
                            <label htmlFor="name">Enter First Name :- </label>
                            <input type="text" name="firstname" placeholder="Enter Your Name" value={values.firstname} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.firstname}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="username">Enter Last Name :- </label>
                            <input type="text" name="lastname" placeholder="Enter Your username" value={values.lastname} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.lastname}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">Enter Your email :- </label>
                            <input type="email" name="email" placeholder="Enter Your email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.email}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="phone_number">Enter Your Mobile Number :- </label>
                            <input type="tel" name="phone_number" placeholder="Enter Your Mobile Number" value={values.phone_number} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.phone_number}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Enter Your Password :- </label>
                            <input type="password" name="password" placeholder="Enter Your Password" value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.password}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="confirm_password">Enter Confirm Password :- </label>
                            <input type="password" name="confirm_password" placeholder="Enter Your Confirm Password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} required />
                            {<p className="form-error">{errors.confirm_password}</p>}
                        </div>

                        <span className="gender-title">Gender</span>
                        <div className="gender-category">
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="gender">Male</label>
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="gender">Female</label>
                            <input type="radio" name="gender" id="other" />
                            <label htmlFor="gender">Other</label>
                        </div>

                    </div>
                    <div className="alert">
                        <p>By clicking sign up, you agree to our <a href="https://google.com">terms and conditions,</a> <a href="https://google.com">privacy and policy's</a> and <a href="https://google.com">cookies policy.</a>  you may receive SMS or mails
                            notifications from us and can opt out at any time...
                        </p>
                    </div>
                    <div className="button-container">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
}

.container{
    max-width: 650px;
    padding: 28px;
    margin: 0 28px;
    box-shadow: 0 15px 60px hsl(153, 82%, 49%);
    border-radius: 1.8rem;
}
h2{
    font-size: 26px;
    font-weight: 600;
    text-align: left;
    color: #2f4f4f;
    padding-bottom: 8px;
    border-bottom: 1px solid silver;
}

.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
}
.input-box{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding-bottom: 15px;
}
.input-box:nth-child(2n){
    justify-content: end;
}
.input-box label, .gender-title{
    width: 95%;
    color: #2f4f4f;
    font-weight: bold;
    margin: 5px 0;
}
.gender-title{
    font-size: 16px;
}
.input-box input{
    height: 40px;
    width: 95%;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
}
.input-box input:is(:focus, :valid){
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.gender-category{
    color: grey;
}

.gender-category label{
    padding: 0 20px 0 5px;
    font-size: 14px;

}

.gender-category label, .gender-category input{
    cursor: pointer;
}

.alert p{
    font-size: 14px;
    font-style: italic;
    color: dimgray;
    margin: 5px 0;
    padding: 10px;
}

.alert a:active{
    color: chartreuse;
}

.alert a{
    text-decoration: none;
}

.alert a:hover{
    text-decoration: underline;
}

.button-container{
    margin: 15px 0;
}

.button-container button{
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    display: block;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(to right, #aa076b, #61045f);
}
.button-container button:hover{
    background-image: linear-gradient(to right, #a91fa7 , #d32490 );
}

@media(max-width:600px){
    .container{
        min-width: 280px;
    }
    .content{
        max-height: 380px;
        overflow: auto;
    }
    .input-box{
        margin-bottom: 12px;
        width: 100%;
    }
    .input-box:nth-child(2n){
        justify-content: space-between;
    }
    .gender-category{
        display: flex;
        justify-content: space-between;
        width: 60%;
    }
}
`
export default Registration
