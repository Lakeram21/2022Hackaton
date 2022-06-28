const Joi =require("joi")


/******************************************************
 * Validating all the data coming in when creating a new user
 * **************************************************** */
const CreateUserBodyValid = async (body)=>{
        const schema = Joi.object({
                firstName: Joi.string().min(3).max(10).required(),
                lastName: Joi.string().min(3).max(10).required(),
                email: Joi.string().email().required(),
                password: Joi.string().required(),
                role:Joi.string().required()
               
        })
        return schema.validate(body);
    }

/******************************************************
 * Validating all the data coming in when creating a new order
 * **************************************************** */
const CreateOrderBodyValid = async (body)=>{
    const schema = Joi.object({
                price: Joi.number().required(),
                customerEmail: Joi.string().email().required(),
                item: Joi.array().required().required(),
                customerName: Joi.string().required(),
                resturant : Joi.string().required(),
                location: Joi.string(),
                quantity: Joi.number().required(),
                status: Joi.string().required()
               
        })
        return schema.validate(body);
}



    module.exports={
         CreateOrderBodyValid,
         CreateUserBodyValid,
    }