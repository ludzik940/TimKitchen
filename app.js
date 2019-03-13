
const opis = document.querySelectorAll(".opis");
const ikonka = document.querySelectorAll('.ikonka');

 ikonka.forEach((icon, index) => {
   const op = opis[index];
   icon.addEventListener('mouseenter', () => {
     icon.style.display = "none";
     op.style.display = "block";
   });
   op.addEventListener('mouseleave', () =>{
     icon.style.display = "block";
     op.style.display = "none";
   });
});


window.onload=function(){
  document.getElementById('burger').addEventListener('click', function(){
    document.getElementById('burgerPage').classList.add('showBurgerMenu');
    document.getElementById('goBack').style.display = "block";
    document.querySelector('.flexBurger'). style.display ="block";
  });

  document.getElementById('goBack').addEventListener('click', function(){
    document.getElementById('burgerPage').classList.remove('showBurgerMenu');
    document.getElementById('burgerPage').style.transition ="2s";
    document.getElementById('goBack').style.display = "none";
    document.querySelector('.flexBurger'). style.display ="none";
  });


  document.getElementById('location').addEventListener('click', function(){
    document.getElementById('locationPage').classList.add('showLocation');
    document.getElementById('arrowDown').style.display = "block";
  });

  document.getElementById('arrowDown').addEventListener('click', function(){
    document.getElementById('locationPage').classList.remove('showLocation');
    document.getElementById('arrowDown').style.display = "none";
  });

  document.getElementById('team').addEventListener('click', function(){
    document.getElementById('teamPage').classList.add('showTeam');
    document.getElementById('arrowRight').style.display = "block"; 
  });


  document.getElementById('arrowRight').addEventListener('click', function(){
    document.getElementById('teamPage').classList.remove('showTeam');
  document.getElementById('arrwRight').style.display = "none";
  });

  document.getElementById('menu').addEventListener('click', function(){
    document.getElementById('dishes').classList.add('showMenu');
    document.getElementById('arrowUp').style.display = "block"; 
  });

  document.getElementById('arrowUp').addEventListener('click', function(){
    document.getElementById('dishes').style.display = "none";
    document.getElementById('arrowUp').style.display = "none"; 
  });



}