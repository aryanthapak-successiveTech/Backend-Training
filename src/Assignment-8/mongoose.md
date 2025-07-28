# Mongoose & MongoDB Documentation

---

## Introduction to MongoDB

**MongoDB** is a popular open-source, document-oriented NoSQL database designed for scalability, performance, and high availability. It stores data in flexible, JSON-like documents called **BSON (Binary JSON)**.

### Key Features

- **Schema-less**: Documents in a collection do not need to have the same set of fields.
- **Scalable**: Supports horizontal scaling via sharding.
- **High Performance**: Optimized for read/write throughput.
- **Rich Query Language**: Supports powerful queries with indexing and aggregation.

### Basic Concepts

| Concept       | MongoDB Equivalent        | RDBMS Equivalent |
|---------------|---------------------------|------------------|
| Database      | Database                  | Database         |
| Collection    | Table                     | Table            |
| Document      | BSON (Binary JSON) object | Row              |
| Field         | Key-value pair            | Column           |

---

## Understanding ORM (Object-Relational Mapping)

**ORM (Object-Relational Mapping)** is a technique for converting data between incompatible type systems in object-oriented programming languages and relational databases.

### Benefits of ORM:

- Simplifies database interaction using familiar object-oriented patterns.
- Reduces boilerplate SQL code.
- Improves code maintainability and readability.

However, traditional ORMs are designed for **Relational Databases (RDBMS)**. Since MongoDB is a **NoSQL** document database, it uses an **ODM (Object Data Modeling)** library instead of an ORM.

---

## What is Mongoose?

**Mongoose** is a popular ODM library for **MongoDB** and **Node.js**. It provides a schema-based solution to model your application data.

### Features of Mongoose

- Schema definitions with validation rules.
- Middleware support (pre/post hooks).
- Built-in type casting, query building, and business logic hooks.
- Relationship population (similar to joins).
- Easy integration with Express.js and Node.js.

### Installation

```bash
npm install mongoose
```
## RDBMS vs NoSQL Databases

| Feature             | RDBMS (e.g., MySQL, PostgreSQL)       | NoSQL (e.g., MongoDB)                                |
|---------------------|----------------------------------------|------------------------------------------------------|
| **Data Model**       | Tables, Rows                          | Collections, Documents                               |
| **Schema**           | Strict (predefined)                   | Dynamic (schema-less)                                |
| **Scalability**      | Vertical (scale-up)                   | Horizontal (scale-out)                               |
| **Joins**            | Supported                             | Not natively supported (simulated via population)    |
| **Transactions**     | ACID compliant                        | Limited or eventual consistency                      |
| **Query Language**   | SQL                                   | Query API (JavaScript-like syntax)                   |
| **Ideal Use Cases**  | Structured data, complex joins        | Big data, real-time analytics, agile development     |
