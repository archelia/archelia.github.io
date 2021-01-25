var data = {
  page: 1,
  limit: 20,
  offset: 0
}

var url = "https://pokeapi.co/api/v2/pokemon?offset="+data.offset+"&limit="+data.limit

async function fetchPokemon() {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

function render(datas) {
  datas.forEach(function(data) {
    let pokemonId = data.url.split('pokemon/')[1].split('/')[0]
    let pokemonNo = ('00' + pokemonId).slice(-3)
    const img = $('<div class="box"><div class="box-content"><a href="/pokemon-detail.html?id='+pokemonId+'" class="nav-block"><img class="images" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ pokemonNo +'.png" alt='+ data.name +'><span class="pokemon-name">#'+ pokemonId + ' ' + data.name +'</span></a></div></div>');
    $(".content").append(img);
  })
}

function loadData() {
  fetchPokemon().then(result => {
    render(result)
    data.page += 1
    data.offset = (data.page-1)*data.limit
    updateUrl()
  })
}

function updateUrl() {
  url = "https://pokeapi.co/api/v2/pokemon?offset="+data.offset+"&limit="+data.limit
}

$(function(){
  loadData()
})

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    loadData()
  }
});