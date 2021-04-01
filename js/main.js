/* global data */
/* exported data */
var $photoUrl = document.querySelector('#imageUrl');
var $photo = document.querySelector('img');
var $form = document.querySelector('form');
var valuesObject = {};

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
  var $entryForm = document.getElementById('entry-form');
  var $viewEntries = document.querySelector('.hidden');

  valuesObject = {
    title: $title.value,
    imageUrl: $imageUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId = data.nextEntryId + 1;

  data.entries.unshift(valuesObject);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  $viewEntries.removeAttribute('class');
  $entryForm.setAttribute('class', 'hidden');
}

$form.addEventListener('submit', handleSubmit);

function DOMContentLoaded(entry) {
  var $div = document.createElement('div');
  $div.setAttribute('class', 'row entry-block');
  $parent.appendChild($div);

  var $img = document.createElement('img');
  $img.setAttribute('class', 'column-half');
  $img.setAttribute('src', data.entries[i].imageUrl);
  $div.appendChild($img);

  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'column-half');
  $div.appendChild($ul);

  var $li1 = document.createElement('li');
  var $li2 = document.createElement('li');

  $ul.appendChild($li1);
  $ul.appendChild($li2);

  var $titleNode = document.createElement('h1');
  var $titleText = document.createTextNode(data.entries[i].title);
  $titleNode.appendChild($titleText);

  var $notesNode = document.createElement('h4');
  var $notesText = document.createTextNode(data.entries[i].notes);
  $notesNode.appendChild($notesText);

  $li1.appendChild($titleNode);
  $li2.appendChild($notesNode);
  return $div;
}

var $parent = document.getElementById('view-entries');

for (var i = 0; i < data.entries.length; i++) {
  var object = DOMContentLoaded(valuesObject);
  $parent.appendChild(object);
}

window.addEventListener('DOMContentLoaded', DOMContentLoaded);
