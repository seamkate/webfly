let phonesButton = document.getElementById('phones_button');
let phonesButtonClose = document.querySelector('.phones__button');
let phonesModal = document.querySelector('.phones');

let mainNavButton = document.getElementById('main-nav-button');
let mainNav = document.querySelector('.main-nav');
let overlay = document.querySelector('.overlay');

let userLocation = document.querySelector('.user-location__item--add');
let locationModal = document.querySelector('.location');
let buttonClose =  document.querySelectorAll('.popup__close');
let locationCheckbox = document.getElementById('location-checkbox');

let cards = document.querySelectorAll('.card');
let product = document.querySelector('.product');
let popups = document.querySelectorAll ('.popup--center');

let infoButton = document.querySelector('.card__info');
let infoModal = document.querySelector('.card__dropdown');

phonesButton.addEventListener('click', function () {
  phonesModal.classList.toggle('visually-hidden');
});


phonesButtonClose.addEventListener('click', function () {
  phonesModal.classList.toggle('visually-hidden')
});


mainNavButton.addEventListener('click' , function (){
  mainNav.classList.toggle('visually-hidden');

  if (mainNavButton.classList.contains('header__nav-button--open')) {
    mainNavButton.classList.remove('header__nav-button--open');
    mainNavButton.classList.add('header__nav-button--close');
  } else {
    mainNavButton.classList.remove('header__nav-button--close');
    mainNavButton.classList.add('header__nav-button--open');
  }
});

userLocation.addEventListener('click' , function (){
  locationModal.classList.toggle('visually-hidden');
  overlay.classList.toggle('visually-hidden');
  document.body.style.position = 'fixed';
  locationCheckbox.checked = true;
});

// ButtonClose.addEventListener('click' , function () {
//   locationModal.classList.toggle('visually-hidden');
//   overlay.classList.toggle('visually-hidden');
//   document.body.style.position = 'static';
// });

buttonClose.forEach(function(button) {
  button.addEventListener('click' , function (){
    popups.forEach(function(popup) {
      popup.classList.add('visually-hidden')
    });
    overlay.classList.toggle('visually-hidden');
    // document.body.style.position = 'static';
  })
})


cards.forEach(function(card){
  card.addEventListener('click' , function (){
    product.classList.toggle('visually-hidden');
    overlay.classList.toggle('visually-hidden');
    // document.body.style.position = 'fixed';
  })
})

infoButton.addEventListener('click', function () {
  infoModal.classList.toggle('visually-hidden')
});