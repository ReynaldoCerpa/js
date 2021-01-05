'use strict'

var button = document.querySelector("#button");
var div_user = document.querySelector("#user")

button.addEventListener("click", () => {
    
let id = document.querySelector("#userName").value;
    fetch("https://reqres.in/api/users/"+id)
        .then(data => data.json())
        .then(user => {
            console.log(user.data);
            let nombre = document.createElement("h2");
            nombre.innerHTML = user.first_name+" "+user.last_name;
            div_user.appendChild(nombre);
            console.log(user.first_name+" "+user.last_name);

        })
});
        