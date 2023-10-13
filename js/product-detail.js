
import fetchCarData from '../connect-api/getAPI.js';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    fetchCarData()
    .then(data => {
        const product = data.product_detail.find(car => car.id == parseInt(productId));
        if(product) {            
            document.getElementById('productImage1').src = product.image_product_detail_1;
            document.getElementById('productImage2').src = product.image_product_detail_2;
            document.getElementById('productImage3').src = product.image_product_detail_3;
            document.getElementById('productImage4').src = product.image_product_detail_4;
            document.getElementById('main-title').innerHTML = product.model;
            // title
            document.getElementById('title-1').innerHTML = product.content_detail_title_1;
            document.getElementById('title-2-1').innerHTML = product.content_detail_title_2;
            document.getElementById('title-3').innerHTML = product.content_detail_title_3;
            document.getElementById('title-4').innerHTML = product.content_detail_title_4;
            // content-small
            document.getElementById('content-1').innerHTML = product.content_detail_small_1;
            document.getElementById('content-2').innerHTML = product.content_detail_small_2;
            document.getElementById('content-3').innerHTML = product.content_detail_small_3;
            document.getElementById('content-4').innerHTML = product.content_detail_small_4_1;
            document.getElementById('content-5').innerHTML = product.content_detail_small_4_2;
            document.getElementById('content-6').innerHTML = product.content_detail_small_4_3;

            // document.getElementById('productPrice').innerHTML = product.price;
        // ... hiển thị các thông tin khác của sản phẩm tại đây
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 2500,
            delay: 400
        });
    
        // Target elements for scroll reveal
        ScrollReveal().reveal('#main-title, .section-title', { delay: 500, origin: 'left' });
        ScrollReveal().reveal('.sec-01, .image, .info ', { delay: 600, origin: 'bottom' });
        ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
        ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
        ScrollReveal().reveal('.medai-info li', { delay: 500, origin: 'left', interval: 200 });
        ScrollReveal().reveal('.sec-04 .full-image', { delay: 500, origin: 'left' });
        ScrollReveal().reveal('.sec-04 .full-info', { delay: 700, origin: 'right' });
    
        } else {
            console.error('Product not found');
        }
    })
    .catch(error => {
        console.error('Failed to retrieve car data:', error.message);
    });
});
  //common reveal
  ScrollReveal({

    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400

});
