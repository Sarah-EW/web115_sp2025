//1. task mamanger web app using html css and js
    //funcitonality, user experience, clean code implimentation

//2. The application must allow users to create, modify, and delete tasks dynamically.
    //Tasks must be displayed in a dedicated section of the webpage using JavaScript.


//task display set up
//date updated
let taskListUpdate = document.createElement("p");
let taskListUpdateText = document.createTextNode("date updated " + new Date());
taskListUpdate.appendChild(taskListUpdateText);
let taskListDiv = document.getElementById("taskmanager");
taskListDiv.appendChild(taskListUpdate);

//task list output area
let taskListArea = document.createElement("p");
taskListDiv.appendChild(taskListArea);

//taskcard
///let taskCard = document.createElement("p");
///taskCard.id = "taskCard";
///taskCard.className="sectioncard";
 


//CREATE THE TASK OBJECTS AND TASK LIST

let listOfTasks = [];
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let values = getValues();
    let id = 0;
    listOfTasks.push(new taskEntry(id, values.task, values.priority, values.important, values.completed));
    console.log("task list", JSON.stringify(listOfTasks));
    id++;
    displayTasks();   
    taskForm.reset();
});

//function constuctor to make a task object
function taskEntry(id, task, priority, important, completed = "no") {
    this.id = id;
    this.task = task;
    this.priority = priority;
    this.important = important; //red
    this.taskEntryDate = new Date();
    this.completed = completed;//strikethrough

};
//get values from form
function getValues() {

    return {
        task: document.getElementById("task").value,
        priority: document.getElementById("priority").value,
        important: document.getElementById("important").value,
        completed: document.getElementById("completed").value
    };
   
};

//sorting buttons

//button to sort by date entered
document.getElementById("dateSort").addEventListener("click", function() {
    listOfTasks.sort((a,b) => a.taskEntryDate - b.taskEntryDate);
    console.log("date sort: " + JSON.stringify(listOfTasks));
    displayTasks();
});

//sort by important
let importantOrder = {
    "yes":1,
    "no":2
};
document.getElementById("importantSort").addEventListener("click", function() {
    listOfTasks.sort((a,b) => importantOrder[a.important] - importantOrder[b.important]);
    console.log("important sort: " + JSON.stringify(listOfTasks))
    displayTasks();
});


//sort by priority level
let priorityOrder= {
    "high": 1,
    "medium": 2,
    "low":3
};
document.getElementById("prioritySort").addEventListener("click", function() {
    console.log(listOfTasks);
    listOfTasks.sort((a,b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    console.log("priority sort: ", JSON.stringify(listOfTasks));
    displayTasks();
});

//display tasks to page

function displayTasks() { 
    taskListArea.innerHTML = "";        
    let taskNumber=0;
    
    listOfTasks.forEach((task, i) => {
    //while (i < listOfTasks.length) {
        let taskCard = document.createElement("p");
        taskCard.className="sectioncard";
        taskListArea.appendChild(taskCard);
        taskCard.innerHTML += "Task Number: " + taskNumber + "<br/>";
        taskCard.innerHTML += "Task Name: " + task.task + "<br/>";
        taskCard.innerHTML += "priority level: " + task.priority + "<br/>";
        taskCard.innerHTML += "important: " + task.important + "<br/>";
        taskCard.innerHTML += "date task entered: " + task.taskEntryDate + "<br/>";
        taskCard.innerHTML += "completed: " + task.completed + "<br/>";

        if (task.completed == "yes") {
            taskCard.className = "sectioncardcomplete";
        }
         if (task.important == "yes") {
            taskCard.className = "sectioncardimportant";
        }

        taskCard.addEventListener("click", function() {
            editObject(i);
            console.log(JSON.stringify(listOfTasks[i])); 
        }); 
  
        taskNumber++;
    }); 
}

    

//UPDATE OBJECTS

function editObject(i) {
    alert("make edits in form above, click submit to update task")
    document.getElementById("priority").value = listOfTasks[i].priority;
    document.getElementById("important").value = listOfTasks[i].important;
    document.getElementById("completed").value = listOfTasks[i].completed;
    console.log(JSON.stringify(listOfTasks[i]));
    displayTasks();
    
}

//style task output Tasks should be styled to indicate priority, importance, and completion status.    
    //The final product must be visually appealing, user-friendly, and well-documented.
    //The application must log task updates to the browser console using JSON.stringify().

   

//3. Functional Requirements
    //3.1 User Interface (UI) Requirements
    //The Task Manager must include the following elements:

    //An input field where users can enter a task name.
    //A dropdown menu to select task priority (High, Medium, Low).
    //A checkbox to mark a task as important.
    //A submit button to add the task to the list.
    //A delete button to remove the task to the list.
    //A date to show when the task was added
    //A div with an id of "taskmanager" where tasks will be displayed dynamically.
    //Tasks should have the following visual styles using .style:

    //Important tasks must be highlighted in red
    //Completed tasks must have a strikethrough
//3.2 JavaScript Functionality Requirements
    //Event Handling & DOM Manipulation
    //Users should be able to submit tasks via the form.
    //Tasks must be displayed dynamically in the #taskmanager div using .innerHTML.
    //Users must be able to delete tasks.
    //Users must be able to toggle task completion.
    //Task must display the date task was added using the Date object
    //Task Data Structure
    //Tasks must be stored in an array of objects with the following properties:

//{
  //  id: 1,
    //name: "Finish JavaScript project",
    //priority: "High",
    //isImportant: true,
    //isCompleted: false,
    //date: today﻿
    //}

    //Conditional Logic & Styling
    //Apply styling based on priority.
    //Highlight important tasks in red.
    //Apply a strikethrough to completed tasks.
    //Console Logging
    //Every time a task is added, updated, or deleted, the full task list must be logged in the console using:
    //console.log(JSON.stringify(tasks));
//4. Non-Functional Requirements
  //  The application must be coded using vanilla JavaScript (no external libraries or frameworks).
    //The code must follow clean coding practices, including proper indentation, meaningful variable names, and comments.
    //The UI should be responsive and visually intuitive.
    //The application must prevent invalid input, such as empty task names.
//5. Deliverables & Submission
    //5.1 Deliverables
    //The final submission must include:
    
    //A clickable link to your GitHub repository containing all project files.
    //A brief reflection document (200 words) describing your approach and any challenges faced.
    //A clickable link to your project hosted on the Wake Tech server. 



//At the end of the development process, you will submit a GitHub repository containing your project files and a link to the deployed project on the Wake Tech server.