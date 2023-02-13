# MERN Stack Boilerplate

## Frontend
- React.js (Creacte React App)
- Redux
- Ant Design

## Backend
- Node.js
- Express.js
- MongoDB

## Set up

1. Clone the repository
2. install dependencies from the root, client, and server.
    ```sh
    npm install
    npm install --prefix client
    npm install --prefix server
    ```
3. create `.env` in `server` and add your mongo db URI.
    ```env
    MONGODB_URI = ''
    ```
4. Run the server from the root
    ```sh
    npm run dev
    ```