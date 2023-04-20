// initialise the list
const tasks = []




document.addEventListener("DOMContentLoaded", () => {
    
    // TODO: add submit event to form
    
    // Define form element variable
    const form = document.getElementById("form")
    const taskList = document.getElementById("taskList")
    // Capture button click
    form.addEventListener("submit", (event) => {
        // Get form data
        event.preventDefault()
        const value = form.firstElementChild.value
        
        tasks.push(value)
        form.firstElementChild.value = '';
        
        console.log(tasks)
        renderTasks();
    })
    


    // Render thems tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(text => {
            const child = document.createElement("li")
            child.innerText = text
            taskList.appendChild(child)
        });
    }

})
