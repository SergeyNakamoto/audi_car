axios.get('http://localhost:3000/audi_cars')
    .then(function (response) {
        const data = response.data;
        let showProd = '';
        data.forEach((element) => {
            showProd +=
                `
            <div class="box">
            <h3>${element.model}</h3>
            <p>Giá: ${element.price}</p>
            <p>Động cơ: ${element.engine}</p>
            <p> Số lượng: ${element.quantity}</p>
            <button data-id="${element.id}">Xoá mẫu xe</button>
            <img src="${element.URL}" alt="">
            <img src="${element.image}" alt="">
          </div>
            `
        });
        document.getElementById('course').innerHTML = showProd;
        document.querySelectorAll('button[data-id]').forEach(button => {
            button.addEventListener('click', function (e) {
                const carId = e.target.getAttribute('data-id');

                // Send a DELETE request to the server
                axios.delete(`http://localhost:3000/audi_cars/${carId}`)
                    .then(response => {
                        if (response.status === 200) {
                            e.target.closest('.box').remove();
                        } else {
                            console.error('Error deleting product:', response);
                        }
                    }).catch(error => {
                        console.error('Error deleting product:', error);
                    });
            });
        });
    })
    .catch(function (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
    });
// Delete function
