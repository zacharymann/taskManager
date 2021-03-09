// Displays Tasks
// Main screen
let taskMan = true;
// Displays Tasks
let tasks
// Adds Task
// let add
// // Removes Tasks
// let remove 
// // Closes Task Manager
// let close 
// // Stores user input
let response
// These are the task arrays
let allTasks = [
    "Charge Macbook",
    "Master Javascript"]

prompt(`TASK MANAGER 

What would you like to do? (Enter one of the options below)
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close the Task Manager`
);

if (answer == `CLOSE`) {
    alert(`Thank you for using the Task Manager`)
    break;
}
