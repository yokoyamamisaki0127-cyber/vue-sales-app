# Vue Sales App

## Overview
Vue Sales App is a simple e-commerce application built with Vue.js. It features a homepage showcasing products, a product listing page, and a checkout process. The application allows users to add products to their shopping cart and proceed with purchases.

## Features
- Home page with featured products
- Product listing page displaying all available products
- Shopping cart functionality to manage selected items
- Checkout page for completing purchases
- Responsive design for a seamless user experience

## Project Structure
```
vue-sales-app
├── src
│   ├── components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── ProductCard.vue
│   │   └── ShoppingCart.vue
│   ├── pages
│   │   ├── Home.vue
│   │   ├── Products.vue
│   │   └── Checkout.vue
│   ├── services
│   │   └── api.ts
│   ├── stores
│   │   └── cart.ts
│   ├── App.vue
│   └── main.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Setup
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd vue-sales-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## License
This project is licensed under the MIT License.