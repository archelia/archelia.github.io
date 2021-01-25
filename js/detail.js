const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const pokemonId = urlParams.get('id')

var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId

async function fetchPokemon() {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function render(data) {
  let pokemonNo = ('00' + pokemonId).slice(-3)
  const img = $('<img class="image-detail" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ pokemonNo +'.png" alt='+ data.name +'>');
  $(".box-content").append(img)
  $(".box-content").append('<span class="pokemon-name">#'+ pokemonId + ' ' + data.name+'</span')

  // load sprites
  if(data.sprites.front_default.length > 0) {
    $(".pokemon-sprite").append('<div class="small-sprite"><img src='+ data.sprites.front_default + '></div> ')
  }
  if(data.sprites.back_default.length > 0) {
    $(".pokemon-sprite").append('<div class="small-sprite"><img src='+ data.sprites.back_default + '></div> ')
  }
  if(data.sprites.front_shiny.length > 0) {
    $(".pokemon-sprite").append('<div class="small-sprite"><img src='+ data.sprites.front_shiny + '></div> ')
  }

  // load type
  const types = data.types
  types.forEach(function(type) {
    $(".pokemon-type").append('<span class="type-label '+ type.type.name +'">'+ type.type.name +'</span>')
  })

  //load stats
  const stats = data.stats
  stats.forEach(function(stat) {
    $(".status-list").append('<li><span class="stat-name">'+ stat.stat.name + '</span><span><strong> : '+ stat.base_stat +'</strong></span></li>')
  })
}

function loadData() {
  fetchPokemon().then(result => {
    render(result)
  })
}

$(function(){
  loadData()
})
