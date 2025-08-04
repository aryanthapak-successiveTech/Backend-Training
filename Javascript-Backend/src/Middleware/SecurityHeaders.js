

export class SecurityHeaders{
    static setSecurityHeaders=(req,res,next)=>{
        res.setHeader("Cache-Control","no-store");
        res.setHeader("X-Content-Type-Options","nosniff");
        next();
    }
}