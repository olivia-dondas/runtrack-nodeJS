const path = require("path");
console.log("Nom du fichier courant:", path.basename(__filename));
console.log("Extension du fichier courant:", path.extname(__filename));
console.log("Répetoire parent du fichier courant:", path.dirname(__filename));
