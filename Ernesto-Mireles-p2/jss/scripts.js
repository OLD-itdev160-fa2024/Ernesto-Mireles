document.addEventListener('DOMContentLoaded', function () {
    const tasks = ['Do Homework', 'Pick The Kids Up'];

        function getReferences() {
        return {
            taskInput: document.getElementById('taskInput'),
            addBtn: document.getElementById('addBtn'),
            taskList: document.getElementById('taskList'),
        };
    }

    function addTask(taskText) {
        const taskItem = createTaskItem(taskText);

        taskItem.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });

        createDeleteButton(taskItem);

        references.taskList.appendChild(taskItem);
    }

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        return taskItem;
    }

    function createDeleteButton(taskItem) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
    }
    function displayExistingTasks() {
        for (let i = 0; i < tasks.length; i++) {
            addTask(tasks[i]);
        }
    }

    const references = getReferences();

    references.addBtn.addEventListener('click', handleAddTask);

    displayExistingTasks();

    function handleAddTask() {
        const taskText = references.taskInput.value.trim();

        if (taskText !== '') {
            tasks.push(taskText); 
            addTask(taskText);
            references.taskInput.value = '';
        }
    }
});