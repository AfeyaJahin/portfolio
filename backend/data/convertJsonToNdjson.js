
const fs = require('fs');

const convertToNDJSON = (sourceFilePath, targetFilePath) => {
  const jsonArray = require(sourceFilePath); // Load the JSON array from the source file
  const ndjson = jsonArray.map(JSON.stringify).join('\n'); // Convert it to NDJSON
  fs.writeFileSync(targetFilePath, ndjson); // Write the NDJSON to the target file
};

// Convert educationData.json to NDJSON
convertToNDJSON('./educationData.json', './educationData.ndjson');
// Convert projectsData.json to NDJSON
convertToNDJSON('./projectsData.json', './projectsData.ndjson');