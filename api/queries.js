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
              "SELECT * FROM timeline ORDER BY year ASC",
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

const getDataById = (request, response) => {
  const { id } = request.body; // Accessing id from request body
  const type = request.params.type;

  let query = "";

  if (type === "projects") {
    query = "SELECT * FROM projects WHERE id = $1";
  } else if (type === "blogs") {
    query = "SELECT * FROM blogs WHERE id = $1";
  }

  pool.query(query, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getAllData,
  getDataById,
};
