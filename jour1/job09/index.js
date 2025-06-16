const fs = require("fs");
fs.writeFile(
  "data.txt",
  "Je manipule les fichiers avec un module node !",
  (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier :", err);
      return;
    }
    console.log("Fichier data.txt créé avec succès !");
  }
);
