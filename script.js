// Déclaration des variables
let nbNotes =0, noteMax = 0, noteMin = 20, moyNotes = 0;

// Récupération du nombres de notes saisies par l'utilisateur 
nbNotes = Number(prompt("Combien de notes allez vous saisir ? : "));


for( let i = 1 ; i <= nbNotes; i++) {
    //Récuperation de la saisie pour chaque note
    let noteTmp = Number(prompt(`Merci de saisir la note n°${i} (sur 20) :`));

    // Ajouter la note à la moyenne
     moyNotes += noteTmp;

     // Vérification si noteTmp > a noteMax
     if(noteTmp > noteMax)
        noteMax = noteTmp;

     // Vérification si noteTmp < a noteMin
    if(noteTmp < noteMin)
        noteMin = noteTmp
}

// Calcul de ma moyenne
moyNotes = Math.round(moyNotes/nbNotes);

console.log("Ma note max est :"+noteMax);
console.log("Ma note min est :"+noteMin);
console.log("Ma moyenne est :"+moyNotes);


// myButton.addEventListener('click', () => {
//     let nom = document.querySelector('#nom').value;
//     let prenom = document.querySelector('#prenom').value;
//     const result = document.querySelector('#result')
//     result.textContent += nom+" "+prenom+" ";
// });

// const result = document.querySelector("#result");

let nbrNoteSaisies = document.querySelectorAll('.nbrNotes');
nbrNoteSaisies.textContent = `${nbNotes}`
console.log(nbrNoteSaisies);

let affichNote = document.querySelector('#listNote');

function affichernbNotes(){
    return nbNotes
} 


console.log(affichernbNotes());

// for( let i = 1 ; i <= nbNotes; i++) {
//    let ultmp = `<ul>`
   
// }