const fs=require("fs");
const {add,sub,mult,div}=require("./lib/math");

const columns=["Operations","Num1","Num2","Result"]

const rows=[
    columns,
    ["Addition",10,5,add(10,5)],
    ["Subtraction",10,5,sub(10,5)],
    ["Multiplication",10,5,mult(10,5)],
    ["Division",10,5,div(10,5)],
]

const processedRowsData=rows.reduce((acc,row)=>{
    return acc+=row.join(",")+"\n";
},``)


fs.writeFileSync("./result.csv",processedRowsData,(error)=>{
    console.log("Error");
})