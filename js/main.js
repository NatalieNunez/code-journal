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
  var values;
  values = event.target.elements;

  var array = [];
  for (var i = 0; i < 3; i++) {
    array.push([values[i].name, values[i].value]);
  }

  var object = {};
  for (var k = 0; k < array.length; k++) {
    object[array[k][0]] = array[k][1];
  }

  for (var key in data) {
    if (key === 'nextEntryId') {
      object[key] = data[key];
    }
  }

  data.nextEntryId = data.nextEntryId + 1;
  data.entries.unshift(object);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

$form.addEventListener('submit', handleSubmit);
