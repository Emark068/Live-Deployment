// Load tasks when page opens
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task
function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        createTaskElement(taskValue);
        saveTaskLocal(taskValue);
        taskInput.value = "";
    }
}

// Create task element
function createTaskElement(taskText) {
    let li = document.createElement("li");
    li.textContent = taskText;

    // Toggle complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // prevent toggle when deleting
        li.remove();
        removeTaskLocal(taskText);
    });

    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);
}

// Save to Local Storage
function saveTaskLocal(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from Local Storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task);
    });
}

// Remove from Local Storage
function removeTaskLocal(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(t => t !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}