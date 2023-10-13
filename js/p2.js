
//  import data from API
import fetchCarData from '../connect-api/getAPI.js';
const displayCars1 = () => {
  fetchCarData()
    .then(data => {
      var htmlString = '';
      data.audiCars.forEach((url) => {
        if (url.model === 'e-tron GT') {
          htmlString += `
<div id="slide${url.id}" class="box-content show" data-id="${url.id}  style="background-color:transparent ;">
<div class="contain-upslide">
  <div class="card">
    <img src="${url.image}" alt="">
    <h2>${url.model}</h2>
  </div>
  <div class="card">
    <div class="product">
      <img src="images/page2-product2.jpeg" alt="">
      <img src="images/page2-product1-2.jpeg" alt="">
      <div class="wrap-content">
        <div class="content-detail">
          <h2>e-tron Gt quattro</h2>
          <p>Giá từ 4.839.000.000 ₫ </p>
          <a class="showProdDetail" data-id="${url.id}" href="product-detail.html?id=${url.id}">Khám phá ngay</a>
        </div>
        <div class="content-detail">
          <h2>RS e-tron GT</h2>
          <p>Giá từ 6.800.000.000 ₫ </p>
          <a class="showProdDetail" data-id="${url.id}" href="product-detail.html?id=${url.id}">Khám phá ngay</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="sidebar">
  <div style="border-bottom: 3px solid black;
width: 100%;
height: 50%;
text-align: center;">
    <i class="fa-solid fa-chevron-up fa-beat-fade fa-2xl"></i>
  </div>
  <div style="padding-top: 7px;">
    <i class="fa-solid fa-chevron-down fa-beat-fade fa-2xl"></i>
  </div>
</div>
</div>
`
        } else {
          htmlString +=
            `
  <div id="slide${url.id}" class="box-content show" data-id="${url.id} style="background-color:transparent ;">
  <div class="contain-upslide">
    <div class="card">
      <img src="${url.image}" alt="">
      <h2>${url.model}</h2>
    </div>
    <div class="card">
      <div class="product">
        <img src="${url.image_detail}" alt="">
        <div class="wrap-content">
          <div class="content-detail">
            <h2>${url.model}</h2>
            <p>Giá từ ${url.price} </p>
            <a class="showProdDetail" data-id="${url.id}" href="product-detail.html?id=${url.id}">Khám phá ngay</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <div style="border-bottom: 3px solid black;
  width: 100%;
  height: 50%;
  text-align: center;">
      <i class="fa-solid fa-chevron-up fa-beat-fade fa-2xl"></i>
    </div>
    <div style="padding-top: 7px;">
      <i class="fa-solid fa-chevron-down fa-beat-fade fa-2xl"></i>
    </div>
  </div>
  </div>
  `
        }
      });
      var containers = document.getElementsByClassName('wrapper');
      if (containers.length > 0) { // Kiểm tra xem có phần tử nào có lớp "wrapper" không
        containers[0].innerHTML = htmlString;
      }
      //  Up slide function

      var upArrows = document.querySelectorAll('.fa-chevron-up');
      var downArrows = document.querySelectorAll('.fa-chevron-down');
      var slides = document.querySelectorAll('.contain-upslide');

      for (let i = 0; i < upArrows.length; i++) {
        let x = 0;

        upArrows[i].onclick = function () {
          if (x > -500) {
            x -= 500;
            slides[i].style.top = x + "px";
          }
          // Đặt sự kiện scroll sau khi click up arrow
          setScrollEvent(slides[i]);
        }

        downArrows[i].onclick = function () {
          if (x < 0) {
            x += 500;
            slides[i].style.top = x + "px";
          }
        }
      }

      function setScrollEvent(slide) {
        // Sự kiện scroll của window
        window.addEventListener('scroll', function resetSlide() {
          slide.style.top = "0px";

          // Gỡ bỏ sự kiện scroll sau khi đã đặt lại vị trí của slide
          window.removeEventListener('scroll', resetSlide);
        });
      }





      // scroll effect
      // const boxes = document.querySelectorAll('.box-content');
      // checkBoxes();
      // window.addEventListener('scroll', checkBoxes);
      // function checkBoxes() {
      //   const triggerBottom = (window.innerHeight) / 5 * 3;
      //   boxes.forEach(box => {
      //     const boxTop = box.getBoundingClientRect().top
      //     if (boxTop < triggerBottom) {
      //       box.classList.add('show');
      //     } else {
      //       box.classList.remove('show');
      //     }
      //   })
      // }



      document.getElementById("filterButton").addEventListener("click", function () {
        const selectedValue = document.getElementById("productFilter").value;
        const targetSlide = document.getElementById(selectedValue);
        if (targetSlide) {
          window.scrollTo({
            top: targetSlide.offsetTop,
            behavior: "smooth"
          });
        } else {
          console.warn("Target slide not found:", selectedValue);
        }
      });
    })
    .catch(error => {
      console.error('Failed to retrieve car data:', error.message);
    });
};

// Khi trang tải xong, gọi hàm displayCars1
window.onload = () => {
  displayCars1();

  // Show content filter
  document.getElementById("btn-button").addEventListener("click", function () {
    const contentDiv = document.querySelector(".content-small");
    if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
      contentDiv.style.display = "block";
    } else {
      contentDiv.style.display = "none";
    }
  });

};
