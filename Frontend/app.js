// fichier commun à toutes les pages
const aCard = document.getElementById("link-products");
const card = document.getElementById("products");
const quantityCart = document.querySelector(".compteur-cart");
let panier = JSON.parse(localStorage.getItem('panier'));

getAllProducts = async (url)=>{
    try {
        let response = await fetch(url);
        if (response.ok){
            let products = await response.json();
            return products
        } else {
            console.log("La requête n'a pas abouti : " + response.status);
        }
    } catch (e) {
        console.error(e);
    }
}


getOneProduct = async (url)=>{
    try {
        let response = await fetch(url);
        if (response.ok){
            let product = await response.json();
            return product
        } else {
            console.log("La requête n'a pas abouti : " + response.status);
        }
    } catch (e) {
        console.error(e);
    }
}





function stockData(teddyID) {
    localStorage.setItem('currentTeddyID', teddyID);
}


function showQuantityCart() {
    let panier = JSON.parse(localStorage.getItem('panier'));
    if ( panier == null ) {
        quantityCart.textContent = O;
    } else {
        let total = 0;
        panier.forEach( teddy => {
            total += parseInt(teddy.quantity);
        });
        quantityCart.textContent = total;
    }
}

showQuantityCart();


