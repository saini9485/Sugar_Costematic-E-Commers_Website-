/* OTP Area start JS */

function move(e,p,c,n){
    // console.log(e)
   var length = document.getElementById(c).value.length
//    console.log(length)
var maxlength = document.getElementById(c).getAttribute("maxlength")
// console.log(length, maxlength)
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
/* OTP Area end JS */