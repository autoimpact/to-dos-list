// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const container = document.querySelector(".container");
const doneList = document.querySelector('#done')
const alert = document.querySelector('.text-alert')


// 資料
let todos = [
  '核心運動*3回合',
  '全聯採購防疫物資',
  '銀行辦事',
  '整理房間',
  '製作個人 side-project'
];

for (let todo of todos) {
  addItem(todo)
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li")
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

function addItemCheck(value) {
  if (value.trim() === '') {
    alert.hidden = false
  } else {
    alert.hidden = true
    addItem(value)
  }
}

// Create
input.addEventListener("keypress", function (event) {
  const inputValue = input.value
  if (event.key === 'Enter') {
    addItemCheck(inputValue)
    input.value = ''
  }
})

addBtn.addEventListener("click", function () {
  const inputValue = input.value
  addItemCheck(inputValue)
  input.value = ''
})

// Delete, Checked, Sendback to myTodo
container.addEventListener("click", function (event) {
  const target = event.target
  console.log(target)

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement
    parentElement.remove()

  } else if (target.tagName === "LABEL" && target.parentElement.parentElement.classList.contains('todo')) {
    target.classList.toggle('checked')

    const doneItem = document.createElement('li')
    doneItem.innerHTML = `
    <label for="todo" class="checked">${target.innerText}</label>    <i class="delete fa fa-trash"></i>`
    doneList.appendChild(doneItem)
    target.parentElement.remove()

  } else if (target.tagName === "LABEL" && target.parentElement.parentElement.classList.contains('done')) {
    target.classList.toggle('checked')
    const sendbackItem = target.parentElement
    sendbackItem.remove()
    list.appendChild(sendbackItem)
  }
})
