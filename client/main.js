console.log("Hello World!")

const baseUrl = "https://i-am-affirmations.herokuapp.com"

const affirmationBtn = document.getElementById("affirmation")
const addAffirmation = document.getElementById("addAffirmation")
const addBtn = document.getElementById("addBtn")
const themes = document.getElementById("themes")
const addForm = document.querySelector("form")

function addAffirmation(event) {
    event.preventDefault()

    let body = {
        affirmation: affirmation.value
    }
    
    axios.post(`${baseUrl}/affirmations`, body)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

function getAffirmation() {
    axios.get(`${baseUrl}/affirmations`)
    .then(res => {
        console.log(res.data)
    })
}

addForm.addEventListener('submit', addAffirmation)
affirmationBtn.addEventListener('click', getAffirmation)



