let Users = [
    ["Anna", 998999999999],
    ["John", 998999999999],
    ["Mike", 998999999999],
    ["Cannedy", 998999999999],
    ["Peter", 998999999999],
]

const showUserBox = document.querySelector('.button-add')
const addUserBox = document.querySelector('.box')
const addUserBtn = document.getElementById("btn")

showUserBox.addEventListener('click', () => {
    addUserBox.style.display = 'block'
    showUserBox.style.display = 'none'
})
function AddUsers(users) {
    var row = `<tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>`;
    Users.forEach(function (user, i) {
        row += `<tr>
                    <td>${i + 1}</td>
                    <td>${user[0]}</td>
                    <td>${user[1]}</td>
                    <td>
                        <a href='#' onclick=edit(${i})><i class='bx bx-edit-alt'></i></a>
                        <a href='#' onclick=del(${i})><i class='bx bxs-trash'></i></a>
                    </td>
                </tr>`
    })
    document.getElementById("tbl").innerHTML = row;
    addUserBox.style.display = 'none'
    showUserBox.style.display = 'inline-block'
}
var form = document.querySelector(".box");

function edit(i) {
    var user = Users[i];
    document.getElementById("username").value = user[0];
    document.getElementById("number").value = user[1];
    document.getElementById("index").value = i;
    document.getElementById("btn").innerText = "Edit User";
    addUserBox.style.display = 'block'
    showUserBox.style.display = 'none'
}

function del(i) {
    console.log(i);
    event.preventDefault();
    Users.splice(i, 1);
    AddUsers(Users);
}

function AddUser(event) {
    event.preventDefault()
    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let index = document.getElementById("index").value;
    let user = [username, number];

    if (index == "" || index == undefined) {
        Users.push(user);
    } else {
        Users.splice(index, 1, user);
        document.getElementById("btn").innerText = "Add User";
    }

    AddUsers(Users);
    ClearForm();
}



function ClearForm() {
    document.getElementById("username").value = "";
    document.getElementById("number").value = "";
}

AddUsers(Users);



// // Validate
// class FormValidator {
//     constructor(form, fields) {
//         this.form = form
//         this.fields = fields
//     }

//     initialize() {
//         this.validateOnEntry()
//         this.validateOnSubmit()
//     }

//     validateOnSubmit() {
//         let self = this

//         document.querySelector('#btn').addEventListener('click', e => {
//             e.preventDefault()
//             self.fields.forEach(field => {
//                 const input = document.querySelector(`#${field}`)
//                 self.validateFields(input)
//             })
//         })
//     }

//     validateOnEntry() {
//         let self = this
//         this.fields.forEach(field => {
//             const input = document.querySelector(`#${field}`)

//             input.addEventListener('input', event => {
//                 self.validateFields(input)
//             })
//         })
//     }

//     validateFields(field) {

//         // Check presence of values
//         if (field.value.trim() === "") {
//             this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
//         } else {
//             this.setStatus(field, null, "success")
//         }

//         // Number confirmation edge case
//         if (field.id === "number") {
//             const numberValidation = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
//             if (numberValidation.test(field.value)) {
//                 this.setStatus(field, null, "success")
//             } else {
//                 this.setStatus(field, "Phone number required, Please enter valid phone number", "error")
//             }
//         }
//     }

//     setStatus(field, message, status) {
//         const successIcon = field.parentElement.querySelector('.icon-success')
//         const errorIcon = field.parentElement.querySelector('.icon-error')
//         const errorMessage = field.parentElement.querySelector('.error-message')

//         if (status === "success") {
//             if (errorIcon) { errorIcon.classList.add('hidden') }
//             if (errorMessage) { errorMessage.innerText = "" }
//             successIcon.classList.remove('hidden')
//             field.classList.remove('input-error')
//         }

//         if (status === "error") {
//             if (successIcon) { successIcon.classList.add('hidden') }
//             field.parentElement.querySelector('.error-message').innerText = message
//             errorIcon.classList.remove('hidden')
//             field.classList.add('input-error')
//         }
//     }
// }

// // const form = document.querySelector('.box')
// const fields = ["username", "number"]

// const validator = new FormValidator(form, fields)
// validator.initialize()


addUserBox.addEventListener("submit", AddUser);