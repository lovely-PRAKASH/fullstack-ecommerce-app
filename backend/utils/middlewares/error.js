module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode ||500;
    res.statusCode(statusCode).json({
       success:false,
       message:err.message 
    })
}