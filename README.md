# **Ticket Management Application**

This is a simple ticket management application built with Angular for the frontend and Node.js for the backend. It allows users to create, view, update, and delete tickets through a REST API.

---

## **Features**

- Manage tickets with attributes:
  - Title
  - Description
  - Status (e.g., Open, In Progress, Closed)
  - Creation Date
- REST API for CRUD operations
- Fully responsive UI built with Angular
- Backend implemented using Express.js
- Integration with MongoDB for data persistence

---

## **Technologies Used**

### **Frontend**
- Angular
- TypeScript
- HTML & CSS

### **Backend**
- Node.js
- Express.js
- MongoDB

### **Additional Tools**
- Postman for testing APIs
- Angular CLI for development
- MongoDB Compass (optional) for database visualization

---

## **Setup Instructions**

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Angular CLI](https://angular.io/cli)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

### **Backend Setup**

   ### 1. Install dependencies:
   To install the required dependencies for the backend, run the following command in the project root directory:

      npm install


   ### 2. Start the MongoDB server:
   Start the MongoDB server by running the following command in a new terminal window:

      mongod

   ### 3. Start the backend server:
   To start the backend server, run the following command in the project root directory:
        
      npm start

   The server will start running at `http://localhost:5000`.

---
### **Frontend Setup**

### 1. Install dependencies:
   To install the required dependencies for the frontend, run the following command in the `frontend` directory:

      npm install

### 2. Start the frontend server:
   To start the frontend server, run the following command in the `frontend` directory:
   
       ng serve
    
   The frontend server will start running at `http://localhost:4200`.


---

# REST API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint        | Description                 |
|--------|-----------------|-----------------------------|
| GET    | /tickets        | Retrieve all tickets        |
| GET    | /tickets/:id    | Retrieve a single ticket    |
| POST   | /tickets        | Create a new ticket         |
| PUT    | /tickets/:id    | Update an existing ticket   |
| DELETE | /tickets/:id    | Delete a ticket             |
