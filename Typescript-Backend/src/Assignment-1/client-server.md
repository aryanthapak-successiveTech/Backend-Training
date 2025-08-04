# Client-Server Architecture

## Key Components

### 1. Client
  
  The requesting machine or application.

  Usually includes user interfaces and interacts with the end user.

  Sends requests to the server and waits for responses.
 
  Examples: Web browsers, mobile apps, desktop applications.

### 2. Server
  
  The responding machine or system providing services or resources.

  Manages databases, application logic, and security.

  Waits for incoming client requests, processes them, and sends back the appropriate response.

  Examples: Web servers, application servers, database servers.

## Common Protocols

  HTTP/HTTPS – For web-based applications.

  FTP – For file transfers.

  SMTP/IMAP/POP3 – For email services.

  SQL – For database queries (client apps querying a DB server).

## How It Works

  The client initiates a connection to the server.

  The server listens for requests on a specific port.

  When a request is received, the server processes it;

  The server sends the response back to the client.

  The connection may persist (persistent) or be closed after each request.

