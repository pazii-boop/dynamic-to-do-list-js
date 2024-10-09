document.addEventListener("DOMContentLoaded", function () {
  // Step 2: Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 3: Define the addTask function
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Step 4: Check if taskText is empty and alert if needed
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Step 5: Create a new li element and set its text content
    const li = document.createElement("li");
    li.textContent = taskText;

    // Step 6: Create a new remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Step 7: Assign an onclick event to the remove button
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Step 8: Append the li element to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Step 9: Add event listener to the "Add Task" button
  addButton.addEventListener("click", function () {
    addTask();
  });

  // Step 10: Add event listener to task input for pressing "Enter"
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 2: Load tasks from Local Storage when the page loads
  function loadTasks() {
    // Get stored tasks from Local Storage, or default to an empty array if none are found
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    // Iterate over each stored task and add it to the task list
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Step 3: Function to add a new task
  function addTask(taskText, save = true) {
    // Retrieve and trim the input value if not provided
    if (taskText === undefined) {
      taskText = taskInput.value.trim();
    }

    // Check if the task text is empty and alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li) for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for each task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task from the list and update Local Storage
    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeTaskFromLocalStorage(taskText);
    };

    // Append the remove button to the task item
    li.appendChild(removeButton);

    // Append the task item to the task list
    taskList.appendChild(li);

    // Step 4: Save the task to Local Storage if save is true
    if (save) {
      saveTaskToLocalStorage(taskText);
    }

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Step 5: Function to save a task to Local Storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Step 6: Function to remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText); // Remove the task from the array
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); // Update Local Storage
  }

  // Step 7: Add event listener to the "Add Task" button
  addButton.addEventListener("click", function () {
    addTask();
  });

  // Step 8: Add event listener to allow adding tasks using the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Step 9: Load tasks from Local Storage when the page is loaded
  loadTasks();
});
//done steps
