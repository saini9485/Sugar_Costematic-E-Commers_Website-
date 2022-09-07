 //let container = document.getElementsByClassName("container")
// let btn1 = document.getElementByIdName("savebtn")

 function succeful (){
//    // MainRegisterPage.style.display="none"
//    // container.style.display="block"
//    //if("userfirstname.length>5"){

     alert("  congratulation Account Created successful")
//    //}else {

    //} alert("name is too short")
 }




/*Close Function */
function closed (){
    MainRegisterPage.style.display="none"
}

// Ok For Js 
// function okay (){
//     container.style.display="none"
// }



function seterror(id, error){
    element = document.getElementById(id)
    element.getElementsByClassName("formerror")[0].innerHTML=error
}

function validateform(){
    var returnval =true;
    var name = document.form["myForm"]["First-Name"].value
    if(name.length<5){
        seterror("name","length is too sort")
    }
    return returnval;
}