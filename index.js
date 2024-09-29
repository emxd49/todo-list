function addTask() {
    let input = document.getElementById("input")
    if (input.value == "") {
        alert("No Input!")
        return
    }
    let newitem = document.createElement("li")
    newitem.innerHTML = `
      <input type="checkbox" class="checkbox" onclick="checkTask(event)">
      <span class="input-data">${input.value.trim()}</span>
      <span class="delete-item" onclick="deleteTask(event)">x</span>`
    input.value = ""
    document.getElementById("list").appendChild(newitem)
}

function deleteTask(ev) {
    ev.target.parentElement.remove()
}

function checkTask(ev) {
    let text = ev.target.parentElement.querySelector("span")
    text.classList.toggle("line-through")
}