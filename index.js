const express = require('express')
const app = express()
app.all('/', (req, res) => {
    const fruitsList = document.querySelector("#fruits");
    const grapesListItem = document.createElement("li");

    // add classes
    grapesListItem.classList.add("list-item");

    // add attributes
    grapesListItem.setAttribute("id", "grapes");

    // add events
    grapesListItem.addEventListener("click", () => {
        alert("You clicked on Grapes!");
    });

    fruitsList.appendChild(grapesListItem);
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
