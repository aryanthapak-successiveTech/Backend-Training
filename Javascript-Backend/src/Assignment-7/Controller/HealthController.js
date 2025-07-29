import { generateRandomHealth } from "../../utils/generateRandomHealth.js";

export class HealthController{
  showHealth = (req, res, next) => {
  try {
    const status = generateRandomHealth();
    return res.status(200).json({
      status,
    });
  } catch (err) {
    next(err);
  }
};
}
 
