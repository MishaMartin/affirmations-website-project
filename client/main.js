console.log("Hello World!")

const baseUrl = "https://i-am-affirmations.herokuapp.com"

const affirmationBtn = document.getElementById("affirmation")
const addAffirmations = document.getElementById("addAffirmation")
const addBtn = document.getElementById("addBtn")
const themes = document.getElementById("themes")
const addForm = document.querySelector("form")

function getAffirmation(event) {
    event.preventDefault()
    const {globalId} = req.param
    axios.get(`${baseUrl}/affirmations/:id`)
    .then(res => {
        console.log(Math.floor(Math.random() * globalId))
    })
}

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


addForm.addEventListener('submit', addAffirmation)
affirmationBtn.addEventListener('click', getAffirmation)



