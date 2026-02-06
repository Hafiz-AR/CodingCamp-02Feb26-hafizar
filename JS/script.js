var toDoList = []

function addToDo() {
    const addText = document.getElementById('add-text')
    const addDate = document.getElementById('add-date')
    
    if (addText.value === '' || addDate.value === ''){
        alert('Activity and Date must be filled')
    }
    else {
        var newItem = {
            text: addText.value,
            date: addDate.value
        };
        toDoList.push(newItem)
        addText.value = ''
        addDate.value = ''
        renderList(toDoList)
    }
}

function renderList(list) {
    var toDoTable = document.getElementById('to-do-table')
    toDoTable.innerHTML = `            
        <tr>
            <th class="text-default" width="80%">Activity</th>
            <th class="text-default" width="20%">Date</th>
        </tr>`
    list.forEach(
        addItem = (item) => {
            toDoTable.innerHTML +=`
        <tr>
            <td class="text-thin">${item.text}</td>
            <td class="text-thin">${item.date}</td>
        </tr>`
        }
    )
}

function deleteToDo() {
    if (confirm('Delete all activity from list?')){
        var toDoTable = document.getElementById('to-do-table')
        toDoList = []
        toDoTable.innerHTML = `            
            <tr>
                <th class="text-default" width="80%">Activity</th>
                <th class="text-default" width="20%">Date</th>
            </tr>        
            <tr>
            <td class="text-thin">-</td>
            <td class="text-thin">-</td>
        </tr>`   
    }
}

function filterToDo() {
    var filterTable = []
    var match = false
    const filterText = document.getElementById('filter-text')
    const filterDate = document.getElementById('filter-date')
    console.log(filterText.value)
    console.log(filterDate.value)
    
    if (!(filterText.value === '' && filterDate.value === '')){
        toDoList.forEach(
            checkFilter = (item) => {
                console.log(item.text)
                if (!(filterText.value === '' || filterDate.value === '')){
                    if (String(item.text).includes(filterText.value) && filterDate.value === item.date){
                        match = true
                    }
                }
                else {
                    if (!(filterText.value === '') && String(item.text).includes(filterText.value)) {
                        match = true
                    }
                    if (!(filterDate.value === '') && filterDate.value === item.date) {
                        match = true
                    }
                }
                if (match) {
                    filterTable.push(item)
                    console.log('here')
                }
                match = false
            }
        )
        if (filterTable.length == 0) {
            filterTable = [{
                text: '-',
                date: '-'
            }]
        }
        renderList(filterTable)
        const filterForm = document.getElementById('misc-buttons')
        filterForm.innerHTML = `
            <button id="filter-button" onclick="filterToDo()">Apply Filter</button>
            <button id="reset-button" onclick="resetFilter()">Reset Filter</button>
            <button id="delete-button" onclick="deleteToDo()">Clear List</button>`
    }
}

function resetFilter() {
    renderList(toDoList)
    const filterText = document.getElementById('filter-text')
    const filterDate = document.getElementById('filter-date')
    filterText.value = ''
    filterDate.value = ''
    const filterForm = document.getElementById('misc-buttons')
    filterForm.innerHTML = `
        <button id="filter-button" onclick="filterToDo()">Apply Filter</button>
        <button id="delete-button" onclick="deleteToDo()">Clear List</button>`
}