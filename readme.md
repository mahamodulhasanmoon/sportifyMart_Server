# SportifyMart Backend

This repository contains the backend service for the SportifyMart online sports platform. It is built using Node.js, Express, and MongoDB, leveraging the `rapid-mongo-expresskit` package for streamlined development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Management**: CRUD operations for sports products.
- **Order Management**: Create and manage user orders.
- **Contact Messages**: Receive and store messages from the contact form.

## Technologies Used

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB
- **ORM**: Mongoose
- **Utility Package**: `rapid-mongo-expresskit` for rapid API development

## Getting Started

To set up the backend locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB instance (local or cloud-based)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sportifymart-backend.git
   cd sportifymart-backend
   pnpm install && pnpm start
  

### Product Routes
- GET /api/products: Get all products
- GET /api/products/:id: Get a product by ID
- POST /api/products: Create a new product
- PUT /api/products/:id: Update a product by ID
- DELETE /api/products/:id: Delete a product by ID