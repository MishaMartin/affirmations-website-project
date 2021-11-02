console.log("Hello World!")

function addAffirmation(event) {
    event.preventDefault()
    let inputField = document.querySelector("input")
    
    let affirmation = document.createElement('li')
    
    let affirmationString = document.createElement('span')
    
    affirmationString.textContent = inputField.value
    
    affirmation.appendChild(affirmationString)
    
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteAffirmation);
    affirmation.appendChild(deleteBtn)
    
    let list = document.querySelector("ul")
    
    list.appendChild(affirmation)
    
    inputField.value = ''
    
    }
    
    document.querySelector("form").addEventListener('submit', addAffirmation)
    const message = document.querySelector('#message')
    
    function deleteAffirmation(event){
        event.target.parentNode.remove()
    } 
    





