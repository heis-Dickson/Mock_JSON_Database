const fs = require('fs');
const filePath = require('../database.json');


async function readData(data) {
      try {
          const data = await fs.readFile(filePath, JSON.stringify(data, null, 2));
      } catch (error) {
          throw Error('Error reading data: ' + error.message);
      }
      }

      module.exports = {
        readData,
        writeData
      };
