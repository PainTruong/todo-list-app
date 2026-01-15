// ===== MODEL =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ===== VIEW =====
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".new-todo");
const reminderInput = document.querySelector(".reminder-time");
const todoCount = document.querySelector(".todo-count");
const alarmSound = new Audio("alarm.mp3");

// ===== CONTROLLER =====
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    if (todo.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  });

  const remaining = todos.filter(t => !t.completed).length;
  todoCount.textContent = `${remaining} công việc chưa hoàn thành`;
}

// Thêm công việc
todoInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && todoInput.value.trim() !== "") {
    todos.push({
      text: todoInput.value,
      completed: false,
      reminder: reminderInput.value,
      notified: false
    });
    todoInput.value = "";
    reminderInput.value = "";
    saveTodos();
    renderTodos();
  }
});

// Xóa công việc đã hoàn thành
document.querySelector(".clear-completed").addEventListener("click", () => {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
});

// ===== NHẮC VIỆC =====
function checkReminders() {
  const now = new Date().getTime();

  todos.forEach(todo => {
    if (todo.reminder && !todo.notified) {
      const reminderTime = new Date(todo.reminder).getTime();
      if (now >= reminderTime) {
        alarmSound.play();

        if (Notification.permission === "granted") {
          new Notification("Nhắc việc", { body: todo.text });
        }

        todo.notified = true;
        saveTodos();
      }
    }
  });
}

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

setInterval(checkReminders, 10000);

// ===== FOCUS TIMER =====
let timerInterval;

function startTimer() {
  let time = 25 * 60;
  const display = document.getElementById("time-display");

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    display.textContent =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      alarmSound.play();
      alert("Hoàn thành phiên tập trung!");
    }
  }, 1000);
}

// INIT
renderTodos();
