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

var $entryForm = document.getElementById('entry-form');
var $viewEntries = document.querySelector('.hidden');
var $entryLink = document.querySelector('.view-entry-link');
var $homeLink = document.querySelector('.home');
var $entryView = document.getElementById('view-entries');

var entryHeaderDiv = document.createElement('div');
entryHeaderDiv.className = 'row';
var entriesHeader = document.createElement('h1');
entriesHeader.textContent = 'Entries';
entriesHeader.className = 'column-full';
var newButton = document.createElement('button');
newButton.textContent = 'New';
newButton.className = 'new-btn';
entryHeaderDiv.appendChild(entriesHeader);
entryHeaderDiv.appendChild(newButton);

function handleClick(event) {
  if (event.target === $entryLink) {
    $viewEntries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  }
  if (event.target === $homeLink || event.target === newButton || event.target.classList.contains('fa-pen')) {
    $viewEntries.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
  // if (event.target.classList.contains('fa-pen')) {
  //   console.log('idClicked:', event.target.dataset.entryId);
  //   console.log('dataset type:', typeof Number(event.target.dataset.entryId));
  //   console.log('entry id type', typeof data.entries[2].entryId);
  //   console.log(data.entries);
  //   console.log('data.editing:', data.editing);
  //   for (let i = 0; i < data.entries; i++) {
  //     if (data.entries[i].entryId === Number(event.target.dataset.entryId)) {
  //       console.log(data.entries);
  //     }
  //   }
  // }
}

// function testClick(event) {
//   if (!event.target.classList.contains('fa-pen')) {
//     return;
//   }
//   data.editing = true;
//   console.log(data.editing);
//   // debugger;
//   // console.log(typeof event.target.dataset.entryId);
//   // // console.log('dataset type:', typeof Number(event.target.dataset.entryId));
//   // console.log('entry id type', typeof data.entries[2].entryId);
//   var idNumber = Number(event.target.dataset.entryId);
//   // data.editing = data.entries[idNumber];
//   // console.log(data.entries);
//   // console.log('data.editing:', data.editing);
//   for (var i = 0; i < data.entries; i++) {
//     data.editing = data.entries[i][idNumber];
//   }
//   // }
// }

// $entryView.addEventListener('click', testClick);

$entryLink.addEventListener('click', handleClick);
$homeLink.addEventListener('click', handleClick);
newButton.addEventListener('click', handleClick);
// $entryView.addEventListener('click', handleClick);

function renderEntry(entry) {
  var $div = document.createElement('div');
  $div.setAttribute('class', 'row entry-block');

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
  var $editIcon = document.createElement('i');
  $editIcon.className = 'fas fa-pen';
  $titleNode.appendChild($titleText);

  var $notesNode = document.createElement('h4');
  var $notesText = document.createTextNode(entry.notes);
  $notesNode.appendChild($notesText);

  $li1.appendChild($titleNode);
  $titleNode.appendChild($editIcon);
  $li2.appendChild($notesNode);

  $div.setAttribute('data-entry-id', entry.entryId);
  $editIcon.setAttribute('data-entry-id', entry.entryId);
  return $div;
}

function renderAllEntries(entries) {
  for (var i = 0; i < entries.length; i++) {
    var object = renderEntry(entries[i]);
    $entryView.appendChild(object);
  }
  $entryView.prepend(entryHeaderDiv);
}

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

  data.nextEntryId++;

  data.entries.unshift(valuesObject);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  $viewEntries.classList.remove('hidden');
  $entryForm.classList.add('hidden');
  $entryView.prepend(renderEntry(valuesObject));
  $entryView.prepend(entryHeaderDiv);
}

$form.addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', function (event) {
  renderAllEntries(data.entries);
});
