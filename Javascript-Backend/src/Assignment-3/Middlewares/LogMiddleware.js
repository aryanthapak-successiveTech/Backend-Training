export class LogMiddleware {
  logDetails(req, res, next){
    console.log("url", req.url);
    console.log("method", req.method);
    console.log("timestamp", new Date().toLocaleTimeString());
    next();
  }
}
