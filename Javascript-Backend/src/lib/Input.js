import readLine from "readline"

const prompt=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})



export function takeInput(query){
    return new Promise((resolve,reject)=>{
    prompt.question(query,(data)=>{
        resolve(data);
    })
})}

export const closeInput=()=>{
    prompt.close();
}



