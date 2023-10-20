let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .items');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');


let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {
    next.click()
}, 5000);
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click()
    }, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
});

// onclick contact icon
document.addEventListener('DOMContentLoaded', function () {
    const contactModal = document.getElementById('contactModal');
    const closeButton = document.getElementById('closeButton');

    
    document.querySelector("#register-form").addEventListener('click', function () {
        contactModal.style.display = 'block';
    });

    
    closeButton.addEventListener('click', function () {
        contactModal.style.display = 'none';
    });

    
    window.onclick = function (event) {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    }
});


document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    
    axios.post('http://localhost:3000/customer_information', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error posting the data', error);
        });
});
