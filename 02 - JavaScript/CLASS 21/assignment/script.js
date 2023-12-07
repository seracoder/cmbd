
// load from local storage if exists
const tasks = JSON.parse(localStorage.getItem('todos')) || [];

// get the task list element
task_ul = document.getElementById('task-list')


function refreshTasks() {
    task_ul.innerHTML = '<li style="font-weight: bold;">No tasks to show</li>';

    if (tasks.length > 0) {
        task_ul.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskDescription = task.isComplete ? `<s>${task.description}</s>` : task.description;
            const hr = index + 1 !== tasks.length ? '<hr>' : '';
            task_ul.innerHTML += `
            <li class="task-item">
                <p class="task">${taskDescription}</p>
                <div class="btn-set">
                    <button class="btn-edit btn-action" onclick="editTask(${index})">Edit</button>
                    <button class="btn-delete btn-action" onclick="deleteTask(${index})">Delete</button>
                    <button class="btn-mark-as-complete btn-action" onclick="completeTask(${index})">Complete</button>
                </div>
            </li>${hr}
        `;
        });
    }
    localStorage.setItem('todos', JSON.stringify(tasks));
}

refreshTasks()

function addTask() {
    const taskDescription = document.getElementById('taskInput').value
    if (taskDescription === '') {
        alert('Please enter a task description')
        return
    }
    // add task at 0th index
    tasks.unshift({
        description: taskDescription,
        isComplete: false
    })
    refreshTasks()
    document.getElementById('taskInput').value = ''
}


function editTask(index) {
    tasks[index].description = prompt('Edit your task.')
    tasks[index].isComplete = false
    refreshTasks()
}

function deleteTask(index) {
    tasks.splice(index, 1)
    refreshTasks()
}

function completeTask(index) {
    if (!tasks[index].isComplete) {
        const completedTask = tasks.splice(index, 1)[0]; // Remove the completed task from the array
        completedTask.isComplete = true;
        tasks.push(completedTask); // Push it to the end of the array
        refreshTasks();
    } else {
        alert('Task is already complete');
    }
}
