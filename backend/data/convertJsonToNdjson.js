
const fs = require('fs');

const convertToNDJSON = (sourceFilePath, targetFilePath) => {
  const jsonArray = require(sourceFilePath); // Load the JSON array from the source file
  const ndjson = jsonArray.map(JSON.stringify).join('\n'); // Convert it to NDJSON
  fs.writeFileSync(targetFilePath, ndjson); // Write the NDJSON to the target file
};

// Convert educationData.json to NDJSON
convertToNDJSON('./data/educationData.json', './data/educationData.ndjson');

// Convert experienceData.json to NDJSON
convertToNDJSON('./data/experienceData.json', './data/experienceData.ndjson');