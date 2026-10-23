"use strict";
// Mode strict et déclarations avec let/const : diapositive 52.
// Commentaires et syntaxe : diapositive 37.
// Chaînes et nombres (types primitifs) : diapositive 38.
const nom = "John";
const prenom = "Doe";
let age = 30;
let note = 15;
const pi = 3.14;

// Fonctions : diapositive 46. Affichage avec console.log : diapositive 34.
function f1() {
    console.log(nom);
}

function f2() {
    console.log(prenom);
}

function f3() {
    // Concaténation avec l'opérateur + : diapositives 32 et 42.
    console.log(nom + "-" + prenom);
}

function f4() {
    console.log(age);
}

function f5() {
    console.log(note);
}

function f6() {
    console.log(pi);
}

// Sélection des éléments et événement onclick : diapositives 18 à 21.
// On affecte les fonctions sans les appeler : elles s'exécutent au clic.
document.getElementById("nom").onclick = f1;
document.getElementById("prenom").onclick = f2;
document.getElementById("nom-prenom").onclick = f3;
document.getElementById("age").onclick = f4;
document.getElementById("note").onclick = f5;
document.getElementById("pi").onclick = f6;
