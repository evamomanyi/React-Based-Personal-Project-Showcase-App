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

---

## Running the Application

## Published at Netlify

Run "https://react-based-personal-project-showcase.netlify.app/" to run this application

### Start the React Frontend

```bash
npm run dev
```

### Start the JSON Server Backend

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

---

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

### Shop Page

![Shop Page](screenshots/shop-page.png)

### Admin Portal

![Admin Portal](screenshots/admin-page.png)

---

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
* GitHub Pages deployment supports the frontend only; JSON Server is not deployed. As such, Netlify has been used to publish this project

---

## Author

Evanjeline Momanyi

---

