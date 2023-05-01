const buttonTask = document.querySelector('.btn-task')
const container = document.querySelector('.container')
const tasks = document.querySelector('tasks')
const task = document.querySelector('input-task')

const taskList = []

buttonTask.addEventListener('click', function (event) {
  event.preventDefault()

  let taskValue = task

  const addTask = () => {
    taskList.push({
      task: taskValue
    })
    return taskList
  }

  createLi = () => {
    const li = document.createElement('li')
    return li
  }

  const doButton = () => {
    const button = document.createElement('button')
    return button
  }

  const writeTask = () => {
    addTask()

    const button = doButton()
    const li = createLi()

    li.innerHTML = task
    container.appendChild(li)

    button.innerHTML = 'Apagar'
    li.appendChild(button)
  }

  // const handleDelete = () => {
  //   document.addEventListener('click', function (event) {
  //     console.log('Sucesso!')
  //   })
  // }

  // handleDelete()

  writeTask()

  console.log(taskList)
})
