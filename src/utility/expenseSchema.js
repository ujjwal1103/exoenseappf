import * as yup from "yup";



export const schema = yup.object().shape({
     title : yup.string().required("title is required"),
     amount : yup.number().typeError("amount must be a number and cant be empty").required("amount for a transaction is required"),
     type: yup.string().required("please specify a type")
})