// comment sélectionner les éléments
// getElementById
// getElementsByClassName
// getElementsByTagName

// comment ajouter des actions

// comment récupérer des informations sur les éléments

/*const btPokemon0 = document.querySelector("button:nth-child(2)");
btPokemon0.addEventListener("click", function (event) {
  alert(event.target.textContent);
  console.log(event);
});*/

const btPokemonList = document.querySelectorAll(".btPokemon");

function refreshName(event) {
  alert(event.target.textContent);
}

// appliquer une action au clic sur tous les buttons de btPokemonList
btPokemonList.forEach((btPokemon) => {
  btPokemon.addEventListener("click", refreshName);
});

// click sur le bouton
document
  .querySelector(".form-create-pokemon")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // créer un bouton
    const newButton = document.createElement("button");
    newButton.type = "button";

    // ajouter pokemonName en contenu
    const pokemonName = document.getElementById("pokemon-name").value;
    newButton.textContent = `-New- ${pokemonName}`;

    newButton.addEventListener("click", refreshName);

    // ajoute le bouton à ma liste de pokémon
    const pokemonList = document.querySelector(".pokemon-list");
    pokemonList.append(newButton);
  });

// faire un log du contenu du champ de formulaire
