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

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        // Generate HTML by adding each element of the array
        todoisHTML += `<div>${name}</div>
                        <div>${dueDate}</div>
                        <button class="delete-todo-button" onclick="
                        todolist.splice(${i}, 1);
                        renderTodoList();
                        ">Delete</button>
                        `;
    }
    console.log(todoisHTML);

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoisHTML;
}


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