import os from "os"
export const generateRandomHealth=()=>{
    const goodOrBad=Math.floor(Math.random());
    const totalMem=os.totalmem();
    const usedMem=totalMem-os.freemem();
    return({
        uptime:process.uptime(),
        message:goodOrBad?"BAD":"OK",
        timestamp:Date.now(),
        dbConnection:goodOrBad?"Not established":"Established",
        usedMem
    })
}