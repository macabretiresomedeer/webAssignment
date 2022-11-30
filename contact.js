function submitted(){
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById('email').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('contact').value = '';
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