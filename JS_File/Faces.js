var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input.value}&product_category%20%20Cream`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i =115; i < 135; i++) { 
        let makeup = data[i];
        //console.log(makeup)
        let result = `<div class ="Makeup"> 
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <h5 class="Makeup_Name">  ${makeup.name}</h5
             <h2 class="Makeup_Price">  Price $${makeup.price}</h2>
                <p> rating<i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
       
                 <div class="heart-btn">
                 <div class="heart"><i class="fa-regular fa-heart"></i></div>
                 <div class="btn"><h4>Add To Cart</h4></div>
             </div>
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});
