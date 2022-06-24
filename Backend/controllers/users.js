const mongodb = require('../database/dbConnection');
const ObjectId = require('mongodb').ObjectId;
const { CreateUserBodyValid } = require("../validation/validate")


/**********************************
 * GET: Getting all the Users
 * ********************************/
const getAll = async (req, res) => {
try {
    const result = await mongodb.getDb().db().collection('users').find();
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
const getUser = async (req, res) => {
    try {
        const email = (req.body.email);
        const result = await mongodb.getDb().db().collection('users').find({ email: email });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        }).catch((error)=>{
          res.status(500).json({message:"Failed to retrieve the data" || error})
        })   
    } catch (error) {
        res.status(500).json(error);
    }};

/*****************************************
 * POST: Create a new user
 * **************************************/
const createUser = async (req, res) => {
try {

  // validate the body
    const {error} = await CreateUserBodyValid(req.body)
   if(error)
   {
    return res.status(400).json(error)
   }
     // create a new command
    const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    
  };
console.log("here")
  // insert the new command
  const response = await mongodb.getDb().db().collection('users').insertOne(user);
  // check creation of command
  if (response.acknowledged) {
    console.log("here2")
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'error occurred while creating the user.');
  }
    
} catch (error) {
    res.status(500).json(error);
}};



/*****************************************
 * Export all logic created here
 * **************************************/
module.exports = {
  getAll,
  getUser,
  createUser,
//   updateCommand,
//   deleteCommand
};
