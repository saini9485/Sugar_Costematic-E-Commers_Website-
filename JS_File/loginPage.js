/*1.  JS Start For INPUT And OTP FOR next And Previous */
function move(e,p,c,n){
   var length = document.getElementById(c).value.length
var maxlength = document.getElementById(c).getAttribute("maxlength")
if(length==maxlength){
    if(n!==''){
        document.getElementById(n).focus();
    }
}
if(e.key=="Backspace"){
    if(p!==''){
        document.getElementById(p).focus();
    }
}
// console.log(e.key)
}
/*1.  JS End For INPUT And OTP FOR next And Previous */


/*OTP Random Otp  Genration */
  let requestOtp1 = document.getElementByIdName("requestptp");
 requestOtp1.addEventListener("click", function () {
  let randomOtp = Math.random();
  //let randomNumber = Math.floor(Math.random()*(10-1)+1)
  randomOtp = Math.floor(randomOtp * 10000);
  alert("One Time Password:-"+ randomOtp);
  console.log(randomOtp); 
});

    
// let login =  document.getElementsByName("#requestptp");

/*close Area */
// let closed = document.querySelector(".close");
// let mainLogin = document.querySelector(".mainLoginPage")

// closed.addEventListener("click", function () {
//     if( mainLogin.style.display="block"){
//         mainLogin.style.display="none"
//     } 
//   });

  