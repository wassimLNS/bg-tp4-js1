"use strict";
// Mode strict et const : diapositive 52. Commentaires : diapositive 37.
// Fonctions : diapositive 46. Variables locales : diapositive 51.
function f1() {
    // Tableau de chaînes : diapositives 38 et 39.
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Parcours avec une boucle : diapositive 45.
    for (const etudiant of etudiants) {
        // Une sortie console par étudiant : diapositive 34.
        console.log(etudiant);
    }
}

function f2() {
    // Objet avec des propriétés : diapositive 40.
    const etudiant = { nom: "John", prenom: "DOE", age: 30 };
    // Affichage de l'objet lui-même : diapositive 34.
    console.log(etudiant);
}

function f3() {
    // Tableau d'objets : diapositive 41.
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle : diapositive 45. Accès aux propriétés : diapositive 40.
    for (const etudiant of etudiants) {
        // Concaténation : diapositives 32 et 42. Console : diapositive 34.
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}

// Sélection des éléments et événement onclick : diapositives 18 à 21.
document.getElementById("tableau").onclick = f1;
document.getElementById("objet").onclick = f2;
document.getElementById("tableau-objets").onclick = f3;
