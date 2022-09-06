var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(` http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${input.value}`) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      //  console.log(data)
    //     container.innerHTML = ""
      for(let i = 0;i<data.length;i++){ 
        let makeup = data[i].brand;
       // console.log(makeup)
        let result = `<div class ="Makeup">
             <h2 class="Makeup_Name"> Makeup Name :-${makeup.name}</h2>`
             console.log(result)
    //      <img src="${makeup.image}" class="image" alt="image" > 
    // // //  <span class="De">Details:-</span><a href="Detail.html" class=" Details">Show Details</a>
    //         </div> ;
    //     container.innerHTML += result; 
       };
    })
    // .catch((err) => alert("Nothing found"));
});