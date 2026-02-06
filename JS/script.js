var toDoList = []

function addToDo() {
    const toDoText = document.getElementById('add-text')
    const toDoDate = document.getElementById('add-date')
    
    if (toDoText.value === '' || toDoDate.value === ''){
        alert('Activity and Date must be filled')
    }
    else {
        var newItem = {
            text: toDoText.value,
            date: toDoDate.value
        };
        toDoList.push(newItem)
        // console.log(toDoList[1].date)
        renderToDos()
    }
}

function renderToDos() {
    const toDoItemList = document.getElementById('item-list')
    console.log(toDoItemList)
}
