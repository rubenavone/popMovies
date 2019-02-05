let films = [
    {
        titre: 'Shining',
        realisateur: 'stanley kubrick',
        nbEntree: 13000,
        synopsis: 'la mort evidement',
        dateSortie: '23/08/2002'
    },
    {
        titre: 'Orange Mecanique',
        realisateur: 'stanley kubrick',
        nbEntree: 9000,
        synopsis: 'la mort evidement mais a plusieur',
        dateSortie: '12/04/1992'
    },
    {
        titre: 'Halloween',
        realisateur: 'john carpenter',
        nbEntree: 18000,
        synopsis: 'la mort evidement avec un masque',
        dateSortie: '08/06/1998'
    },
    {
        titre: 'Shining',
        realisateur: 'stanley kubrick',
        nbEntree: 13000,
        synopsis: 'la mort evidement',
        dateSortie: '23/08/2002'
    },
    {
        titre: 'Halloween',
        realisateur: 'john carpenter',
        nbEntree: 18000,
        synopsis: 'la mort evidement avec un masque',
        dateSortie: '08/06/1998'
    },
    {
        titre: 'Shining',
        realisateur: 'stanley kubrick',
        nbEntree: 13000,
        synopsis: 'la mort evidement',
        dateSortie: '23/08/2002'
    }
];

//document.getElementById('js-film').innerHTML = '<h1> Film disponible</h1>';

films.forEach(element => {

    let filmSelection = document.getElementById('js-film');
       
        filmSelection.innerHTML += `<div><p> Titre du film: ${element.titre}</p>
                                <p>Réalisateur: ${element.realisateur}</p>
                                <p>Nombre d'entrée vendu: ${element.nbEntree}</p>                             
                                <p>Synopsis du film: ${element.synopsis}</p>
                                <p>Date de sortie: ${element.dateSortie}</p></div>`;
});                                                           

/* //for each avec l'ecriture ecmaScript
films.forEach(element => {

    let filmSelection = document.getElementById('js-film');

    let filmAffichage =  `<div> titre du film: ${element.titre}</div>
                          <div> Réalisateur: ${element.realisateur}</div>
                          <div> Nombre d'entrée vendu: ${element.nbEntree}</div>                                 
                          <div> Synopsis du film: ${element.synopsis}</div>
                          <div> Date de sortie: ${element.dateSortie}</div> </br>`;

    filmSelection.insertAdjacentHTML("beforeend" ,filmAffichage); 
                                
}); */

let title = document.querySelector("body");

//document.querySelector("header").insertAdjacentHTML("afterbegin", "<h1> Liste de film </h1>"); 


document.querySelector("footer").insertAdjacentHTML("beforeend" , '<footer> Copyright la france </footer>');

//Deux façon d'écrire//
console.log("hello world " + films[0].titre);
console.log(`hello World ${films[0].titre}`);