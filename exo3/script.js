"use strict";//cours :p51

//cours : p38-40 :tableau d'objet avec proprietes multiples
let etudiant = [
    {matricule :1000, nom : "JOHN", prenom: "DOE", age: 30 , note: 15},
    {matricule :2000 ,nom : "BOB", prenom: "CARLON", age: 25 , note: 8},
    {matricule :4000 ,nom : "RAYANE", prenom: "SMITH", age: 28 , note: 12 }
];
//cours : p45 : declaration de function
function B (Note){
    //cours : p42 :condition de fonction
    return note >= 10 ? "Admis" : "Non Admis"; // operateur ternaire
}

function A (){
    //cours : p44 : boucle for
    for (let i = 0; i < etudiant.length; i++) {
        let etu = etudiant[i];
        let result = B(etu.note);//cours : p47 : appel de function callback
        console.log(etu.nom + " " + etu.prenom + " : " + result);
    }
}