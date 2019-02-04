console.log('HelloWorld');




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

//Affichage avec un forEach//
listeFilm.forEach(element => {
    console.log(element.titre);
    console.log(element.realisateur);
    console.log(element.synopsis);
    console.log(element.entree);
    console.log(element.sortie);
});


//Affichage sans le for each//
console.log(listeFilm[0].titre);