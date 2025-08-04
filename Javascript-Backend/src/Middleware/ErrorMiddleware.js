export class ApiError extends Error{
    statusCode;
    constructor(statusCode,msg){
        super(msg);
        this.statusCode=statusCode;
    }
}

export const AppError=(error,req,res,next)=>{
    const errStatus=error.statusCode||500;
    const errMsg=error.message||"Something went wrong";
    console.error(error.stack);
    return res.status(errStatus).json({
        status:"Failed",
        message:errMsg
    })  
}

