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

  var $title = document.getElementById('title');
  var $imageUrl = document.getElementById('imageUrl');
  var $notes = document.getElementById('notes');

  var valuesObject = {
    title: $title.value,
    imageUrl: $imageUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId = data.nextEntryId + 1;

  data.entries.unshift(valuesObject);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

$form.addEventListener('submit', handleSubmit);

var $parent = event.target.dataset.view;

function DOMContentLoaded(entry) {
  var $div = document.createElement('div');
  $div.setAttribute('class', 'row entry-block');
  $parent.appendChild($div);

  var $img = document.createElement('img');
  $img.setAttribute('class', 'column-half');
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $div.appendChild($img);

  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'column-half');
  $div.appendChild($ul);

  var $li1 = document.createElement('li');
  var $li2 = document.createElement('li');

  $ul.appendChild($li1, $li2);

  var $h1 = document.createElement('h1');
  var $h4 = document.createElement('h4');

  $li1.appendChild($h1);
  $li2.appendChild($h4);

  return $parent;
}

$parent.addEventListener('DOMContentLoaded', DOMContentLoaded);
