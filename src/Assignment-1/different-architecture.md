# Architectures

## 1. Monolithic Architecture

### Characteristics:

  Single-tiered, unified codebase.

  All functions run in one process and are tightly coupled.

  Typically consists of three main parts: database, server-side logic, and client-side UI.

### Pros:

  Simple to develop and test initially.

  Easy to deploy (single deployable unit).

### Cons:

  Difficult to scale and maintain as the application grows.

  A change in one part may require redeploying the entire application.


## 2. Microservices Architecture

### Characteristics:
  Application is divided into loosely coupled, independently deployable services.

  Each service handles a specific business function and communicates via APIs.

### Pros:

  Scalability and flexibility in deployment.

  Easier to maintain and develop by separate teams.

  Fault isolation (failure in one service doesn’t bring down the whole system).

### Cons:

  Complex infrastructure and increased operational overhead.

  Requires sophisticated DevOps and monitoring practices.

## 3. Event-Driven Architecture

### Characteristics:

  Components communicate through events (messages or signals).

  Asynchronous and loosely coupled.

### Pros:

  Highly scalable and responsive.
  
  Good for real-time applications and distributed systems.

### Cons:
  Harder to debug and trace event flow.

  Requires robust messaging infrastructure.

## 4. Client-Server Architecture

### Characteristics:
  
  Separation between client (frontend) and server (backend).
  
  Client sends requests; server processes and returns responses.

### Pros:

  Clear separation of responsibilities.

  Easy to understand and implement.

### Cons:

  Scalability can be limited on the server side.

  Not ideal for complex, distributed systems.

## 5. Peer-to-Peer (P2P) Architecture

### Characteristics:

  No centralized server; each node (peer) acts as both client and server.

  Used in file sharing and blockchain.

### Pros:

  High fault tolerance.

  Scalable and decentralized.

### Cons:

  Difficult to manage and secure.

  Performance may be inconsistent.
