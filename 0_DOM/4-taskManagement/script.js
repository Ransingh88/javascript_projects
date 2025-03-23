const input_task = document.getElementById("input_task")
const add_btn = document.getElementById("add_btn")
const taskslist = document.getElementById("taskslist")
const total_task_count = document.getElementById("total_task_count")
const completed_task_count = document.getElementById("completed_task_count")
const noTask_placeholder = document.getElementById("noTask_placeholder")

let dataList = []
let totalTaskCount = 0
let completedTaskCount = 0

add_btn.addEventListener("click", () => {
  addTask()
})

function addTask() {
  const taskTitle = input_task.value
  if (taskTitle == "") {
    alert("please add a task!")
  } else {
    let dataMap = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false,
    }
    dataList.push(dataMap)
    totalTaskCount++
    renderTasks()
    countTasks()
  }
  input_task.value = ""
}

function renderTasks() {
  if (dataList.length > 0) {
    noTask_placeholder.classList.add("noTask_placeholder")
  } else {
    noTask_placeholder.classList.remove("noTask_placeholder")
  }
  taskslist.innerHTML = ""
  dataList.forEach((task) => {
    const li_taskItem = document.createElement("li")

    const p_taskName = document.createElement("p")
    p_taskName.innerHTML = task.title
    if (task.isCompleted) {
      p_taskName.classList.add("compelted")
    }

    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = task.isCompleted
    checkbox.addEventListener("click", () => {
      toggleMarkAsCompleted(task.id)
      p_taskName.classList.toggle("compelted")
    })

    const del_btn = document.createElement("button")
    del_btn.innerText = "del"
    del_btn.addEventListener("click", () => {
      deleteTask(task.id)
    })

    const span = document.createElement("span")

    span.appendChild(checkbox)
    span.appendChild(p_taskName)
    li_taskItem.appendChild(span)
    li_taskItem.appendChild(del_btn)

    taskslist.appendChild(li_taskItem)
  })
}

function deleteTask(taskId) {
  dataList = dataList.filter((task) => task.id !== taskId)
  totalTaskCount--
  total_task_count.innerText = totalTaskCount
  renderTasks()
  countTasks()
}

function toggleMarkAsCompleted(taskId) {
  dataList = dataList.map((task) =>
    task.id == taskId ? { ...task, isCompleted: !task.isCompleted } : task
  )
  countTasks()
}

function countTasks() {
  total_task_count.innerText = totalTaskCount
  completedTaskCount = dataList.filter((task) => task.isCompleted).length
  completed_task_count.innerText = completedTaskCount
}
