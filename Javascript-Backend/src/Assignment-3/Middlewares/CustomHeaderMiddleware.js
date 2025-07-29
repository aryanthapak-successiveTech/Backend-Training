export class CustomHeaderMiddleware {
  addCustomHeader(headerName, headerValue){
    return function (req, res, next) {
      res.setHeader(headerName, headerValue);
      next();
    };
  }
}
