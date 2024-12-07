const { defineConfig } = require('cypress');
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');
const pg = require('pg');
const csv = require('@fast-csv/parse');
const {writeToPath} = require('@fast-csv/format');

module.exports = defineConfig({
  accessibilityFolder: 'cypress/your-accessibility-reports-folder',
  e2e: {
    setupNodeEvents(on, config) {
      // Combine all tasks into a single call
      on('task', {
        // Task to query the database
        READFROMDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
              .then((res) => res.rows)
              .catch((err) => {
                console.error('Database query failed:', err);
                throw err;
              });
        },

        // Task to read data from a CSV file
        readFromCsv() {
          return new Promise((resolve => {
            const dataArray = [];
            csv.parseFile('./myCSV.csv', { headers: true })
                .on('data', (data) => {
                  dataArray.push(data);
                })
                .on('end', () => {
                  resolve(dataArray);
                })
                .on('error', (error) => {
                  console.error('CSV read error:', error);
                  reject(error);
                });
          }));
        },
      });

      on('task', {
          writeToCsv({ name, rows }) {
              writeToPath(`./${name}.csv`, rows);
              return null;
          }
      })

      // Add accessibility tasks
      addAccessibilityTasks(on);

      // Add Cypress grep plugin
      require('@cypress/grep/src/plugin')(config);

      return config;
    },

    // Database connection details
    DB: {
      database: 'postgres',
      host: 'localhost',
      user: 'Sri',
      password: 'Test123',
      port: 5432,
    },

    env: {
      // Example environment variables
      snapshotOnly: true,
    },
  },
});
