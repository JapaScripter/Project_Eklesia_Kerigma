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

function closeMenuOnOutsideClick(event) {
  var header = document.querySelector('header');
  var divElement = document.getElementById('lsm');
  var menuList = document.getElementById('lsm');

  if (menuList.style.display === 'block' && !header.contains(event.target) && !divElement.contains(event.target)) {
    menuList.style.display = 'none';
  }
}

function toggleMenu(){
  var menuList = document.getElementById('lsm');
  if (menuList.style.display ==='none' || menuList.style.display ===''){
  menuList.style.display ='flex';}
  else {
    menuList.style.display ='none';
  }
}

function close() {
  var menuList = document.getElementById('lsm');
  menuList.style.display = 'none';
}

