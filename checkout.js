var carts = document.querySelectorAll(".addToCart");

let products = [
    {
        name: 'Logitech Gpro Superlight',
        price: 600,
        incart: 0,
        imgID: 'logitech.jpg'
    },
    {
        name: 'Razer Basilisk Ultimate',
        price: 650,
        incart: 0,
        imgID: 'razer.jpg'
    },
    {
        name: 'Steelseries Rival 5 RGB',
        price: 320,
        incart: 0,
        imgID: 'steelseries.jpg'
    },
    {
        name: 'Asus ROG Chakram',
        price: 770,
        incart: 0,
        imgID: 'asus.jpg'
    },
    {
        name: 'Glorious Model O Wireless',
        price: 338,
        incart: 0,
        imgID: 'gmmk.jpg'
    },
    {
        name: 'Logitech G502 X',
        price: 660,
        incart: 0,
        imgID: 'g502.jpg'
    },
    {
        name: 'Razer Viper Ultimate',
        price: 499,
        incart: 0,
        imgID: 'viper.jpg'
    },
    {
        name: 'Corsair Dark Core Pro',
        price: 353,
        incart: 0,
        imgID: 'corsair.jpg'
    },
    {
        name: 'Finalmouse Starlight-12',
        price: 3320,
        incart: 0,
        imgID: 'final.jpg'
    }

]

function total(product){
    let totalPrice = localStorage.getItem('totalPrice');

    if(totalPrice != null){
        totalPrice = parseInt(totalPrice)
        localStorage.setItem("totalPrice", product.price + totalPrice);
    }
    else {
        localStorage.setItem("totalPrice", product.price);
    }
}

function clearCart(){
    localStorage.clear();
    document.getElementById("incart").innerHTML = "<img src=\"empty.png\">";
    document.getElementById("total").innerHTML = "Total = RM 0";
    window.location.href = "checkout1.html";
}

window.onload = updateTotal;
function updateTotal(){ 
    let totalPrice = localStorage.getItem('totalPrice');
    document.getElementById("total").innerHTML = "Total = RM " + localStorage.getItem('totalPrice');
    if(totalPrice == null || totalPrice == 0){
        totalPrice = 0
        localStorage.setItem("totalPrice", 0);
        document.getElementById("incart").innerHTML = "<img src=\"empty.png\">";
    }
    else {
        document.getElementById("incart").innerHTML = "";
        for (let i = 0; i < 9; i++) {
            if (localStorage.getItem(i.toString()) != null){
                let incart = document.getElementById("incart").innerHTML;
                let counter = i+1;
                document.getElementById("incart").innerHTML = incart + "<div id = \"product" + i + "\"> <li id=\"item"+ counter +"\"><div class=\"best1\" style=\"background-image: url('"+ products[i].imgID +"')\"></div>";
                let item = document.getElementById("item" + counter).innerHTML;
                document.getElementById("item" + counter).innerHTML = item + "<div id = \"description\"> Name: " + localStorage.getItem(i.toString()) +
                "<br><br> Quantity: " + localStorage.getItem("q" + [i]).length + "<br>";
            }
        }
    }
}
function Goback(){
    window.location.href = "main.html";
}