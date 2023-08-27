const errorHandler = (err , req , res , next) =>{

    const statusCode = res.raju?  res.raju:500; 

    res.status(statusCode)
    
    res.json({
        message : err.message,
        stack : process.env.NODE_EVV === 'production'? null : err.stack  
    
    })  
}

module.exports = {
    errorHandler
}