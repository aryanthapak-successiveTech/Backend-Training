import Joi from "joi"
export interface IrouteBaseValidation{
    [key:string]:Joi.ObjectSchema
}