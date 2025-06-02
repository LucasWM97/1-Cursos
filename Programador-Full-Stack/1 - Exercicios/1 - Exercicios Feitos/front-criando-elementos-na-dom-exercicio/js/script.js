const taskInput = document.querySelector("#task-input")
const greenButton = document.querySelector("#green-button")
const container = document.querySelector(".container-tasks")
let tasks = []

greenButton.addEventListener("click", function () {
  if (!taskInput.value) {
    return
  } else {
    const task = document.createElement("div")
    task.classList.add("task")
    container.appendChild(task)
    const newTask = document.createElement("span")
    newTask.textContent = taskInput.value
    task.appendChild(newTask)
    const img = document.createElement("img")
    img.src = "assets/remove.svg"
    task.appendChild(img)
    taskInput.value = ""

    img.addEventListener("click", function () {
      container.removeChild(task)
      tasks = tasks.filter((t) => t !== newTask.textContent)
      saveTasks()
    })

    tasks.push(newTask.textContent)
    saveTasks()
  }
})

taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (!taskInput.value) {
      return
    } else {
      const task = document.createElement("div")
      task.classList.add("task")
      container.appendChild(task)
      const newTask = document.createElement("span")
      newTask.textContent = taskInput.value
      task.appendChild(newTask)
      const img = document.createElement("img")
      img.src = "assets/remove.svg"
      task.appendChild(img)
      taskInput.value = ""
      img.addEventListener("click", function () {
        container.removeChild(task)
        tasks = tasks.filter((t) => t !== newTask.textContent)
        saveTasks()
      })

      tasks.push(newTask.textContent)
      saveTasks()
    }
  }
})

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
  const tasksString = localStorage.getItem("tasks")
  if (tasksString) {
    tasks = JSON.parse(tasksString)
    tasks.forEach((taskText) => {
      const task = document.createElement("div")
      task.classList.add("task")
      container.appendChild(task)
      const newTask = document.createElement("span")
      newTask.textContent = taskText
      task.appendChild(newTask)
      const img = document.createElement("img")
      img.src = "assets/remove.svg"
      task.appendChild(img)
      img.addEventListener("click", function () {
        container.removeChild(task)
        tasks = tasks.filter((t) => t !== taskText)
        saveTasks()
      })
    })
  }
}

loadTasks()









/* const taskInput = document.querySelector("#task-input")
const greenButton = document.querySelector("#green-button")
const container = document.querySelector(".container-tasks")

greenButton.addEventListener("click", function () {
  if (!taskInput.value) {
    return
  } else {
    const task = document.createElement("div")
    task.classList.add("task")
    container.appendChild(task)
    const newTask = document.createElement("span")
    newTask.textContent = taskInput.value
    task.appendChild(newTask)
    const img = document.createElement("img")
    img.src = "assets/remove.svg"
    task.appendChild(img)
    taskInput.value = ""

    img.addEventListener("click", function () {
      container.removeChild(task)
    })
  }
})

taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (!taskInput.value) {
      return
    } else {
      const task = document.createElement("div")
      task.classList.add("task")
      container.appendChild(task)
      const newTask = document.createElement("span")
      newTask.textContent = taskInput.value
      task.appendChild(newTask)
      const img = document.createElement("img")
      img.src = "assets/remove.svg"
      task.appendChild(img)
      taskInput.value = ""
      img.addEventListener("click", function () {
        container.removeChild(task)
      })
    }
  }
}) */