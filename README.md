# MERN Stack Boilerplate

## Frontend
- React.js
- Redux
- Ant Design

## Backend
- Node.js
- Express.js
- MongoDB

## Set up

1. Clone the repository
2. install dependencies from `client/` and `server/`
    ```sh
    $ cd client
    $ npm install

    $ cd ../server
    $ npm install
    ```
3. create `.env` in `server` and add your mongo db URI.
    ```env
    MONGODB_URI = '';
    ```
4. Run the server from the root
    ```sh
    $ npm run dev
    ```