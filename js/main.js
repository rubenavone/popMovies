


let titre = "un titre";
let realisateur = " le réalisateur";
let synopsis = "le synopsis";
let entree = "nombre d'entrée";
let sortie = "15/07/1912";

//Objet//
let film = {
    titre: "un titre",
    realisateur: "le réal",
    synopsis: "le synopsis",
    entree: "nombre d'entrée vendu",
    sortie: "15/07/1912"
  };

//Version tableau//
let filmTab = [
    titre = "un titre",
    realisateur = "le réal",
    synopsis = "le synopsis",
    entree = "nombre d'entrée vendu",
    sortie = "15/07/1912"
];

//Un tableau d'objet, les objets etant des films//
let listeFilm = [
    //objet1//
       {
        titre: "shining",
        realisateur: "stanley kubrick",
        synopsis: "La folie évidement",
        entree: 700000,
        sortie: "21 juin 1987"
      },
      //objet2//
      {
        titre: "Cloud atlas",
        realisateur: "jean-jaques",
        synopsis: "la folie évidement 2",
        entree: 12,
        sortie: "5 juillet 1623"
      },
      //objet3//
      {
        titre: "Orange mecanique",
        realisateur: "kubrick",
        synopsis: "la folie évidement 3",
        entree: 65,
        sortie: "24 octobre 1823"
      }
    
];

//for classique//
console.log("Affichage for classique \n");
for (let i = 0; i < listeFilm.length; i++) {
    const element = listeFilm[i];
    console.log(`${element.titre}`);
} 

//for in//
console.log("Affichage en FOR IN");
for (const index in listeFilm) {
    if (listeFilm.hasOwnProperty(index)) {
        const element = listeFilm[index];
        console.log(element.titre + "\n");
    }
}

//Affichage avec un forEach//
listeFilm.forEach(element => {
    console.log(`${element.titre}`);
    console.log(`le réalisateur est ${element.realisateur}`);
    console.log(`Le synopsis de votre film:\n ${element.synopsis}`);
    console.log(`Les vente du film: \n ${element.entree}`);
    console.log(`La date de sortie est: ${element.sortie} \n`);
});


//Affichage sans le for each//
console.log(`Affichage sans le forEach`);
console.log(listeFilm[0].titre); 

//ci dessous on filtre//
let filmFilter = listeFilm.filter(listeFilm => listeFilm.entree > 234);

console.log(filmFilter);

