// Déclaration des variables
let nbNotes = 0,
  noteMax = 0,
  noteMin = 20,
  moyNotes = 0,
  affichage = `<h2>Meilleur note, moins bonne note, moyenne des notes</h2><br><hr>`;

// Récupération du nombres de notes saisies par l'utilisateur
nbNotes = Number(prompt("Combien de notes allez vous saisir ? : "));
//afficher la saisie
affichage += `<p>La série contient <b>${nbNotes} notes</b> : </p><ul>`;
for (let i = 1; i <= nbNotes; i++) {
  //Récuperation de la saisie pour chaque note
  let noteTmp = Number(prompt(`Merci de saisir la note n°${i} (sur 20) :`));
  affichage += `<li>En note <b>${i}</b>, vous avez saisi <b>${noteTmp}/20</b>.</li>`;
  // Ajouter la note à la moyenne
  moyNotes += noteTmp;

  // Vérification si noteTmp > a noteMax
  if (noteTmp > noteMax) noteMax = noteTmp;

  // Vérification si noteTmp < a noteMin
  if (noteTmp < noteMin) noteMin = noteTmp;
}
affichage += "</ul><hr>";
// Calcul de ma moyenne
moyNotes = Math.round(moyNotes / nbNotes);

console.log("Ma note max est :" + noteMax);
console.log("Ma note min est :" + noteMin);
console.log("Ma moyenne est :" + moyNotes);

affichage += `<p>Sur l'ensemble des <b>${nbNotes} notes</b> :</p>
            <ul>
                <li class="green">La meilleur note est de <b>${noteMax}/20</b></li>
                <li class="red">La moins bonne note est de <b>${noteMin}/20</b></li>
                <li class="gray">La moyenne des notes est de <b>${moyNotes}/20</b></li>
            </ul><hr>
`;
// myButton.addEventListener('click', () => {
//     let nom = document.querySelector('#nom').value;
//     let prenom = document.querySelector('#prenom').value;
//     const result = document.querySelector('#result')
//     result.textContent += nom+" "+prenom+" ";
// });

const result = document.querySelector(".result");
result.innerHTML = affichage;

// let nbrNoteSaisies = document.querySelectorAll('.nbrNotes');
// nbrNoteSaisies.innerHTML = `${nbNotes}`
// console.log(nbrNoteSaisies);

// let affichNote = document.querySelector('#listNote');

// function affichernbNotes(){
//     return nbNotes
// }

// console.log(affichernbNotes());

// for( let i = 1 ; i <= nbNotes; i++) {
//    let ultmp = `<ul>`;
//    ultmp += `<ul>`;

// }
