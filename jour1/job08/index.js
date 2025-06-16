const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  let resultat = "";
  for (let i = 0; i < data.length; i += 2) {
    resultat += data[i];
  }
  console.log("Une Lettre sur deux du fichier data.txt : " + resultat);
});
