// Save the data in an array
const todolist = [{
    name: 'Task1',
    dueDate: '2024-11-30'}, 
    {
    name: 'Task2',
    dueDate: '2024-11-30'
    }];

renderTodoList();

function renderTodoList() {
    let todoisHTML = '';

    todolist.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        // Generate HTML by adding each element of the array
        todoisHTML += `<div>${name}</div>
                        <div>${dueDate}</div>
                        <button class="delete-todo-button" onclick="
                        todolist.splice(${index}, 1);
                        renderTodoList();
                        ">Delete</button>
                        `;
    });

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        // Generate HTML by adding each element of the array
        todoisHTML += `<div>${name}</div>
                        <div>${dueDate}</div>
                        <button class="delete-todo-button js-delete-todo-button">Delete</button>
                        `;
    }
    console.log(todoisHTML);

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoisHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todolist.splice(index, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value;

    // todolist.push({ name: name, dueDate: dueDate });
    todolist.push({ name, dueDate });
    console.log(todolist);
    inputElement.value = '';

    renderTodoList();
}