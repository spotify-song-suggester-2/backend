# Backend

---

Deployed Backend: [https://build-week-how-to.herokuapp.com/](https://build-week-how-to.herokuapp.com/)

_How-Tos_ is a full-stack web application that was built during a "build week" by [Lambda School](https://lambdaschool.com/) students. Each student fulfills a role in the project to collectively build the application.

_How-Tos_ gives users a site where they can add and edit their own how-tos and everyone else who is signed up can see.

## Using

---

- [Node.js](https://en.wikipedia.org/wiki/Node.js) - JavaScript runtime for executing JavaScript at the server outside the browser
- [Express.js](https://expressjs.com/) - Lightweight web framework to bootstrap Node.js APIs
- [SQLite](https://www.sqlite.org/index.html) - Super lightweight database to bootstrap development environments
- [PostgreSQL](https://www.postgresql.org/) - An advanced object-relational database for production environments
- [Knex.js](https://knexjs.org/) - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
- [Knex-Cleaner](https://www.npmjs.com/package/knex-cleaner) - Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - A module to help make passwords more secure
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [Helmet](https://www.npmjs.com/package/helmet) - A collection of 14 smaller middleware functions that set HTTP response headers
- [JWT](https://jwt.io/) - JSON Web Token for authorization and client side tokens for security
- [Supertest](https://www.npmjs.com/package/supertest) - A test module for HTTP assertions
- [Jest](https://jestjs.io/) - A simple JavaScript testing framework
- [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env

## BASEURL

- https://song-suggester-a.herokuapp.com/

## ENDPOINTS

| Endpoint           | Request Type | Request                                                | Response                                        |
| ------------------ | ------------ | ------------------------------------------------------ | ----------------------------------------------- |
| /api/auth/register | POST         | {username: "", password: ""} | {welcome: username, password: encrypted string} |
| /api/auth/login    | POST         | {username: "", password: ""}                           | {userobject, token}                             |

### Examples:

    /api/auth/register
    POST

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    username: "dannybb";
    password: "nestor12!";
    email: "an@email.com";
    usertype: "Content Creator";
  }
  ```

  /api/auth/login
  POST

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    username: "dannybb";
    password: "nestor12!";
  }
  ```

## ENDPOINTS

| Endpoint        | Request Type | Request                            | Response                           |
| --------------- | ------------ | ---------------------------------- | ---------------------------------- |
| /api/howtos     | GET          | requires a token                   | [{howtos}]                         |
| /api/howtos/:id | GET          | requires a token                   | {instruction: string, number: int} |
| /api/howtos     | POST         | {name: "", desc: "", user_id: int} | no return at the moment            |
| /api/howtos/:id | PUT          | {name: "", desc: "", user_id: int} | no return at the moment            |
| /api/howtos/:id | DELETE       | {}                                 | no return at the moment            |

### Examples:

/api/howtos
GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id
  GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos
  POST

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    name: "howto howto"
    desc: "this will show you howto howto"
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id
  PUT

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    name: "howto howto"
    desc: "this will show you howto howto"
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id
  DELETE

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

## ENDPOINTS

| Endpoint                      | Request Type | Request                            | Response                              |
| ----------------------------- | ------------ | ---------------------------------- | ------------------------------------- |
| /api/howtos/:id/steps         | GET          | requires a token                   | [{number: int}, {intruction: string}] |
| /api/howtos/:id/steps/:number | GET          | requires a token                   | {instruction: string}                 |
| /api/howtos/:id/steps         | POST         | {number: int, instruction: string} | no return at the moment               |
| /api/howtos/:id/steps/:number | PUT          | {number: int, instruction: string} | no return at the moment               |
| /api/howtos/:id/steps/:number | DELETE       | {}                                 | no return at the moment               |

### Examples:

/api/howtos/:id/steps
GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/steps/number
  GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/steps
  POST

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    number: 1
    instruction: "read this document"
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/steps/:number
  PUT

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    name: 1
    desc: "read the readme available at: "
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/steps/:number
  DELETE

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

## ENDPOINTS

| Endpoint                     | Request Type | Request             | Response                  |
| ---------------------------- | ------------ | ------------------- | ------------------------- |
| /api/howotos/:id/likes       | GET          | requires a token    | returns likes for a howto |
| /api/howotos/:id/likes/users | GET          | requires a token    | returns all a users likes |
| /api/howotos/likes           | GET          | requires a token    | returns all likes         |
| /api/howotos/:id/likes       | POST         | {user_id, howto_id} | no return at the moment   |
| /api/howotos/:id/likes       | DELETE       | {user_id, howto_id} | no return at the moment   |

### Examples:

/api/howtos/:id/likes
GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/likes/users
  GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/likes
  GET

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/likes
  POST

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    howto_id: 1
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/likes
  PUT

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:

  ```javascript
  {
    howto_id: 1
    user_id: 3
    Headers{ Authorization: token};
  }
  ```

  /api/howtos/:id/steps/:number
  DELETE

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:

  ```javascript
  {
    Headers{ Authorization: token};
  }
  ```
