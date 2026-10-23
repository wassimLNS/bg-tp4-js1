"use strict";
// Mode strict et const : diapositive 52. Commentaires : diapositive 37.
// Tableau d'objets : diapositive 41. Nombres et chaînes : diapositive 38.
// La dernière donnée est conservée ; son rôle n'est pas précisé dans le TP.
const Students = [
    { matricule: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14, valeurSupplementaire: 5 },
    { matricule: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7, valeurSupplementaire: 1 },
    { matricule: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13, valeurSupplementaire: 3 }
];

// Fonction A appelant B : diapositive 46.
function A() {
    // Boucle : diapositive 45. Variable locale : diapositive 51.
    for (const etudiant of Students) {
        // Condition if/else : diapositive 43. Propriété d'objet : diapositive 40.
        if (B(etudiant.moyenne)) {
            // Concaténation : diapositives 32 et 42. Console : diapositive 34.
            console.log(etudiant.matricule + ": ADMIS");
        } else {
            console.log(etudiant.matricule + ": AJOURNÉ");
        }
    }
}

// Paramètre et valeur de retour : diapositive 46.
// En JavaScript, un flottant est de type number ; boolean : diapositive 38.
function B(moyenne) {
    // Comparaison : diapositive 42. Hypothèse : admission à partir de 10/20.
    return moyenne >= 10;
}

// Événement onclick : diapositives 18 à 21. Aucune troisième fonction ajoutée.
document.getElementById("deliberation").onclick = A;
