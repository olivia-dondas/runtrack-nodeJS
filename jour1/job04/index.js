const fs = require("fs");
fs.readFile("../job01/index.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Contenu du fichier 1:", data);
});

fs.readFile("../job02/index.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Contenu du fichier 2:", data);
});

fs.readFile("../job03/index.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Contenu du fichier 3:", data);
});
