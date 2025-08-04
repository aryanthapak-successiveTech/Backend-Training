import axios from "axios";
import routeBaseValidation from "../Config/ValidationConfig.js";
import { ApiError } from "../../Middleware/ErrorMiddleware.js";

export class UrlMiddleware {
  verifyParams = (req, res, next) => {
    const queryParams = Object.values(req.params);
    for (const param of queryParams) {
      if (!Number(param)) {
        return res.status(406).json({
          status: "Failed",
          message: "Params should be numeric",
        });
      }
    }
    next();
  };

  verifyLocation = async (req, res, next) => {
    const ip = req.ip;
    const ipInfo = await axios.get(`http://ip-api.com/json/${ip}`);
    const country = ipInfo.data.country;
    if (country !== "INDIA" && ip !== "::1" && ip!="::ffff:127.0.0.1") {
      return res.status(403).json({
        status: "Failed",
        message: "Not available at your location",
      });
    }
    next();
  };
  urlBasedValidate = (req, res, next) => {
    const path = req.url;
    if (path in routeBaseValidation) {
      const validationSchema = routeBaseValidation[path];
      const { error } = validationSchema.validate(req.body);
      if (error) {
        next(new ApiError(400, error.message));
      }
    }
    next();
  };
}
