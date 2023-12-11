/*|Header Scroll Button|*/
var botaoHome = document.getElementById('botaoHome');
var heroi = document.getElementById('heroi')

botaoHome.addEventListener('click', function() {
  setTimeout(function() {
    heroi.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});


var botaosobre = document.getElementById('botaoSobre');
var secaosobre = document.getElementById('sobre')

botaosobre.addEventListener('click', function() {
  setTimeout(function() {
    secaosobre.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});


var botaoContato = document.getElementById('botaoContato');
var contato = document.getElementById('contato')

botaoContato.addEventListener('click', function() {
  setTimeout(function() {
    contato.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});
/*|Header Scroll Button|*/