# Aggregation

## Steps to seed data

-Go to src/utils/seedOrder.ts
-Run the file
-The file will seed 20 data into db

This is the sample data generated from the seed script
```js
{
  "_id": {
    "$oid": "68932f240d6c2a84b9bf6f97"
  },
  "orderId": "8668372b-abd0-4c87-85df-f15f5d733fa2",
  "customerName": "Ebony.Weber",
  "orderDate": {
    "$date": "2022-10-28T03:45:10.841Z"
  },
  "status": "Shipped",
  "items": [
    {
      "productName": "Gorgeous Aluminum Chicken",
      "quantity": 20,
      "price": 293.65,
      "_id": {
        "$oid": "68932f240d6c2a84b9bf6f98"
      }
    },
    {
      "productName": "Recycled Bamboo Pants",
      "quantity": 13,
      "price": 303.65,
      "_id": {
        "$oid": "68932f240d6c2a84b9bf6f99"
      }
    },
    {
      "productName": "Licensed Aluminum Salad",
      "quantity": 10,
      "price": 976.69,
      "_id": {
        "$oid": "68932f240d6c2a84b9bf6f9a"
      }
    }
  ],
  "totalAmount": 85685,
  "__v": 0
}

```
### Find total revenue generated (sum of totalAmount).

```js

db.orders.aggregate([
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

```

![Output of first query](./Outputs/Aggregation%201.png)

### Find total number of orders by status (Pending, Shipped, Delivered).

```js
db.order.aggregate([
        {
            $group:{
                _id:"$status",
                totalOrders:{
                    $sum:1
                }
            }
        }
    ])
```

![Output of second query](./Outputs/Aggregation%202.png)

### Find the top 3 customers who spent the most (sort by totalAmount).

```js
db.orders.aggregate([
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
```

![Output of third query](./Outputs/Aggregation%203.png)

### Get the average order amount per customer.

```js
db.orders.aggregate([
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
```

![Output of fourth query](./Outputs/Aggregation%204.png)

### Find products that were sold more than 10 times (total quantity).

```js
db.order.aggregate([
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
```

![Output of fifth query](./Outputs/Aggregation%205.png)

### List monthly revenue (group by month-year) for the last 6 months.

```js
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
```

![Output of sixth query](./Outputs/Aggregation%206.png)

### Find all customers who placed more than 2 orders.

```js
db.orders.aggregate([
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
```

![Output of seven query](./Outputs/Aggregation%207.png)

### Extract only the product names from all orders using $unwind and $project.

```js
db.orders.aggregate([
        {
            $unwind:"$items"
        },
        {
            $group:{
                _id:"$items.productName"
            }
        }
    ]);
```

![Output of eigth query](./Outputs/Aggregation%208.png)

### Apply filtering using $match (only Delivered orders) and then calculate revenue.

```js
db.order.aggregate([
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
```

![Output of ninth query](./Outputs/Aggregation%209.png)

### Calculate total quantity and total revenue per product (use $unwind and $group).

```js
db.orders.aggregate([
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

```

![Output of tenth query](./Outputs/Aggregation%2010.png)

# Indexes

## Check indexes on the collection.

```js
db.orders.listIndexes();
```

![Output of first query](./Outputs/Indexes%201.png)

## Create an index on customerName.

```js
db.orders.createIndex({customer:1});
```
![Output of Second query](./Outputs/Indexes%202-1.png)

## Run a query filtering by customerName and check performance using explain("executionStats").

```js
db.orders.find({ customerName:"Lolita_Kozey11" }).explain("executionStats").executionStats; 
```

![Output of second query](./Outputs/Indexes%202-2.png)

### Create a compound index on status and orderDate. Run a query filtering by both and compare performance (before vs after).

```js
db.orders.find({ status: "Delivered" , orderDate:{
    $gte: ISODate("2023-02-01T00:00:00Z"),
    $lt: ISODate("2023-08-01T00:00:00Z")
}}).explain("executionStats").executionStats; 
```

![Output of third query](./Outputs/Indexes%203-1.png)

![Output of third query](./Outputs/Indexes%203-2.png)

### Create a text index on items.productName. Perform a text search for a product.

```js
db.orders.createIndex({"items.productName":$text});
```

```js
db.orders.find({$text:{$search:"Gold"}});
```

![Output of fourth query](./Outputs/Indexes%204.png)

