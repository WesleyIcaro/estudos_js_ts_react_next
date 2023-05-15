const buttonTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')
const inputTask = document.querySelector('.input-task')

function doTask() {
  // taskList.push({
  //   task: inputTask.value
  // })

  // console.log(taskList)

  inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      if (!inputTask.value) return
      writeTask(inputTask.value)
    }
  })

  buttonTask.addEventListener('click', function (event) {
    if (!inputTask.value) return
    writeTask(inputTask.value)
  })

  // if (element.classList.contains('btn-task')) {
  const clearInput = () => {
    inputTask.value = ''
    inputTask.focus()
  }

  createLi = () => {
    const li = document.createElement('li')
    return li
  }

  const doButtonDelete = li => {
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Apagar'
    buttonDelete.setAttribute('title', 'Delete task')
    buttonDelete.setAttribute('class', 'delete')
    // li.setAttribute('class', 'list')
    li.appendChild(buttonDelete)
  }

  const writeTask = textoInput => {
    const li = createLi()
    li.innerText = textoInput
    tasks.appendChild(li)
    clearInput()
    doButtonDelete(li)
    saveTasks()
  }

  // }

  // if (element.classList.contains('.'))

  document.addEventListener('click', function (event) {
    const element = event.target
    if (element.classList.contains('delete')) {
      element.parentElement.remove()
      saveTasks()
    }
  })

  const saveTasks = () => {
    const liTasks = tasks.querySelectorAll('li')
    const listTask = []
    for (let task of liTasks) {
      let taskText = task.innerText
      taskText = taskText.replace('Apagar', '').trim()
      listTask.push(taskText)
    }

    const tasksJSON = JSON.stringify(listTask)
    localStorage.setItem('tasks', tasksJSON)
  }

  const addTasksForSave = () => {
    const tasks = localStorage.getItem('tasks')
    const tasksList = JSON.parse(tasks)
    console.log(tasksList)

    for (let task of tasksList) {
      writeTask(task)
    }
  }
  addTasksForSave()
}

doTask()
