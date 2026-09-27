// a small list to start with
const taskList = ["Read the notes", "Practise JavaScript"];

// put a new task at the end of the list
const addTask = task => {
    taskList.push(task);
    console.log(task + " is now on my list");

    return taskList.length;
};

// show every task with its number
const listAllTasks = () => {
    console.log("Things I need to do:");

    taskList.forEach((task, position) => {
        console.log(position + 1 + ". " + task);
    });
};

// look for the task first and remove it if it is there
const deleteTask = task => {
    const position = taskList.indexOf(task);

    if (position === -1) {
        console.log("I could not find " + task);
        return taskList.length;
    }

    taskList.splice(position, 1);
    console.log(task + " is finished");

    return taskList.length;
};

console.log("Number of tasks: " + addTask("Finish the lab"));
listAllTasks();

console.log("Number of tasks: " + deleteTask("Read the notes"));
listAllTasks();
