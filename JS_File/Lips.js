var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input.value}&product_type=lipstick`
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
             <h3 class="Makeup_Name">  ${makeup.name}</h3
             <h2 class="Makeup_Price">  Price $${makeup.price}</h2>
                <p> rating<i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
                 
        <div id="bot_div">
       <img src="data:image/jpeg;base64,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" class="like">
        <h4> Add to Cart</h4>
        </div>
        </div>`;

        // // //  <span class="De">Details:-</span><a href="Detail.html" class=" Details">Show Details</a>
        //         </div> ;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});
