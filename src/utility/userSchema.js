import * as yup from "yup";



export const schema = yup.object().shape({
     username : yup.string().required("username is required"),
     email : yup.string().email().typeError("").required("email is required"),
     password: yup.string().required("password is required"),
     mobileNumber: yup.string().required("mobile number is required")
})