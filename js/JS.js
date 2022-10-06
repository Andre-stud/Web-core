
var removePad = document.querySelectorAll('.remove-pad');
var removeDesctop = document.querySelectorAll('.remove-desctop');
var button = document.querySelector('.button-next-read');
var icon = document.querySelector('.next-read-icon');
var text = document.querySelector('.next-read-text');

button.onclick = function() {
  icon.classList.toggle('rotate');
  text.classList.toggle('clicked');
  text.classList.toggle('next-read-text');
};

button.addEventListener('click', function () {
  for (let i = 0; i < removePad.length; i++) {
      removePad[i].classList.toggle('remove-pad');
  }
  for (let i = 0; i < removeDesctop.length; i++) {
    removeDesctop[i].classList.toggle('remove-desctop');
  }
});


