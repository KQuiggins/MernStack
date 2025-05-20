# MERN eCommerce Platform - Xsploit

A full-stack MERN (MongoDB, Express.js, React, Node.js) eCommerce application designed as a marketplace for cybersecurity tools, books, and hacking supplies. It features user authentication, product browsing, a shopping cart, order processing with PayPal integration, and admin functionalities for managing products and users.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Product Management**:
  - Browse, search, and view detailed product information.
  - Admin capabilities to create, update, and delete products (e.g., [`backend/controllers/productController.js`](backend/controllers/productController.js)).
  - Product image uploads (handled via [`UPLOADS_URL`](frontend/src/constants.js) and [`uploadProductImage`](frontend/src/slices/productsApiSlice.js) mutation).
- **Shopping Cart**: Add/remove items, and update quantities.
- **Order Processing**:
  - Secure checkout process.
  - Integration with PayPal for payments (see [`PAYPAL_URL`](frontend/src/constants.js)).
  - View order history for authenticated users (see [`ProfileScreen.jsx`](frontend/src/screens/ProfileScreen.jsx)).
- **Admin Dashboard**:
  - Manage users and orders.
  - Update product listings.
  - (Protected by [`AdminRoute`](frontend/src/components/AdminRoute.jsx))
- **Product Reviews & Ratings**: Users can submit reviews and ratings for products.
- **Responsive Design**: User interface built with React-Bootstrap, ensuring compatibility across devices.

## Tech Stack

- **Backend**:
  - Node.js: JavaScript runtime environment.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: ODM library for MongoDB and Node.js.
  - JWT: For user authentication.
- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Redux Toolkit: For state management.
  - React Router: For client-side routing.
  - Vite: Frontend build tool and dev server.
  - Bootstrap & React-Bootstrap: For UI components and styling (see [`frontend/src/assets/styles/bootstrap.custom.css`](frontend/src/assets/styles/bootstrap.custom.css)).
  - Axios: For making HTTP requests.
- **Payment Integration**:
  - PayPal API (via [`@paypal/react-paypal-js`](frontend/package.json)).

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm (Node Package Manager, comes with Node.js)
- MongoDB (Ensure your MongoDB server is running)

## Getting Started

### Cloning the Repository

```bash
git clone <your-repository-url>
cd mernstack # Or your project's root directory name
```

### Backend Setup

1. Navigate to the project root directory.
2. Install backend dependencies:

    ```bash
    npm install
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Return to the project root directory:

    ```bash
    cd ..
    ```

### Environment Variables

Create a `.env` file in the root directory of the project (`mernstack/`) and add the following environment variables. This file is listed in `.gitignore` and should not be committed to version control.

```env
NODE_ENV=development
PORT=5000 # Or any port you prefer for the backend
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PAYPAL_CLIENT_ID=<your_paypal_client_id> # For frontend PayPal integration
```

- `MONGO_URI`: Your MongoDB connection string (e.g., `mongodb://localhost:27017/xsploitdb`).
- `JWT_SECRET`: A strong, unique secret for signing JWTs.
- `PAYPAL_CLIENT_ID`: Your PayPal application's client ID.

## Available Scripts

You can run the following scripts from the **root directory** of the project:

- **Start backend server only**:

  ```bash
  npm start
  ```

  (Runs `node backend/server.js` as defined in `package.json`)

- **Start backend server with nodemon (for development)**:

  ```bash
  npm run server
  ```

  (Runs `nodemon backend/server.js`)

- **Start frontend development server (Vite)**:

  ```bash
  npm run client
  ```

  (Runs `npm start --prefix frontend`)

- **Run both backend (with nodemon) and frontend servers concurrently**:

  ```bash
  npm run dev
  ```

- **Import seed data into MongoDB**:
  This will delete all existing products, users, and orders, then populate the database with sample data from `products.js` and `users.js`.

  ```bash
  npm run data:import
  ```

  (Runs `node backend/seeders.js` as defined in `backend/seeders.js`)

- **Destroy all data in MongoDB**:
  This will delete all products, users, and orders from the database.

  ```bash
  npm run data:destroy
  ```

  (Runs `node seeders.js --destroy`)

- **Build frontend for production and install all dependencies**:

  ```bash
  npm run build
  ```

  (Runs `npm install && npm install --prefix frontend && npm run build --prefix frontend`)

After running `npm run dev` or `npm start` and `npm run client`, the application should be accessible at:

- Frontend: `http://localhost:5173` (or the port Vite assigns, check your terminal)
- Backend API: `http://localhost:5000` (or the `PORT` you set in `.env`)

The main application entry point for users will be the frontend URL.

## Project Structure

```bash
.
├── backend/                # Express.js backend application
│   ├── config/             # Configuration files (e.g., db.js)
│   ├── controllers/        # Route handlers
│   ├── data/               # Seed data
│   ├── middleware/         # Custom middleware (auth, error handling)
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── seeders.js          # Script to seed database
│   └── server.js           # Backend entry point
├── frontend/               # React frontend application (Vite based)
│   ├── public/             # Static assets for frontend
│   ├── src/                # Frontend source code
│   │   ├── assets/         # Styles, images
│   │   ├── components/     # Reusable React components
│   │   ├── constants.js    # Application constants (URLs, etc.)
│   │   ├── screens/        # Page-level components
│   │   ├── slices/         # Redux Toolkit slices (reducers, actions)
│   │   ├── store.js        # Redux store configuration
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Frontend entry point
│   ├── .eslintrc.cjs       # ESLint configuration
│   ├── index.html          # Main HTML file for Vite
│   ├── package.json        # Frontend dependencies and scripts
│   └── vite.config.js      # Vite configuration
├── uploads/                # Directory for uploaded images (ensure it's writable)
├── .env                    # Environment variables (ignored by Git)
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Root project dependencies and scripts
└── README.md               # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a suggestion.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
