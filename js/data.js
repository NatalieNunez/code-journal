/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $form = document.querySelector('form');
var $photo = document.querySelector('img');

function handleSubmit(event) {
  event.preventDefault();
  var values;
  values = event.target.elements;
  // console.log('entries', entries);

  var array = [];
  for (var i = 0; i < 3; i++) {
    array.push([values[i].name, values[i].value]);
    // console.log('array:', array);
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
  // console.log('object value:', object);
  // console.log(data);

  // var jsonStr = JSON.stringify(object);
  // localStorage.setItem('entries', jsonStr);
  // console.log('object', object);
}

$form.addEventListener('submit', handleSubmit);
