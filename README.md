# Recipe Finder API

## Description
This API serves as the backend for a recipe-finder app. It provides endpoints to retrieve recipes, update favorites, and filter recipes by ingredients.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory with the following variables:

- DB_USER=your_db_user
- DB_HOST=your_db_host
- DB_NAME=your_db_name
- DB_PASSWORD=your_db_password
- DB_PORT=your_db_port

4. Start the server in development mode with `npm run dev`.

## How to Use
- Access the API at `http://localhost:3000`.
- Endpoints:
  - `GET /recipes`: Get all recipes.
  - `GET /recipes/:id`: Get a specific recipe by ID.
  - `PUT /recipes/:id`: Update a recipe's favorite status.
  - `GET /recipes/ingredients/:ingredients`: Get recipes by ingredients.
  - `GET /recipes/favorites`: Get favorite recipes.
