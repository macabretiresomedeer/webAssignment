function submitted(){
    if(document.getElementById('fname').value == ""){
        alert("pls enter firstname");
    }
    else if(document.getElementById('lname').value == ""){
        alert("pls enter lastname");
    }
    else if(document.getElementById('email').value == ""){
        alert("pls enter email");
    }
    else if(document.getElementById('contact').value == ""){
        alert("pls enter contact");
    }
    else{
        console.log("penis");
        document.getElementById('email').value = "";
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('contact').value = "";
        let submit = document.getElementById('submitted');
        document.getElementById('submitted').style.opacity = '1';
        setTimeout(function(){
            submit.classList.toggle('fade');
            document.getElementById('submitted').style.opacity = '0';
        }, 2000);
        setTimeout(function(){
            submit.classList.toggle('fade');
        }, 4000);
    }
}
