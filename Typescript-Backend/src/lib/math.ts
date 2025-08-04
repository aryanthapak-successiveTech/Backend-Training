import lodash from "lodash"

type operation=(num1:number,num2:number)=>number

export const add:operation = (num1, num2) => {
    return lodash.add(num1,num2);
};

export const sub:operation = (num1, num2) => {
  return lodash.subtract(num1,num2);
};

export const mult:operation = (num1, num2) => {
  return lodash.multiply(num1,num2);
};

export const div:operation = (num1, num2) => {
  return lodash.divide(num1,num2);
};
