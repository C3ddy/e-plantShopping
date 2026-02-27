# e-plantShopping

A **React + Redux plant shop ecommerce demo app** built with Vite ---
forked from the IBM Developer Skills Network *e-plantShopping* template
and extended for learning modern front-end development.

This project allows users to browse plant products, add them to a cart,
and interact with core ecommerce UI patterns. It serves as a practical
exercise for mastering React, Redux Toolkit, and scalable frontend
architecture.

------------------------------------------------------------------------

## 📦 Features

-   🌱 **Product Catalog** --- Browse available plant items\
-   🛒 **Shopping Cart** --- Add, remove, and update item quantities\
-   📍 **Client-Side Routing** --- Navigate between pages (Home,
    Products, Cart)\
-   🔁 **Redux State Management** --- Centralized cart & UI state\
-   ⚡ **Fast Development** --- Powered by Vite\
-   📱 **Responsive Design** --- Works on desktop and mobile

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **React** --- UI components\
-   **Redux Toolkit** --- State management\
-   **React-Redux** --- Store integration\
-   **Vite** --- Development server & build tool\
-   **JavaScript (ES6+) / JSX / CSS**

------------------------------------------------------------------------

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16+ recommended)
-   npm

### Installation

1.  Clone the repository:

``` bash
git clone https://github.com/C3ddy/e-plantShopping.git
cd e-plantShopping
```

2.  Install dependencies:

``` bash
npm install
```

3.  Run the development server:

``` bash
npm run dev
```

The app will typically run at:

    http://localhost:5173

------------------------------------------------------------------------

## 🏗 Production Build

Build the project for production:

``` bash
npm run build
```

Preview the production build:

``` bash
npm run preview
```

------------------------------------------------------------------------

## 📂 Project Structure

    e-plantShopping/
    │
    ├── public/        # Static assets
    ├── src/           # React components and Redux logic
    │   ├── components/
    │   ├── redux/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js

------------------------------------------------------------------------

## 🧠 Application Flow

-   User interacts with UI components\
-   Components dispatch actions to Redux slices\
-   Redux updates global store\
-   Subscribed components re-render automatically

This demonstrates predictable state management and clean separation of
UI and business logic.

------------------------------------------------------------------------

## 🎯 Learning Objectives

This project demonstrates:

-   Modern React component structure\
-   Global state management using Redux Toolkit\
-   Clean project organization\
-   Efficient frontend tooling with Vite

------------------------------------------------------------------------

## 🚧 Potential Improvements

To level this up further:

-   Add backend API integration\
-   Implement authentication\
-   Persist cart with localStorage\
-   Create a full checkout flow\
-   Add filtering and search functionality\
-   Improve UI with animations and transitions

------------------------------------------------------------------------

## 📄 License

Licensed under the **Apache-2.0 License**.
