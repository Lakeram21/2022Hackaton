const mongodb = require('../database/dbConnection');
const ObjectId = require('mongodb').ObjectId;
const { CreateOrderBodyValid } = require("../validation/validate")


/**********************************
 * GET: Getting all the orders
 * ********************************/
const getAll = async (req, res) => {
try {
    const result = await mongodb.getDb().db().collection('orders').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  }).catch((error)=>{
    res.status(500).json({message:"Failed to retrieve the data from Database "|| error})
  });
} catch (error) {
    res.status(500).json(error);
}};


/*****************************************
 * GET{id}: Getting a Specific User
 * **************************************/
const getOrder = async (req, res) => {
    try {
        const orderId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('orders').find({ _id: orderId  });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        }).catch((error)=>{
          res.status(500).json({message:"Failed to retrieve the data" || error})
        })   
    } catch (error) {
        res.status(500).json(error.message);
    }};

/*****************************************
 * POST: Create a new user
 * **************************************/
const createOrder = async (req, res) => {
try {
console.log("hello")
  // validate the body
    const {error} = await CreateOrderBodyValid(req.body)
   if(error)
   {
    return res.status(400).json(error)
   }
     // create a new order
    const order = {
    price: req.body.price,
    customerEmail: req.body.customerEmail,
    item: req.body.item,
    quantity: req.body.quantity,
};

console.log("here")
  // insert the new command
  const response = await mongodb.getDb().db().collection('orders').insertOne(order);
  // check creation of command
  if (response.acknowledged) {
    console.log("here2")
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'error occurred while creating the user.');
  }
    
} catch (error) {
    res.status(500).json(error.message);
}};




/*****************************************
 * Export all logic created here
 * **************************************/
module.exports = {
  getAll,
  getOrder,
  createOrder,
};
