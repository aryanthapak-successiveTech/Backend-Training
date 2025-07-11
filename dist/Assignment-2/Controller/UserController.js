var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dummyData } from "../mockData.js";
export const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const limitStr = req.query.limit;
        const pageStr = req.query.page;
        if (!req.query.limit || !req.query.page) {
            return res.status(200).json({
                status: "Successful",
                data: dummyData,
            });
        }
        const limit = Number(limitStr);
        const page = Number(pageStr);
        const startIdx = (page - 1) * limit;
        const filteredData = dummyData.slice(startIdx, startIdx + Number(limit));
        if (filteredData.length == 0) {
            return res.status(404).json({
                status: "Failed",
                message: "Not Found",
            });
        }
        return res.status(200).json({
            status: "Successful",
            data: filteredData,
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: "Some error happened",
        });
    }
});
//# sourceMappingURL=UserController.js.map