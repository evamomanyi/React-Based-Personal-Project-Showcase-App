# Coffee R Us Admin Portal

## Overview

Coffee R Us Admin Portal is a React-based Single Page Application (SPA) developed to help administrators manage coffee products for an e-commerce platform. The application allows users to view products, search products, add new coffee products, and update product pricing through a simulated backend using JSON Server.

---

## Features

* React Router Navigation
* Home Page with Company Information
* Shop Page with Product Listings
* Product Search Functionality
* Add New Coffee Products
* Update Existing Product Prices
* JSON Server Backend Simulation
* Responsive Design
* Unit Testing with Vitest and React Testing Library

---

## Technologies Used

* React
* React Router DOM
* Vite
* JavaScript (ES6+)
* CSS3
* JSON Server
* Vitest
* React Testing Library

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── ProductSearch.jsx
│   ├── ProductForm.jsx
│   └── ProductEdit.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── AdminPortal.jsx
│
├── hooks/
│   └── useProducts.js
│
├── context/
│   └── ProductContext.jsx
│
├── services/
│   └── api.js
│
├── tests/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Running the Application

## Published at Netlify

Run "https://react-based-personal-project-showcase.netlify.app/" to run this application

## Running the Application

## Installation

Clone the repository:

```bash
git clone git@github.com:evamomanyi/React-Based-Personal-Project-Showcase-App.git
```

Navigate into the project directory:

```bash
cd React-Based-Personal-Project-Showcase-App
```

Install dependencies:

```bash
npm install
```

This project consists of two parts:

1. React Frontend (Vite)
2. JSON Server Backend

Both services must be running simultaneously for the application to function correctly.


```

# Start JSON Server

Open a new terminal window and navigate to the project root.

Run:

```bash
npx json-server --watch db.json --port 3001
```

You should see:

```text
JSON Server started on PORT :3001
```

Verify the API is running by visiting:

```text
http://localhost:3001/products
```

A JSON response containing product data should be displayed.

# Start the React Application

Open another terminal window and navigate to the project root.

Run:

```bash
npm run dev
```

You should see output similar to:

```text
VITE v7.x.x ready

Local: http://localhost:5173/
```

# Open the Application

Open your browser and navigate to:

```text
http://localhost:5173
```

The Coffee R Us application should load successfully.

### Important Note

The Shop page retrieves product data from JSON Server using:

```javascript
http://localhost:3001/products
```

If JSON Server is not running:

* Products will not load
* The Shop page will appear empty
* Browser console errors similar to the following may appear:

```text
Cross-Origin Request Blocked
NetworkError when attempting to fetch resource
```

Always ensure JSON Server is running before starting the React application.

### Running Both Services Simultaneously

Terminal 1:

```bash
npx json-server --watch db.json --port 3001
```

Terminal 2:

```bash
npm run dev
```

### Verifying Everything Is Working

Check the following URLs:

Frontend:

```text
http://localhost:5173
```

Backend API:

```text
http://localhost:3001/products
```

If both URLs are accessible, the application is configured correctly.


# Start the React Frontend

```bash
npm run dev
```

# Start the JSON Server Backend

```bash
npm run server
```

The API will be available at:

```text
http://localhost:3001/products
```

---

## Running Tests

```bash
npm test
```

---

## API Endpoints

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

### Update Product

```http
PATCH /products/:id
```

## Application Pages

### Home Page

Displays company information and introduces the Coffee R Us platform.

### Shop Page

Displays all available coffee products and provides search functionality.

### Admin Portal

Allows administrators to add new coffee products and update product pricing.

---

## React Concepts Demonstrated

* useState
* useEffect
* useRef
* useId
* useContext
* Custom Hooks
* React Router
* Component-Based Architecture
* API Integration

---

## Future Improvements

* Product deletion functionality
* Authentication and authorization
* Product image uploads
* Cloud-hosted backend integration
* Product inventory management
* Analytics dashboard

---

## Known Limitations

* JSON Server must be running locally for CRUD operations.
* Data persistence is limited to the local JSON database.

