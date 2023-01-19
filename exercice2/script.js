"use strict";
let affichage ;

let chiens =  [{ 
    nom: "rex", 
    race: "caniche", 
    age: 5
},
        
    {nom: "bill", 
     race: "cocker", 
     age: 3
}]
    
console.log(chiens);

function ajoutChien(){
    let nom = document.querySelector('#nom').value;
    let race = document.querySelector('#race').value;
    let age = document.querySelector('#age').value;
    chiens[chiens.length] = {
        nom: nom,
        race: race,
        age: age
    };
}
//ajoutChien();


console.log(ajoutChien());

for (let i = 0; i < chiens.length; i++) {
    affichage += `${i} ) ${chiens[i].nom} ${chiens[i].prenom} ${chiens[i].age} \n`
  //  affichage += i+") "+annuaire[i].nom+" "+annuaire[i].prenom+" age : "+annuaire[i].age+ " \n";
  console.table(chiens);
}



let myButton = document.querySelector("#my_Button");

myButton.addEventListener('click', () => {
    //console.log(document.querySelectorAll(".mesInput").value);
    ajoutChien();
});