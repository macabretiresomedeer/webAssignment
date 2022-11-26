window.onload = codeAddress;
function codeAddress(){
    document.getElementById("slideshow").style.backgroundImage = "url('banner2.jpg')";
    setTimeout(function(){
        document.getElementById("slideshow").style.backgroundImage = "url('banner3.jpg')";
    }, 3000);
    setTimeout(function(){
        document.getElementById("slideshow").style.backgroundImage = "url('banner1.jpg')";
    }, 6000);
}
setInterval(codeAddress, 9000)

function submitted(){
    document.getElementById('email').value = '';
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
