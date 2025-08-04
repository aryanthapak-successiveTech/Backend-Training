import Joi from "joi";


const signupValidationSchema=Joi.object({
    username:Joi.string().alphanum().min(3).max(40).required(),
    password:Joi.string().min(8).required(),
    email:Joi.string().email().required()
})

const loginValidationSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})

const routeBaseValidation={
    "/register":signupValidationSchema,
    "/login":loginValidationSchema
}

export default routeBaseValidation;