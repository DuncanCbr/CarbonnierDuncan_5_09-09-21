const up = document.getElementById('chev-right');
const down = document.getElementById('chev-left');

let teddies;
let choosenTeddyID = localStorage.getItem('currentTeddyID');
let choosenNumberTeddy = 1;
let currentTeddy = {};

getOneProduct("http://localhost:3000/api/teddies/" + choosenTeddyID)
    .then(data => {
        let teddy = data;
        currentTeddy = {
            ...teddy
        }
        showTeddy(teddy);
    })


function showTeddy(teddy) {

    let colorHTML = "";
    teddy.colors.forEach(color => {
        colorHTML += 
        `
            <option value="${color}" class="tan">${color}</option>
        `
    });
    description.innerHTML =
            `
            <div class="card-produit">
                <div class="box-img-produit">
                    <img src="${teddy.imageUrl}" class="img-produit" alt="...">
                </div>
                <div class="produit-body">
                    <h5 class="produit-title">${teddy.name}</h5>
                    <p class="produit-text">${teddy.description}</p>
                    <p class="color-container">
                        <label for="color" class="label-color"> Quelle couleur désirez vous ?</label>
                        <select name="Couleur" id="couleur" class="selection">
                            ${colorHTML}
                        </select>
                    </p>
                    <div class="amount-teddy">
                        <p class="amount-text">
                            combien en désirez vous ?
                        </p>
                        <div class="compteur-amount">
                            <span>
                            <i class="fas fa-chevron-left" id="chev-left" onclick="lessTeddy()"></i>
                            </span> 
                            <p id="nombreTeddy">1</p>
                            <span >
                                <i class="fas fa-chevron-right" id="chev-right" onclick="addTeddy()"></i>
                            </span>
                        </div>
                        </div>
                        <p class="price"> Prix Unitaire : ${teddy.price}€</p>
                    <a href="panier.html" onclick="stockPanier()"><button class="add-panier">Ajouter au panier</button>
                </div>
            </div>
            `;
};


function addTeddy() {
    const nombreTeddy = document.getElementById('nombreTeddy');
    choosenNumberTeddy ++;
    nombreTeddy.textContent = choosenNumberTeddy;
};

function lessTeddy() {
    const nombreTeddy = document.getElementById('nombreTeddy');
    choosenNumberTeddy --;
    nombreTeddy.textContent = choosenNumberTeddy;
};

let isAlreadyTeddyInCart = false;

function stockPanier() {
    currentTeddy = {
        _id: choosenTeddyID,
        imageUrl: currentTeddy.imageUrl,
        name: currentTeddy.name,
        color: couleur.value,
        quantity:  nombreTeddy.textContent,
        price: currentTeddy.price
    }
    let panier = JSON.parse(localStorage.getItem('panier'));
    if (panier == null){
        panier = []
        panier.push(currentTeddy);
    } else {
        panier.forEach(teddy => {
            if (teddy._id == currentTeddy._id && teddy.color == currentTeddy.color) {
                teddy.quantity = parseInt(teddy.quantity) + parseInt(currentTeddy.quantity);
                isAlreadyTeddyInCart = true;
                return;
            }
        }); 
        if (!isAlreadyTeddyInCart){
            panier.push(currentTeddy);    
        }
    }
    localStorage.setItem('panier', JSON.stringify(panier));
}