require("dotenv").config(); // Load environment variables from .env file

const { Pool } = require("pg");

const pool =
  process.env.NODE_ENV === "production"
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      })
    : new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      });

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const getAllData = (request, response) => {
  pool.query("SELECT * FROM blogs ORDER BY id ASC", (error, blogsResults) => {
    if (error) {
      throw error;
    }

    pool.query(
      "SELECT * FROM projects ORDER BY id ASC",
      (error, projectsResults) => {
        if (error) {
          throw error;
        }

        pool.query(
          "SELECT * FROM badges ORDER BY id ASC",
          (error, badgesResults) => {
            if (error) {
              throw error;
            }

            pool.query(
              "SELECT * FROM timeline ORDER BY id ASC",
              (error, timelineResults) => {
                if (error) {
                  throw error;
                }

                const data = {
                  blogs: blogsResults.rows,
                  projects: projectsResults.rows,
                  badges: badgesResults.rows,
                  timeline: timelineResults.rows,
                };

                response.status(200).json(data);
              }
            );
          }
        );
      }
    );
  });
};

module.exports = {
  getAllData,
};
