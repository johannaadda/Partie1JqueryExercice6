
$(function (){
  // On ajoute l'evenement mouseover à notre element ID "img1 pour qu au passage de la souris l'evenement puisse se produire
  $('#img1').mouseover(function(){
    // Au moment ou j active cet evenement .mouseover , refaire un tag element Id Img1 en css (.css) afin que l'image s'agrandit  + 60px au passage de la souris'
    $('#img1').css('width', '+=60px');
  })
});
