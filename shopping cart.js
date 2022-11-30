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

if (document.URL.indexOf("product") <= -1){
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click',() =>{
            cartNum(products[i]);
            total(products[i]);
            notification();
            localStorage.setItem([i], products[i].name);
            localStorage.setItem("q" + [i], localStorage.getItem("q" + [i]) + 1)
            localStorage.setItem("img" + [i], products[i].imgID);
        })
    }
}

if (document.URL.includes("product")){
    let url = window.location.href;
    let marker = url.indexOf("product");
    marker += 10;
    let pageNum = parseInt(url.substring(marker, marker + 1));
    carts[0].addEventListener('click',() =>{
        cartNum(products[pageNum - 1]);
        total(products[pageNum - 1]);
        notification();
        localStorage.setItem(pageNum - 1, products[pageNum - 1].name);
        localStorage.setItem("q" + (pageNum - 1), localStorage.getItem("q" + (pageNum - 1)) + 1)
        localStorage.setItem("img" + [i], products[i].imgID);
    })
}


function notification(){
    let submit = document.getElementById('added');
    document.getElementById('added').style.opacity = '1';
    document.getElementById('added').style.zIndex = '1';
    setTimeout(function(){
        submit.classList.toggle('fade');
        document.getElementById('added').style.opacity = '0';
    }, 2000);
    setTimeout(function(){
        submit.classList.toggle('fade');
        document.getElementById('added').style.zIndex = '-1';
    }, 4000);
}

function cartNum(product){
    let quantity = localStorage.getItem('quantity');
    quantity = parseInt(quantity);
    if(quantity){
        localStorage.setItem('quantity', quantity + 1);
    }
    else{
        localStorage.setItem('quantity', 1);
    }
    catologing(product);
}

function catologing(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){
        if(cartItems[product.name]==undefined){
            cartItems = {
                ...cartItems,
                [product.name]:product
            }
        }
        cartItems[product.name].incart += 1;
    }
    else{
        product.incart = 1;
        cartItems ={
            [product.name]:product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

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
    localStorage.setItem("totalPrice", 0);
    document.getElementById("incart").innerHTML = "<img src=\"empty.png\">";
    document.getElementById("total").innerHTML = "Total = RM 0";
}

function deleteItem(i){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalPrice = localStorage.getItem('totalPrice');
    if(totalPrice != null){
        totalPrice = parseInt(totalPrice)
        localStorage.setItem("totalPrice", totalPrice - products[i].price * cartItems[products[i].name].incart);
    }
    if (cartItems != null){
        if(cartItems[products[i].name]==undefined){
            cartItems = {
                ...cartItems,
                [products[i].name]:product
            }
        }
        cartItems[products[i].name].incart = 0;
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.removeItem("q"+i);
    localStorage.removeItem(i);
    localStorage.removeItem("img" + i);
    if(totalPrice == null || totalPrice == 0){
        totalPrice = 0
        localStorage.setItem("totalPrice", 0);
        document.getElementById("incart").innerHTML = "<img src=\"empty.png\">";
    }
    window.location.reload();
}

function addItem(i){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalPrice = localStorage.getItem('totalPrice');
    if(totalPrice != null){
        cartNum(products[i]);
            total(products[i]);
            localStorage.setItem([i], products[i].name);
            localStorage.setItem("q" + [i], localStorage.getItem("q" + [i]) + 1);
            localStorage.setItem("img" + [i], products[i].imgID);
    }
    if (cartItems != null){
        if(cartItems[products[i].name]==undefined){
            cartItems = {
                ...cartItems,
                [products[i].name]:product
            }
        }
        cartItems[products[i].name].incart += 1;
    }
    window.location.reload();
}

function minusItem(i){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalPrice = localStorage.getItem('totalPrice');
    let quantity= localStorage.getItem('quantity');
    if(totalPrice != null){
        localStorage.setItem("quantity", quantity - 1);
        totalPrice = parseInt(totalPrice)
        localStorage.setItem("totalPrice", totalPrice - products[i].price);
        localStorage.setItem("q" + [i], localStorage.getItem("q" + [i]).substring(1));
        localStorage.setItem("img" + [i], products[i].imgID);
    }
    if (cartItems != null){
        if(cartItems[products[i].name]==undefined){
            cartItems = {
                ...cartItems,
                [products[i].name]:product
            }
        }
        cartItems[products[i].name].incart -= 1;
    }
    console.log(localStorage.getItem("q" + [i]).length);
    if (localStorage.getItem("q" + [i]).length == 0){
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        localStorage.removeItem("q"+i);
        localStorage.removeItem(i);
        localStorage.removeItem("img" + i);
    }
    window.location.reload();
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
                document.getElementById("incart").innerHTML = incart + "<div id = \"product" + i + "\"> <li id=\"item"+ counter +"\"><div class=\"best1\" style=\"background-image: url('"+ products[i].imgID +"')\"><a href=\"product "+ counter +".html\"><div class=\"text\" style=\"font-family:verdana\"><strong>View Product</strong></div></a></div>";
                let item = document.getElementById("item" + counter).innerHTML;
                document.getElementById("item" + counter).innerHTML = item + "<div id = \"description\"> Name: " + localStorage.getItem(i.toString()) +
                "<br><br> Quantity: " + localStorage.getItem("q" + [i]).length + "<br><button class=\"delete\" onclick=\"deleteItem("+ i +")\">x</button><button class=\"minus\" onclick=\"minusItem("+ i +")\">-</button><button class=\"add\" onclick=\"addItem("+ i +")\">+</button> ";
            }
        }
    }
}

function checkCart(){
    let totalPrice = localStorage.getItem('totalPrice');
    if(totalPrice == 0){
        window.alert("CART IS EMPTY")
    }
    else{
        window.location.href = "checkout.html";
    }
}