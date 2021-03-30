/* global data */
/* exported data */
var $photoUrl = document.querySelector('#imageUrl');
var $photo = document.querySelector('img');
// console.log('$photoUrl', $photoUrl);
// console.log('$photo', $photo);

function inputChange(event) {
  var userImageUrl = event.target.value;
  // console.log('value', event.target.value);
  $photo.setAttribute('src', userImageUrl);
}

$photoUrl.addEventListener('input', inputChange);
// create a variable to store dom object of photoUrl input
// when input event fires, change src attribute of img element to
// the text in the input field
