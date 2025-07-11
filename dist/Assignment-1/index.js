var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import { add, sub, mult, div } from "../lib/math.js";
import { closeInput, takeInput } from "../lib/Input.js";
const performOpiton = () => __awaiter(void 0, void 0, void 0, function* () {
    const num1 = Number(yield takeInput("Enter a number : "));
    const num2 = Number(yield takeInput("Enter another number : "));
    closeInput();
    const columns = ["Operations", "Num1", "Num2", "Result"];
    const rows = [
        columns,
        ["Addition", num1, num2, add(num1, num2)],
        ["Subtraction", num1, num2, sub(num1, num2)],
        ["Multiplication", num1, num2, mult(num1, num2)],
        ["Division", num1, num2, div(num1, num2)],
    ];
    const processedRowsData = rows.reduce((acc, row) => {
        return (acc += row.join(",") + "\n");
    }, ``);
    fs.writeFile("./result.csv", processedRowsData, (error) => {
        console.log(error);
    });
});
performOpiton();
