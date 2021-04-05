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

var $entryForm = document.getElementById('entry-form');
var $viewEntries = document.querySelector('.hidden');
var $entryLink = document.querySelector('.view-entry-link');
var $homeLink = document.querySelector('.home');

function handleClick(event) {
  if (event.target === $entryLink) {
    $viewEntries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  }
  if (event.target === $homeLink) {
    $viewEntries.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
}

$entryLink.addEventListener('click', handleClick);
$homeLink.addEventListener('click', handleClick);

var $entryView = document.getElementById('view-entries');

// render 1 entry
function renderEntry(entry) {
  var $div = document.createElement('div');
  $div.setAttribute('class', 'row entry-block');
  // $entryView.appendChild($div); // do i need

  var $img = document.createElement('img');
  $img.setAttribute('class', 'column-half');
  $img.setAttribute('src', entry.imageUrl);
  $div.appendChild($img);

  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'column-half');
  $div.appendChild($ul);

  var $li1 = document.createElement('li');
  var $li2 = document.createElement('li');

  $ul.appendChild($li1);
  $ul.appendChild($li2);

  var $titleNode = document.createElement('h1');
  var $titleText = document.createTextNode(entry.title);
  $titleNode.appendChild($titleText);

  var $notesNode = document.createElement('h4');
  var $notesText = document.createTextNode(entry.notes);
  $notesNode.appendChild($notesText);

  $li1.appendChild($titleNode);
  $li2.appendChild($notesNode);

  return $div;
}

// this function receives an array of objects and appends to dom each individual entry.
function renderAllEntries(entries) {
  for (var i = 0; i < entries.length; i++) {
    var object = renderEntry(entries[i]);
    $entryView.appendChild(object);
  }
}

// this function is ran after save is clicked - adds entry to front of data.entries
function handleSubmit(event) {
  event.preventDefault();

  var $title = document.getElementById('title');
  var $imageUrl = document.getElementById('imageUrl');
  var $notes = document.getElementById('notes');
  var secondChild = $entryView.children[1];

  valuesObject = {
    title: $title.value,
    imageUrl: $imageUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;

  data.entries.unshift(valuesObject);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  $viewEntries.classList.remove('hidden');
  $entryForm.classList.add('hidden');
  $entryView.insertBefore(renderEntry(valuesObject), secondChild);
}

$form.addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', renderAllEntries(data.entries));
