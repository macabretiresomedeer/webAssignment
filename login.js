function login(){
    var status = document.getElementById("buttonLOG").innerHTML;
    if(status == "LOG OUT"){
        localStorage.setItem("username", "");
    }
    else{
        if(document.getElementById("fname").value == "" || document.getElementById("lname").value == ""){
            alert("PLS ENTER USERNAME OR PASSWORD");
        }
        else{
            var nameValue = document.getElementById("fname").value;
            localStorage.setItem("username", nameValue);
        }
    }
    logged();
}

window.onload = logged;
function logged(){
    if(localStorage.getItem("username") != ""){
        console.log("pebnis");
        document.getElementById("inner").innerHTML = "<div style=\"text-align:center;\"> LOGGED IN AS " + localStorage.getItem("username") +"</div><br>";
        document.getElementById("buttonLOG").innerHTML = "LOG OUT";
    }
    if(localStorage.getItem("username") == "null" || localStorage.getItem("username") == ""){
        document.getElementById("inner").innerHTML = "<div style=\"left = 18%;\"> Username:<br>" +
        "<input type=\"text\" id=\"fname\" name=\"fname\" size=\"80\"><br><br>" +
        "Password:<br>" +
        "<input type=\"text\" id=\"lname\" name=\"lname\" size=\"80\"><br><br></div>";
        document.getElementById("buttonLOG").innerHTML = "LOGIN";
    }
}

function Goback1(){
    window.location.href = "index.html";
}