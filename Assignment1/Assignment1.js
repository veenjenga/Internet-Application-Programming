document.addEventListener("DOMContentLoaded", function () {
  // Query for the submit button and input task field once in the beginning
  const submit = document.querySelector("#submit");
  const newTask = document.querySelector("#newTask");

  // Disable the submit button by default
  submit.disabled = true;

  // Listen for input to be typed into the input field
  newTask.addEventListener("input", function () {
    // Enable/disable the submit button based on the input field's value
    submit.disabled = !this.value.trim();
  });

  // Listen for submission of form
  const form = document.querySelector("#taskForm");
  form.addEventListener("submit", function (event) {
    // Prevent the default submission of the form
    event.preventDefault();

    // Find the task the user just submitted
    const task = newTask.value.trim();

    // Create a list item for the new task and add the task to it
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Add new element to our unordered list
    const taskList = document.querySelector("#taskList");
    taskList.appendChild(listItem);

    // Clear the input field
    newTask.value = "";

    // Disable the submit button again
    submit.disabled = true;
  });
});
