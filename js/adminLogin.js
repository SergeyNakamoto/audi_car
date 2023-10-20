
const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";

    setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, time_to_show_login);

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
    }, time_to_hidden_login);
}

const time_to_show_sign_up = 100;
const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, time_to_show_sign_up);

    setTimeout(function () {
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_sign_up);


}

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {

    document.querySelector('.cont_forms').className = "cont_forms";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_all);
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.get('http://localhost:3000/adminLogin')
        .then(function (response) {
            const users = response.data;
            const user = users.find(u => u.username === email && u.password === password);

            if (user) {
                window.location.href = './adminDashBoard.html';
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('An error occurred while trying to login.');
        });
}

function changePassword() {
    const email = document.getElementById("change_email").value;
    const currentPassword = document.getElementById("current_password").value;
    const newPassword = document.getElementById("new_password").value;
    const updateAccount = {
        username: email,
        newPassword: newPassword
    }

    axios.get('http://localhost:3000/adminLogin')
        .then(function (response) {
            const users = response.data;
            const user = users.find(u => u.username === email && u.password === currentPassword);
            if (user) {
                fetch('http://localhost:3000/adminLogin', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateAccount)})
                    .then(function (response) {
                        if (response.data) {
                            alert('Password changed successfully.');
                        } else {
                            alert('Error updating password.');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert('An error occurred while trying to update password.');
                    });

            } else {
                alert('Invalid email or current password.');
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('An error occurred while trying to verify current password.');
        });
        
        fetch('http://localhost:3000/adminLogin' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.data);
                    alert("Car data updated successfully!");
                } else {
                    throw new Error("An error occurred while updating car data.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred while updating car data.");
                
            });
}
