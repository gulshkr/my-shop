module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "codewithme"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "17c7a769f94349288f109b37791a7249"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});

// strapi-api/config/database.js
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "codewithme"),
//         username: env("DATABASE_USERNAME", "postgres"),
//         password: env("DATABASE_PASSWORD", "17c7a769f94349288f109b37791a7249"),
//         schema: env("DATABASE_SCHEMA", "public"),
//       },
//       options: {},
//     },
//   },
// });


// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
