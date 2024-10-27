# Shopping App

This application is a shopping interface that features a home page showcasing products, detailed product pages, a cart for managing selected items, and a navigation bar for easy access.

## Features
- **Home Page**: Displays a navigation bar and an image carousel featuring various products.
- **Product Page**: Allows users to view product details, select quantities, and add items to their cart.
- **Cart Page**: Users can manage their selected items, view total costs, and proceed to checkout.
- **Shop Page**: Displays a collection of products in a grid format with links to individual product pages.
- **Error Handling**: Provides feedback when unexpected errors occur.
- **Navigation Bar**: Provides links to different categories and a search function.

## Technologies Used
- React: For building the user interface.
- PropTypes: For type-checking props.
- CSS Modules: For styling components.
- React Router: For handling navigation.

## Components

### Nav Component

The `Nav` component serves as the navigation bar for the application, allowing users to navigate between different sections and access the shopping cart.

#### Features
- Displays links to different clothing categories (Men's, Women's, and Jewelry).
- Includes a logo that redirects to the home page.
- Shows a search bar and a user profile image.
- Displays the current total of items in the cart.

### Home Component

The `Home` component serves as the landing page of the application.

#### Features
- Displays a navigation bar at the top of the page.
- Includes an image carousel featuring various product images.

### Cart Component

The `Cart` component displays the user's shopping cart, allowing them to view items, remove them, and see the grand total.

### Items Component

The `Items` component displays detailed information about a specific product, allowing users to select quantities and add the item to their cart.

### Shop Component

The `Shop` component displays a collection of products retrieved from an API. Users can click on a product to view its details.

#### Features
- Fetches a list of products using the `useItems` custom hook.
- Displays products in a grid layout with images, titles, and prices.
- Links each product to its detailed page.

### useItems Hook

The `useItems` hook is a custom React hook that fetches data from a provided API link and manages loading and error states.

### Error Component

The `Error` component handles unexpected errors in the application. It displays an error message when an error occurs during routing.