### Drop an index and observe performance difference.

```js
db.orders.find({ customerName:"Lolita_Kozey11" }).explain("executionStats").executionStats; 
```

![Output of first query](./Outputs/Indexes%205.png)

# MongoDB Observations and Learnings

## Part 1: Aggregation

1. **Total Revenue**:  
   Calculating the total revenue using `$sum` in an aggregation pipeline is great for quick financial summaries, but if you have a large collection, indexing the `totalAmount` field can really speed things up.

2. **Order Status Counts**:  
   If you're looking to see how many orders are `Pending`, `Shipped`, or `Delivered`, using `$group` is perfect for that. However, it can take a little longer to process if you don’t have an index on the `status` field.

3. **Top Spenders**:  
   Sorting by `totalAmount` helps you quickly find your biggest spenders. But if you're dealing with lots of customers, adding an index on `customerName` and `totalAmount` can really boost performance.

4. **Average Order Value**:  
   Using `$avg` to calculate the average order amount per customer gives you a quick overview of customer behavior. But if you have a huge customer base, grouping by `customerName` could slow things down without the right indexes.

5. **Most Sold Products**:  
   Aggregating the total quantity of products sold with `$unwind` and `$group` is awesome for identifying best-sellers, but it can become slower with large inventories unless `items.productName` is indexed.

6. **Monthly Revenue**:  
   Grouping by month and year with `$dateToString` is fantastic for tracking revenue trends over time. But, if you’re dealing with years of data, indexing the `orderDate` field can help keep your queries snappy.

7. **Frequent Customers**:  
   To find customers who’ve placed more than two orders, using `$group` and `$match` is an easy solution. However, if your customer base is large, adding an index on `customerName` and `orderDate` can help speed up the process.

8. **Extracting Product Names**:  
   If you need to extract product names from all orders, using `$unwind` and `$project` is an efficient way to get that data. Just be aware that it can be resource-intensive on large datasets, so indexing your fields can help a lot.

9. **Revenue from Delivered Orders**:  
   Filtering for `Delivered` orders with `$match` and then calculating the revenue is straightforward. Performance gets better if you have an index on the `status` field to narrow down your results quickly.

10. **Revenue and Quantity per Product**:  
   To see how much revenue and how many units you've sold per product, you can use `$unwind` and `$group`. It works well but can become slow without indexes, especially if you're dealing with a lot of products.

---

## Part 2: Indexing

1. **Checking Indexes**:  
   Before you do anything, it’s always a good idea to run `db.orders.getIndexes()` to see what indexes you already have. This will help you figure out where you might need optimizations.

2. **Indexing `customerName`**:  
   Creating an index on `customerName` will make searches and filters based on customer names a lot faster, but keep in mind that it could slow down inserts or updates because MongoDB has to update the index each time.

3. **Compound Index**:  
   If you often query by both `status` and `orderDate`, creating a compound index on these fields can make things much faster. Just make sure your query matches the index's order, or MongoDB might not use it efficiently.

4. **Text Index on Product Name**:  
   Adding a text index on `items.productName` makes full-text searches super fast, which is great for e-commerce applications where people search for products. It’s one of those “set it and forget it” optimizations.

5. **Dropping an Index**:  
   Dropping an index can speed up write operations, but it’ll make searches slower. It’s a balancing act—you want to drop indexes that aren’t being used, but don't drop ones that are key to performance.

6. **Explain Plan**:  
   Using `.explain("executionStats")` before and after adding indexes helps you understand the performance differences. It’s like checking your speed before and after tuning your car!

7. **Performance Impact of Indexing**:  
   Indexes make read operations much faster, but they come with the tradeoff of slightly slower writes (because MongoDB needs to update the indexes with every write). It’s something to keep in mind when building your system.

8. **Smart Indexing**:  
   Be selective with indexing. It’s tempting to index everything, but too many indexes can hurt write performance. You want to index fields that are frequently queried or filtered, like `status` or `customerName`, but keep it balanced.

9. **Choosing the Right Index**:  
   Compound indexes work best when you need to filter by multiple fields. If you're querying by a combination of fields often (e.g., `status` and `orderDate`), a compound index will be way more efficient than creating multiple single-field indexes.

10. **Write Performance and Indexing**:  
   While indexes speed up queries, they also slow down writes. If your app is write-heavy, make sure you’re only indexing the fields that will really make a difference for your queries.
