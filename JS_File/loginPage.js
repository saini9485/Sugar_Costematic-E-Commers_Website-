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

//value.length==maxlength
/*Request Random Otp  Genration */
function OTP(){
//if("loginput"=="maxlength"){
    let randomOtp = Math.random();
  //let randomNumber = Math.floor(Math.random()*(10-1)+1)
  randomOtp = Math.floor(randomOtp * 10000);
  console.log("One Time Password:-"+ randomOtp);
 let reotp= localStorage.setItem("One Time Password:-",randomOtp)
 console.log(reotp)
 //localStorage.clear()
 let getotp = localStorage.getItem("One Time Password:-")
 console.log(getotp)
  if("reotp"=="getotp"){
    alert("match")
 }else{
    alert("not")
 }

}

//}
/*Verify OTP */
function Verify(){
    alert("Verify OTP")
}
   



  