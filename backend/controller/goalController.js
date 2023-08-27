
const asynchandler = require('express-async-handler');
const Goal = require('../models/goalModel');



const getGoals=asynchandler(async(req,res)=>{


    const goals =await Goal.find();

    res.status(200).json(goals);

})


const setGoals = asynchandler(async(req,res)=>{

  if(!req.body.text){
     res.status(400);
 
     throw new Error("please add a textfield");
  }

  const goal = await Goal.create({
    text :req.body.text,

  })

    res.status(200).json(goal);
}) 



const updateGoal=asynchandler(async(req,res)=>{

    const goal = await Goal.findById(req.params.id);

    if(!goal){

        res.status(400)
        throw new Error('Goal is not found')
    }
    if (goal.text === req.body.text) {
        return res.status(200).send("same as previous");  // Use return to exit early
    }
  
    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id , req.body,
        
        { new : true}//it creat if it is not exits
        )

       

    res.status(200).json({message :`Update goal ${req.params.id}`});
}
)


const deleteGoal =asynchandler(async (req,res)=>{


    const goal = await Goal.findOneAndDelete(req.params.id);

    if(!goal){

        res.status(400)
        throw new Error('Goal is not found')
    }

  


    res.status(200).json({message : `Delete goal  id : ${req.params.id}`})
}
)


module.exports ={
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
    
}


