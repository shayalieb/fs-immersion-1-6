let pokemonRepository = (function () { //Creating the array of objects
  let pokemonList = [
    {name: 'Metapod', type: 'Bug', height: 0.7}, 
    {name: 'Weedle', type: ['bug', 'Poison'], height: 0.3},
    {name: 'Fearow', type: ['flying', 'normal'], height: 1.2},
    {name: 'Pikachu', type: 'Electric', height: 0.4}
  ];
  
  function add(pokemon) { //creating the function to set the loop of if's (function is called pokemon)
    if ( 
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ){
      pokemonList.push(pokemon); //push pokemon list to the function
    } else { // if it not on the list it should log....
      console.log("pokemon is not on this list");
  }  
};
function getAll() { //should return all that is in the variable pokemonList
  return pokemonList;
}; 
function addListItem(pokemon){ 
  let pokemonList = document.querySelector(".pokemon-list"); //target the class pokemon-list in the HTML file
  let listItem = document.createElement("li"); //Creat a list itmes on the ul class pokemon-list 
  let button = document.createElement("button"); //create buttons out of the UL list
  addPokemonListener(button, pokemon);//calling the event listener function call addPokemon listener
  button.innerText = pokemon.name; // insert the pokemon names in the inner text of the button
  button.classList.add("button-class"); //link it to the button-class to target it in the CSS firl
  listItem.appendChild(button); //insert the li into the button on the webpage
  pokemonList.appendChild(listItem); //apply it to the web page
}
//creating this function to be used later on
function addPokemonListener (button, pokemon) {
  button.addEventListener('click', function(){
    showDetails(pokemon);
  })  
}

  
//Add show details function
function showDetails (pokemon) {
  console.log(pokemon.name);
}

return {
    add: add, //return the data of the added items
    getAll: getAll, //get all the items
    addListItem: addListItem //return the new list item
  };
})();

pokemonRepository.add({name: 'Shmais', height: 7, type: 'Redhead'}); //adding a new pokemon to the array

console.log(pokemonRepository.getAll()); //log the array with the new item

pokemonRepository.getAll().forEach(function(pokemon) {//Referencing the function 
  pokemonRepository.addListItem(pokemon);//calling the addListItem, and adding (pokemon) to call the function name
});

