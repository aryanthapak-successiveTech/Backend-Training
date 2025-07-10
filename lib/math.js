const lodash=require("lodash")
exports.add = (num1, num2) => {
    return lodash.add(num1,num2);
};

exports.sub = (num1, num2) => {
  return lodash.subtract(num1,num2);
};

exports.mult = (num1, num2) => {
  return lodash.multiply(num1,num2);
};

exports.div = (num1, num2) => {
  return lodash.divide(num1,num2);
};
