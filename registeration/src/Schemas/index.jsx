import * as Yup from "yup";


export const signUpSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter first name"),
    lastname: Yup.string().min(2).max(25).required("Please enter last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone_number: Yup.number().min(10).max(10).required("Please Enter Your Mobile Number"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});

