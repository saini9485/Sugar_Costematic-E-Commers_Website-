// var input = document.querySelector(".search");
// var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
// addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 100; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `<div class ="Makeup"> 
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <h5 class="Makeup_Name">  ${makeup.name}</h5
             <h2 class="Makeup_Price">  Price ${makeup.price_sign} ${makeup.price}</h2>
                <p> rating<i class="fa fa-star" aria-hidden="true"></i>4.6
                 (125)</p> 
                 <div class="heart-btn">
                 <div class="heart"><i class="fa-regular fa-heart"></i></div>
                 <div class="btn"><h4 style="color:white">Add To Cart</h4></a></div>
             </div>

        </div>`;
        
      //  let cart=document.createElement("p");
      //  cart.innerText="Add to Cart";
      //  cart.addEventListener("click",function(){
      //      window.location="cart.html";
      //      let obj ={
      //          img:makeup.image_link,
      //          price:makeup.price,
      //          qty:1
      //      }
      //      var arr =JSON.parse(localStorage.getItem("cartItems"));
      //      arr.push(obj);
      //      localStorage.setItem("cartItems",JSON.stringify(arr));
      //  })

        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
//});
