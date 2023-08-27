
const asynchandler = require('express-async-handler');
const Goal = require('../models/goalModel');



const getGoals=asynchandler(async(req,res)=>{


    const Goal =await Goal.find()
    res.status(200).json(goals);

})


const setGoals =asynchandler(async(req,res)=>{

  if(!req.body.text){
     res.status(400);
 
     throw new Error("please add a textfield");
  }

    res.status(200).json({message : `${req.body.text}`})
}) 



const updateGoal=asynchandler(async(req,res)=>{

    res.status(200).json({message :`Update goal ${req.params.id}`});
}
)


const deleteGoal =asynchandler(async (req,res)=>{

    res.status(200).json({message : `Delete goal ${req.params.id}`})
}
)


module.exports ={
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
    
}


