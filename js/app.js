if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

function getPokemonId(str) {
  str = str.split('pokemon/')[1];
  return str.split('/')[0]
}

$(function(){
  var data = {
      page: 1,
      limit: 20,
      offset: 0
  };

  var obj = $(document).loadMore({
      url: "https://pokeapi.co/api/v2/pokemon?offset="+offset+"&limit="+limit,
      dataType: 'json',

      success: function (res) {
          data.page += 1;
          data.offset = data.page * limit;
          render(res.results);
      }
  });

  function render(data) {
      $.each(data, function (value) {
        const pokemonId = getPokemonId(data.url)
        var img = $('<div class="box"><a href=""<img class="images" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+ pokemonId +'.png'+ value +'" alt='+ value.name +'></a></div>');
        $(".content").append(img);
      });
  }

  function
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("bottom!");
  }
});