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
