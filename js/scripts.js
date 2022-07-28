//This object variable will contain the Pokemon "name", "height", and type

//start the IIFE fucntion
let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Metapod', type: 'Bug', height: 0.7}, 
    {name: 'Weedle', type: ['bug', 'Poison'], height: 0.3},
    {name: 'Fearow', type: ['flying', 'normal'], height: 1.2},
    {name: 'Pikachu', type: 'Electric', height: 0.4}
  ];
  
  function add(pokemon) {//a function to add the new object
    if (
      typeof pokemon === 'object' && 
      'name' in pokemon &&
      'height' in pokemon &&
      'type' in pokemon 
    ) {
    pokemonList.push(pokemon);
  } else {
    console.log('This is not a correct pokemon');
  }
}
function getAll() {//to return the object anbd keys
    return pokemonList;
  }
  //Configuring ways to create the new functions, while connecting to the HTML class=".pokemon-list", as well as creating the list items (li), and buttons 
  //with button text and assigning a class to the buttons, and adding the names to the button text.
function addListItem() {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li"); 
  let pokemonButton = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  pokemonList.appendChild(button);
}

  return {//return the new object
    add: add,
    getAll: getAll
  };
})();

//end the IIFE function

//forEach is a pre defined function in JS. item => followed by a {} which indicates to start the function
pokemonRepository.getAll().forEach(item => {  
  if (item.height > 0 && item.height < 0.4) {
      document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a small Pokepmon!)</h1>') 
  } else if (item.height > 0.3 && item.height < 0.7) {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a medium sized Pokemon!)</h1>') 
  } else {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a large pokemon!)</h1>') 
  }
})

//This is how we would add the new item
pokemonRepository.add({ name: 'Shmais', height: 7, type: ['Redhead']});//adding the new object
console.log(pokemonRepository.getAll());//retrieve the new object

//Execute the function to apply it to what was configured above
pokemonRepository.getAll().forEach() 
pokemonRepository.addListItem(pokemon);
pokemonRepository.appendChild

