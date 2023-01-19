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

const select = document.getElementById('my_select');
//const select = document.querySelector('#my_select');
const btn = document.getElementById('my_Button');
//const btn = document.querySelector('#my_Button');
const output = document.getElementById('idOutPut');
//const output = document.querySelector('#idOutPut');

//console.log(select);
// console.log(btn);
// console.log(output);

const refreshDogSelect = () => {
    select.innerHTML = `<option value ="0">Sélectionner un chien</option>`;
    chiens.forEach(chien => {
    console.log(chien.nom);
    select.innerHTML += `<option value ="${chiens.indexOf(chien)+1}">${chien.nom}</option>`;

    });
}


select.addEventListener("change", () => {
    let chienId = select.value;
    if(chienId !=0){
        output.textContent = `Vous avez selectionné le chien avec l'ID : ${chienId}` 

    }else {
        output.textContent="";
    }
    console.log(select.value);
});

console.log(select);

btn.addEventListener("click", ()=>{
     let nom = document.querySelector('#nom').value;
     let race = document.querySelector('#race').value;
     let age = Number(document.querySelector('#age').value);
     let inputVides = document.querySelectorAll('.mesInput').value;
         chiens.push({
         nom: nom,
         race: race,
         age: age
     });
     console.table(chiens);

     refreshDogSelect();
     output.textContent="";
     inputVides ="";
    //console.log(inputVide);
    //  chiens[chiens.length] = {
    //      nom: nom,
    //      race: race,
    //      age: age
    //  };
})

console.table(chiens);

refreshDogSelect();

// function ajoutChien(){
//     let nom = document.querySelector('#nom');
//     let race = document.querySelector('#race');
//     let age = document.querySelector('#age');
//     chiens[chiens.length] = {
//         nom: nom,
//         race: race,
//         age: age
//     };
// }
//ajoutChien();


//console.log(ajoutChien());

// for (let i = 0; i < chiens.length; i++) {
//     affichage += `${i} ) ${chiens[i].nom} ${chiens[i].prenom} ${chiens[i].age} \n`
//   //  affichage += i+") "+annuaire[i].nom+" "+annuaire[i].prenom+" age : "+annuaire[i].age+ " \n";
//   console.table(chiens);
// }



// let myButton = document.querySelector("#my_Button");

// myButton.addEventListener('click', () => {
//     //console.log(document.querySelectorAll(".mesInput").value);
//      ajoutChien();
//     console.log(myButton);
// });


// const select = document.getElementById("my-select");

// select.addEventListener("change", () => {
//     console.log(select.value);
// });