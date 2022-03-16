const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

  fetch(url).then((res) => {
    if(res.status != "200"){
      pokeImage("./assets/images/notFound.png");
    }
    return res.json();

  }).then((data) => {
    let pokeImg = data.sprites.front_default;
    pokeImage(pokeImg);
  })
}

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
}
