import Order from "../Models/Order.model.js";

export const findTotalRevenue=async()=>{
    const data=await Order.aggregate([
        {
            "$group":{
                _id:null,
                totalRevenue:{
                    $sum:"$totalAmount"
                }
            }
        },
        {
            "$project":{
                _id:0,
                totalRevenue:1
            }
        }
    ])
    console.log(data[0].totalRevenue);
}


export const findStatusBasedOrderCount=async()=>{
    const data=await Order.aggregate([
        {
            $group:{
                _id:"$status",
                totalOrders:{
                    $sum:1
                }
            }
        }
    ])

    console.log(data);
    return data;
}

export const findTopSpenders=async()=>{
    const data=await Order.aggregate([
        {
            $sort:{
                totalAmount:-1
            }
        },
        {
            $limit:3
        },
        {
            $project:{
                _id:0,
                customerName:1
            }
        }
    ])

    console.log(data);
    return data;
}

export const findAverageOrder=async()=>{
    const data=await Order.aggregate([
        {
            $group:{
                _id:null,
                averageOrder:{
                    $avg:"$totalAmount"
                }
            }
        },
        {
            $project:{
                _id:0,
                averageOrder:1
            }
        }
    ])

    console.log(data);
    return data;
}

export const findMostSoldProducts=async()=>{
    const data=await Order.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName",
                itemCount:{$sum:"$items.quantity"}
            }
        },
        {
            $match:{
                itemCount:{
                    $gte:10
                }
            }
        }
    ])

    console.log(data);
    return data;
}

export const findMonthlyRevenue=async ()=>{
    const currentDate=new Date();
    const sixMonthBeforeDate=new Date(currentDate);
    sixMonthBeforeDate.setMonth(sixMonthBeforeDate.getMonth()-6);
    
    const data=await Order.aggregate([
        {
            $match:{
                orderDate:{
                    $lte:currentDate,
                    $gte:sixMonthBeforeDate
                }
            }
        },
        {
            $group:{
                _id:{month:{$month:"$orderDate"},year:{$year:"$orderDate"}},
                totalRevenue:{
                    $sum:"$totalAmount"
                }
            }
        }
    ])

    console.log(data);
    return data;
}

export const findCustomersWithMultipleOrders=async()=>{
    const data=await Order.aggregate([
        {
            $group:{
                _id:"$customerName",
                orderCount:{
                    $sum:1
                }
            }
        },
        {
           $match:{
            orderCount:{
                $gte:2
            }
           }   
        }
    ])

    console.log(data);
    return data;
}

export const findProductNames=async()=>{
    const data=await Order.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName"
            }
        }
    ]);

    console.log(data);
    return data;
}

export const findDeliveredOrdersRevenue=async()=>{
    const data=await Order.aggregate([
        {
            $match:{
                status:"Delivered"
            },
        },
        {
            $group:{
                _id:null,
                totalRevenue:{
                    $sum:"$totalAmount"
                }
            }
        },
        {
            $project:{
                _id:0,
                totalRevenue:1
            }
        }
    ])

    console.log(data);
    return data;
}

export const findProductBasedTotalQuantityAndRevenue=async()=>{
    const data=await Order.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName",
                totalQuantity:{
                    $sum:"$items.quantity"
                },

                totalRevenue:{
                    $sum:{$multiply:["$items.quantity","$items.price"]}
                }
            }
        }
    ]);

    console.log(data);
    return data;
}

export const findIndexes=async()=>{
    const indexes=await Order.listIndexes();
    console.log(indexes);
    return indexes; 
}

export const checkPerformance=async()=>{
    const now=Date.now();
    const data =await Order.find({ status: "Delivered" }).explain("executionStats"); 
    console.log(data.executionStats);
    return data;
}