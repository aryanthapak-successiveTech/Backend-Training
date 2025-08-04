import fs from "fs";
import { add, sub, mult, div } from "../lib/math.js";
import { closeInput, takeInput } from "../lib/Input.js";

const performOpiton = async () => {
  const num1 = Number(await takeInput("Enter a number : "));
  const num2 = Number(await takeInput("Enter another number : "));
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
};

performOpiton();
