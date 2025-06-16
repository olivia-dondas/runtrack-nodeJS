const fs = require("fs");
fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Contenu du fichier data.txt:", data);
});
