# Contact Management Backend

A RESTful Contact Management Backend built with **Node.js, Express.js, MongoDB, and Mongoose**. The project provides user registration/login with JWT authentication and authenticated CRUD operations for managing contacts.

##  Features

- User registration
- Secure password hashing using **bcrypt**
- User login with **JWT authentication**
- Get current authenticated user
- Create contacts
- Get all contacts belonging to the authenticated user
- Get a single contact
- Update contacts
- Delete contacts
- Protected contact routes using JWT
- MongoDB integration using Mongoose
- Centralized error handling
- Environment variable support using dotenv
- Development server with Nodemon

##  Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| express-async-handler | Async error handling |
| Nodemon | Development server |

##  Project Structure

```text
Contact_Management_Backend/
│
├── config/
│   └── config.js
│
├── controllers/
│   ├── contactControllers.js
│   └── userControllers.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
│
├── models/
│   ├── contactModel.js
│   └── userModel.js
│
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
│
├── constants.js
├── server.js
├── package.json
├── package-lock.json
└── .env
````

##  Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/contact-management-backend.git
```

### 2. Move into the project directory

```bash
cd contact-management-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root:

```env
PORT=5000
CONECTION_STRING=your_mongodb_connection_string
SECRET_ACCESS_TOKEN=your_jwt_secret
```

> **Important:** Never commit your `.env` file or expose your MongoDB connection string/JWT secret publicly.

### 5. Start the development server

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

For production-style start:

```bash
npm start
```

##  Authentication Flow

1. Register a user using `/api/users/register`.
2. Login using `/api/users/login`.
3. The login response provides an access token.
4. Send the token in the request header for protected routes:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

5. The authentication middleware verifies the JWT and attaches the authenticated user's information to `req.user`.

##  API Endpoints

### User APIs

#### Register User

```http
POST /api/users/register
```

Request body:

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User

```http
POST /api/users/login
```

Request body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "accessToken": "YOUR_JWT_TOKEN"
}
```

#### Get Current User

```http
GET /api/users/current
```

Header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

### Contact APIs

All contact APIs require JWT authentication.

#### Get All Contacts

```http
GET /api/contacts
```

Header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

#### Create Contact

```http
POST /api/contacts
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

#### Get Single Contact

```http
GET /api/contacts/:id
```

Example:

```text
GET /api/contacts/64f123456789abcdef123456
```

#### Update Contact

```http
PUT /api/contacts/:id
```

Example request body:

```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "phone": "9876543211"
}
```

#### Delete Contact

```http
DELETE /api/contacts/:id
```

## 🗄️ Database Models

### User

The User model contains:

* `username`
* `email`
* `password`
* `createdAt`
* `updatedAt`

Passwords are hashed using bcrypt before being stored.

### Contact

The Contact model contains:

* `user_id`
* `name`
* `email`
* `phone`
* `createdAt`
* `updatedAt`

Each contact is associated with a user through `user_id`.

##  Security

* Passwords are hashed using bcrypt.
* JWT is used to authenticate protected routes.
* Contact operations are associated with the authenticated user.
* Sensitive environment variables are stored in `.env`.

##  API Testing

You can test the API using tools such as:

* Postman
* Thunder Client
* Insomnia

Recommended testing order:

```text
1. Register User
      ↓
2. Login User
      ↓
3. Copy JWT Access Token
      ↓
4. Add Authorization Header
      ↓
5. Create Contact
      ↓
6. Get Contacts
      ↓
7. Update Contact
      ↓
8. Delete Contact
```

##  Available Scripts

```bash
npm start
```

Starts the server using Node.js.

```bash
npm run dev
```

Starts the server using Nodemon for development.

##  Future Improvements

* Add request validation with a validation library
* Add pagination and search for contacts
* Add email uniqueness constraints at the schema/database level
* Add refresh-token based authentication
* Add API documentation using Swagger/OpenAPI
* Add automated tests
* Add frontend application using React
* Deploy the backend and database to production

##  Author

**Hari Chandana Kedari**

Backend practice project focused on learning and implementing:

**Node.js → Express.js → MongoDB → Mongoose → JWT Authentication → REST APIs**

---

 If you find this project useful, feel free to star the repository.
