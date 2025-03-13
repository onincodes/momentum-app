// ------------------------------------- User Story 2 --------------------------------------------
// Use updated time
let time = document.getElementById("time");

function updateTime() {
  const now = new Date(); // Get the current date and time
  let hours = now.getHours(); // Get the current hour (0-23)
  let minutes = now.getMinutes(); // Get the current minute (0-59)

  // Convert to 12-hour format (if 0, set to 12)
  hours = hours % 12 || 12;

  // Add leading zero to minutes if it's a single digit (e.g., "9:05" instead of "9:5")
  minutes = minutes < 10 ? "0" + minutes : minutes; // Using ternary operator

  // Format the time as HH:MM and update the element with id "time"
  time.textContent = `${hours}:${minutes}`;
}

// Call updateTime every second to keep it updated
setInterval(updateTime, 1000);
updateTime(); // Run immediately when the page loads

// ------------------------------------- User Story 1, 3 --------------------------------------------
// Update greetings
let greetDay = document.getElementById("greet-day");

// Function to update the greeting based on the current time
function updateGreetings() {
  const now = new Date(); // Get the current date and time
  let hours = now.getHours(); // Get the current hour (0-23)
  let greeting = ""; // Initialize an empty greeting string

  // Determine the appropriate greeting based on the hour
  if (hours >= 0 && hours < 12) {
    greeting = "Good morning"; // 12 AM - 11:59 AM
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon"; // 12 PM - 5:59 PM
  } else {
    greeting = "Good evening"; // 6 PM - 11:59 PM
  }

  // Update the text content of the greeting element
  greetDay.textContent = greeting;
}

// Call updateGreetings every second to ensure it stays updated
setInterval(updateGreetings, 1000);
updateGreetings(); // Run immediately when the page loads

// ------------------------------------- User Story 1 --------------------------------------------
// Handle user name submission
let user = document.getElementById("name");
let nameInput = document.querySelector(".name-form");
let nameForm = document.getElementById("name-form");
let introDiv = document.getElementById("intro-div");
let mainDiv = document.getElementById("main-div");

function userName(event) {
  event.preventDefault(); // Prevent page reload
  let nameValue = nameInput.value.trim(); // Get the name from input

  if (nameValue) {
    user.textContent = nameValue; // Update displayed name
    introDiv.classList.add("hide"); // Apply CSS class for fade-out
    mainDiv.classList.add("show"); // Apply CSS class for fade-in
  }
}

// Attach event listener to form submission
nameForm.addEventListener("submit", userName);

// ------------------------------------- User Story 4 --------------------------------------------
// Handle task of the day
let today = document.getElementById("day");
let task = document.getElementById("day-task");
let goalForm = document.getElementById("goal-form");
let taskInput = document.getElementById("goal-task");
let quoteDiv = document.getElementById("qotd");

function getGoal(event) {
  event.preventDefault();
  let taskValue = taskInput.value.trim();

  if (taskValue) {
    today.textContent = "TODAY";
    today.style.fontSize = "24px";
    today.style.marginTop = "20px";
    task.textContent = taskValue;
    task.style.display = "block";
    taskInput.style.display = "none";
    task.classList.remove("hide");
    taskInput.classList.add("hide");
    quoteDiv.style.marginTop = "107px";
  }
}

goalForm.addEventListener("submit", getGoal);

// ------------------------------------- User Story 7 --------------------------------------------
// Add new quote
let quoteForm = document.getElementById("quote-form");
let quoteInput = document.querySelector(".new-quote");
let quote = document.getElementById("quote");
let addQuoteDiv = document.getElementById("add-quote-div");
let editQuote = document.getElementById("edit-quote");

function showAddQuote() {
  addQuoteDiv.classList.toggle("visible");
  addTaskDiv.classList.remove("visible");
}

editQuote.addEventListener("click", showAddQuote);

function newQuote(event) {
  event.preventDefault();
  let quoteValue = quoteInput.value.trim();

  if (quoteValue) {
    quote.textContent = quoteValue;
    quotes.unshift(quoteValue);
    quoteInput.value = "";
    showAddQuote();
  }
}

quoteForm.addEventListener("submit", newQuote);

// Add random quote function
const quotes = [
  `"Great things come from hard work and perseverance. No excuses."`,
  `"Once you know what failure feels like, determination chases success."`,
  `"The most important thing is you must put everybody on notice that you're here and you are for real."`,
  `"I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you."`,
  `"May you always remember to enjoy the road, especially when it's a hard one."`,
];

let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
quote.textContent = quotes[newNumber];

console.log(quotes);

// ------------------------------------- User Story 8 --------------------------------------------
// New task
let taskForm = document.getElementById("task-form");
let addTaskDiv = document.getElementById("add-task-div");
let addTask = document.getElementById("add-task");
let newTaskInput = document.querySelector(".new-task");
let taskDiv = document.getElementById("task-div");
let taskList = document.getElementById("task-list");

function showAddTask() {
  addTaskDiv.classList.toggle("visible");
  addQuoteDiv.classList.remove("visible");
}

addTask.addEventListener("click", showAddTask);

function hideTask() {
  taskDiv.classList.add("hidden");
}

hideTask();

function newTask(event) {
  event.preventDefault();

  let taskInputValue = newTaskInput.value.trim();

  if (taskInputValue) {
    let newElement = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    // Toggle line-through on the <li> itself
    checkBox.onclick = function () {
      newElement.classList.toggle("completed");
    };

    let label = document.createElement("span"); // Create span for text
    label.textContent = ` ${taskInputValue}`;

    newElement.appendChild(checkBox);
    newElement.appendChild(label); // Append text inside a span

    taskList.appendChild(newElement);

    newTaskInput.value = "";
    taskDiv.classList.remove("hidden");
  }
}

taskForm.addEventListener("submit", newTask);
