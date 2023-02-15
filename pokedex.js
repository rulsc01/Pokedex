const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeWei = data.weight;
            pokeweight(pokeWei);
            console.log(pokeWei);

            let pokeHei = data.height;
            pokeHeight(pokeHei);
            console.log(pokeHei);

            let pokeNam = data.name;
            pokeNames(pokeNam);
            console.log(pokeNam);

            let pokeId = data.id;
            pokeIdd(pokeId);
            console.log(pokeId);

        }
    });
}
const pokeweight = (url) => {
    document.getElementById("id").innerHTML=url ;
}
const pokeIdd = (url) => {
    document.getElementById("weight").innerHTML=url ;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeHeight = (url) => {
    document.getElementById("altura").innerHTML=url ;
}
const pokeNames = (url) => {
    document.getElementById("name").innerHTML=url ;
}


