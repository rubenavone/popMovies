


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
        entree: 1600,
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
        entree: 1200,
        sortie: "24 octobre 1823"
      },
         //objet4//
     {
        titre: "Avatar",
        realisateur: "James Cameron",
        synopsis: "la folie évidement 4",
        entree: 800,
        sortie: "22 janvier 2006"
    },
         //objet5//
      {
        titre: "le huitieme jour",
        realisateur: "je sais pas ",
        synopsis: "la folie évidement 3",
        entree: 2500,
        sortie: "24 octobre 1823"
      },
         //objet6//
      {
        titre: "Orange mecanique",
        realisateur: "kubrick",
        synopsis: "la folie évidement 3",
        entree: 200,
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
let filmFilter = listeFilm.filter(listeFilm => listeFilm.entree > 1500);

console.log(filmFilter);



//On utilise la méthode reducer//
console.log("reducer en action !");

const reducer = (accumulator, listeFilm) => accumulator + listeFilm.entree;

let nombreEntreeTotale = listeFilm.reduce(reducer, 0)

console.log(`${nombreEntreeTotale} tickets vendu en tout`);

//Autre façon de faire le reducer//
//Et ajout Du filtre ensemble//

let nombreEntree = filmFilter.reduce(function (acc, obj) { return acc + obj.entree; }, 0); // 7

console.log(`${nombreEntree} tickets vendu (filtre pour les film ayant vendu plus de 1500 place seulement)`);