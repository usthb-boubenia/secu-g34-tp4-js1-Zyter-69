"use strict";
//cours : p38-40 :tableau et objet
function f1() {
    let etudiant = ["etudiant1", "etudiant2", "etudiant3"];
    console.log(etudiant);
}

function f2() {
    //objet unique avec des proprietes
    let etudiant = {nom : "Doe", prenom: "John", age: 30};
    console.log(etudiant);
}

function f3() {
    //cours : p40 : tableau d'objet
    let etudiant = [
        {nom : "Doe", prenom: "John", age: 30},
        {nom : "Smith", prenom: "Jane", age: 25},
        {nom : "Brown", prenom: "Mike", age: 28}
    ];
    console.log(etudiant);
}