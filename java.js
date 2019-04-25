let tasks = [
  'Выучить JavaScript',
  'Выучить Angular',
  'Сходить на курсы'
]

let ul = document.querySelector('.list-group');
let deleteBtns = document.getElementsByClassName('delete-item');
let clearBtn = document.querySelector('.clear-btn')
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let alertSucces = document.createElement('div');
alertSucces.className = 'alert alert-success ml-3 mr-3';
alertSucces.roleName = 'alert';
alertSucces.textContent = 'Succes';
let cardBody = document.querySelector('.card');

function generateList(tasksArray) {
  clearList();
  for (var i = 0; i < tasksArray.length; i++) {
    let li = listTemplate(tasksArray[i]);
    ul.appendChild(li);
  }
}

function listTemplate(task) {
  // Create list item
  let li = document.createElement('li')
  li.textContent = task;
  li.className = 'list-group-item d-flex align-items-center';
  // Create tag i fas fa-trash-alert
  let iDelete = document.createElement('i')
  iDelete.className = 'fas fa-trash-alt delete-item ml-auto';

  li.appendChild(iDelete);


  return li;
}

function clearList() {
  ul.innerHTML = '';
}

function addList(list) {
  tasks.unshift(list);
  ul.insertAdjacentElement('afterbegin', listTemplate(list));
}



function deleteListItem(target){
  let parent = target.closest('li');
  let index = tasks.indexOf(parent.textContent);
  tasks.splice(index, 1);
  parent.remove();
}

ul.addEventListener('click', function (e){
  if ( e.target.classList.contains('delete-item')){
    deleteListItem(e.target);
  }
});

clearBtn.addEventListener('click', function (e){
  clearList();
});


form.addEventListener('submit', function (e){
  e.preventDefault();

  if ( !inputText.value ) {
    inputText.classList.add('is-invalid');
  } else {
    inputText.classList.remove('is-invalid');
    cardBody.appendChild(alertSucces);
    addList(inputText.value);
    form.reset();
  }

});

inputText.addEventListener('keyup', function (e){
  if ( inputText.value) {
    inputText.classList.remove('is-invalid');
    alertSucces.remove();

  }
})


generateList(tasks);
console.log(cardBody);
