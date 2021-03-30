/* global data */
/* exported data */
var $photoUrl = document.querySelector('#imageUrl');
var $photo = document.querySelector('img');
var $form = document.querySelector('form');

function handleInput(event) {
  var userImageUrl = event.target.value;
  $photo.setAttribute('src', userImageUrl);
}

$photoUrl.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();
  var entries;
  entries = event.target.elements;
  // console.log('entries', entries);

  var array = [];
  for (var i = 0; i < 3; i++) {
    array.push([entries[i].name, entries[i].value]);
    // console.log('array:', array);
  }

  var object = {};
  for (var k = 0; k < array.length; k++) {
    object[array[k][0]] = array[k][1];
  }
  // console.log('object', object);
}

$form.addEventListener('submit', handleSubmit);
