
let fname = document.querySelector('#fname');
let surname = document.querySelector('#surname');
let age = document.querySelector('#age');
let clevel = document.querySelector('#clevel');
let fclub = document.querySelector('#fclub');
let tbody = document.querySelector("#tbody");
let submit = document.querySelector(".submit-btn");
let table = document.querySelector("#table");

let arr = [];

submit.addEventListener("click", onPress)
table.addEventListener("click", deleteButton)

function onPress(event) {
    //to stop submit from refreshing because submit refreshes we use preventDefault
    event.preventDefault();

    createObjectAndPushToArray();

    addObjectValuesToTable();
}

//Object saves data from the form
function createObjectAndPushToArray () {

    let object = {
        firstname: fname.value,
        surname: surname.value,
        agee: age.value,
        current_level: clevel.value,
        fav_club: fclub.value
    }

    //JSON is an object in string form 
    //We need to conver object to JSON

    let object_json = JSON.stringify(object);

    // console.log(object);

    // console.log(object_json);

    arr.push(object_json); //we push to an array to store the object

    // console.log (arr);
}

function addObjectValuesToTable() {
    //now we convert json back to object to go in our tabbe which is convertedJson

    let position = "beforeend"

    let row;

    arr.forEach((value) => {
        let convertedJson = JSON.parse(value)

        row = 
        `<tr>
            <td>${convertedJson.firstname}</td>
            <td>${convertedJson.surname}</td>
            <td>${convertedJson.agee}</td>
            <td>${convertedJson.current_level}</td>
            <td>${convertedJson.fav_club}</td>
            <td><i class="delete fas fa-minus-circle"></i></td>
        </tr>`
       
    })

    return tbody.insertAdjacentHTML(position,row); 
}

function deleteButton(event) {
    if (event.target.classList.contains("delete")) {//event.target is anything we click in table so if anything we click on contains delete
        event.target.closest("tr").remove();//button clicked on, find the closest element (parent) then remove it
    } 
}