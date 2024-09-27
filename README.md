
Here’s a basic GitHub README file for the CRUD API built using Next.js, TypeScript, and hosted on Vercel.

Todo CRUD API with Next.js and TypeScript
This project is a simple CRUD (Create, Read, Update, Delete) API built with Next.js and TypeScript. It manages a list of todos stored in memory. The API supports basic operations to add, retrieve, update, and delete todos.

Features
GET: Retrieve all todos
POST: Add a new todo
PUT: Update an existing todo
DELETE: Delete a todo
Technologies Used
Next.js 13+ (App Router)
TypeScript
In-memory storage (no database for simplicity)
Postman or cURL for testing API endpoints
Hosted on Vercel
Getting Started
Follow the steps below to set up and run the project on your local machine.

Prerequisites
Node.js (v16 or above)
npm or yarn
Vercel CLI (optional, for deployment)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/todo-crud-api.git
Navigate to the project directory:

bash
Copy code
cd todo-crud-api
Install dependencies:

bash
Copy code
npm install
Running Locally
To run the Next.js server locally, use the following command:

bash
Copy code
npm run dev
The server will start at http://localhost:3000.

API Endpoints
1. GET /api/todos
Retrieve the list of all todos.

bash
Copy code
GET http://localhost:3000/api/todos
2. POST /api/todos
Add a new todo. The request body should contain title and description in JSON format.

bash
Copy code
POST http://localhost:3000/api/todos
Content-Type: application/json
{
  "title": "Learn Next.js",
  "description": "Understand API routes"
}
3. PUT /api/todos
Update an existing todo. The request body should contain id, newTitle, and newDescription in JSON format.

bash
Copy code
PUT http://localhost:3000/api/todos
Content-Type: application/json
{
  "id": 1,
  "newTitle": "Master Next.js",
  "newDescription": "Get deeper into API routes"
}
4. DELETE /api/todos
Delete an existing todo. The request body should contain deleteId.

bash
Copy code
DELETE http://localhost:3000/api/todos
Content-Type: application/json
{
  "deleteId": 1
}
Testing the API
You can use Postman or cURL to test the API endpoints.

Using Postman
Open Postman and set the request method to GET, POST, PUT, or DELETE based on the operation.
Set the request URL to http://localhost:3000/api/todos.
For POST, PUT, and DELETE, provide the required JSON body in the Body tab.
Click Send to see the response.
Using cURL
You can test with cURL using these commands:

POST request example:

bash
Copy code
curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"title": "Learn Next.js", "description": "Understand API routes"}'
GET request example:

bash
Copy code
curl -X GET http://localhost:3000/api/todos
PUT request example:

bash
Copy code
curl -X PUT http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"id": 1, "newTitle": "Master Next.js", "newDescription": "Deep dive into API routes"}'
DELETE request example:

bash
Copy code
curl -X DELETE http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"deleteId": 1}'
Deploying to Vercel
Install the Vercel CLI globally if you don’t have it installed:

bash
Copy code
npm install -g vercel
Run the following command in your project directory to deploy:

bash
Copy code
vercel
