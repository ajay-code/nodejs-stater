## Nodejs Starter

This is a nodejs starter repo with typescript

### Build Requirements

-   node >=16.0.0
-   Dev requirements
    -   typescript (tsc typescript compiler)
    -   concurrently
    -   nodemon

### Built with

-   Nodejs
-   Typescript
-   Mysql
-   Libraries
    -   express
    -   knexjs (database)
    -   zod (validation)

### How to use Nodejs Starter

-   git clone [https://github.com/ajay-code/nodejs-starter]
-   cd nodejs-starter
-   create .env file. Setup all ENV variables
-   npm install
-   npm run build
-   npm run gen:key
-   npm run migrate
-   npm run dev (for development) OR npm run build (to build the project but not run)

### NPM commands available

-   npm run build (compiles TS to JS)
-   npm run gen:key (generate APP_KEY)
-   npm run start (runs compiled JS files)
-   npm run dev (compile with watch and start the server)
-   npm run migrate (create database tables)
    -   setup DB\_ ENV variables properly for it to run
-   npm run rollback (rollbacks the created tables in database)
