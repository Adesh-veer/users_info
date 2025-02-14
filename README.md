Below is a complete **README.md** file you can copy and paste as-is into your project's root directory:

```markdown
# User Info API

This is a backend project built using **Node.js (Express.js)**, **MongoDB**, and **JWT** for secure authentication. The application allows users to register, log in, and search for user information.

## Features

- **User Registration**: Users can sign up by providing a username, password, full name, gender, date of birth, and country.
- **User Login**: Registered users can log in to receive a JWT token.
- **Search User**: Authenticated users can search for a user by username (or email) and retrieve full user details (excluding the password).
- **Secure Authentication**: Uses JWT for authentication and bcrypt for hashing passwords.

## Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT (JSON Web Token)** for Authentication
- **dotenv** for managing environment variables
- **Postman** for API testing

## Project Structure

```
user_info/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── db/
│   │   └── index.db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── user.models.js
│   ├── routes/
│   │   ├── auth.Routes.js
│   │   └── user.Routes.js
│   ├── app.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB instance
- Git

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Adesh-veer/user_info.git
   cd user_info
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add:

   ```env
   PORT=8000
   MONGODB_URI=mongodb+srv://avvdb:9078adesh@cluster0.5lcjj.mongodb.net
   DB_NAME=USER_DB
   JWT_SECRET=your-secret-key
   ```

   - Replace `your-secret-key` with a secure string.
   - Ensure the `MONGODB_URI` does not include the database name; it will be appended in the connection code.

4. **Start the Server**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8000`.



## Testing with Postman

1. **Register a User:**  
   Send a `POST` request to `/api/auth/register` with the provided JSON body.

2. **Login:**  
   Send a `POST` request to `/api/auth/login` and copy the returned JWT token.

3. **Search for a User:**  
   Send a `GET` request to `/api/user/search?query=veer121` with the JWT token in the `Authorization` header.

## Video Walkthrough

In your video demonstration, cover the following:

1. **Project Overview:**  
   - Explain the project structure and purpose.

2. **Setup Instructions:**  
   - Show cloning the repository, installing dependencies, and setting up the `.env` file.

3. **Running the Server:**  
   - Demonstrate starting the server and checking terminal output.

4. **API Demonstration:**  
   - **User Registration:** Show a successful registration in Postman.
   - **User Login:** Demonstrate logging in and retrieving the JWT token.
   - **User Search:** Use the token to search for a user and show the response.

5. **Database Verification:**  
   - Show how user data is stored in MongoDB (using MongoDB Compass or Atlas).

6. **GitHub Repository:**  
   - Navigate through the GitHub repository to showcase your code.

