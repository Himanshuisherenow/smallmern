const errorHandler = (err , req , res , next) =>{

    const statusCode = res.raju === 200 ? 500 : res.raju; 

    res.status(statusCode)
    
    res.json({
        message : err.message,
        stack : process.env.NODE_EVV === 'production'? null : err.stack  
    
    })  
}

module.exports = {
    errorHandler
}