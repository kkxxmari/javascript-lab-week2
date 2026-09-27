// Exercise 3(a)
const taskList = ["Read the notes", "Practise JavaScript"];

// Exercise 3(b)
const addTask = task => {
    taskList.push(task);
    console.log("Added task: " + task);

    return taskList.length;
};

// Exercise 3(c)
const listAllTasks = () => {
    console.log("My tasks:");

    taskList.forEach(task => {
        console.log(task);
    });
};

// Exercise 3(d)
const deleteTask = task => {
    const position = taskList.indexOf(task);

    if (position !== -1) {
        taskList.splice(position, 1);
        console.log("Deleted task: " + task);
    } else {
        console.log("Task not found: " + task);
    }

    return taskList.length;
};

console.log("Tasks after adding: " + addTask("Finish the lab"));
listAllTasks();

console.log("Tasks after deleting: " + deleteTask("Read the notes"));
listAllTasks();
