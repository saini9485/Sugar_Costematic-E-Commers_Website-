const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});





// --------------------------------------------skin care api-------------------------//

var input = document.getElementById("input");
var skincare = document.getElementById("skincare");
var container = document.getElementById("skincare_product_area");
var moisture = document.getElementById("moisture");
var sunscream = document.getElementById("sunscream");
var setting = document.getElementById("setting");
var cofee = document.getElementById("cofee");
var sheet = document.getElementById("sheet");
var citrus = document.getElementById("citrus");
var aquaholic = document.getElementById("aquaholic");








skincare.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});



moisture.onclick = function () {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 150; i < 200; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
};

sunscream.addEventListener("click", function () {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 11; i < 80; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});

setting.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 90; i < 100; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});

cofee.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 0; i < 50; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});

citrus.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 30; i < 70; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});

sheet.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});

aquaholic.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});





// --- action for btns---//


// var wishlist = document.getElementById("heartimg");

// wishlist.addEventListener("click",function(){
//   wishlist.style.color="red";
// })




