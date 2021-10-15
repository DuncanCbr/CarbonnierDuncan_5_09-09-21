const btnConfirm = document.querySelector('.confirmation');
let contact = {};
let products = [];
let commande = {};


function showPanier() {
    panier.forEach((teddy,index) => {
        
        paniers.innerHTML += 
        `
            <div class="teddy-container">
                <div class="img-teddy-panier">
                    <img src="${teddy.imageUrl}" class="imgTeddy"></img>
                </div>
                <div class="container-info-panier">
                    <div class="responsive-name">
                        <p class="title-article">${teddy.name}</p>
                        <p> <span class="weight-txt">couleur</span> : ${teddy.color}</p>
                    </div>
                    <div class="quantity">
                        <p> <span class="weight-txt">quantité</span>: ${teddy.quantity}</p>
                    </div>
                    <div class="price">
                        <p> prix unitaire : ${teddy.price}€</p>
                        <button class="suppr" onclick="deleteTeddy('${index}')">supprimer</button>
                    </div>
                </div>
            </div>
        `
    })
}

showPanier();

function deleteTeddy(id) {
    panier.splice(id, 1);
    localStorage.setItem('panier',JSON.stringify(panier));
    location.reload();
    showPanier();
}


function showPrice() {
    const totalPrice = document.getElementById('totalPrice');
    let panier = JSON.parse(localStorage.getItem('panier'));
        if ( panier == null ) {
            totalPrice.textContent = `Total : ${0}€`;
        } else {
            let total = 0;
            panier.forEach( teddy => {
                total += parseInt(teddy.price * teddy.quantity);
            });
            totalPrice.textContent = `Total : ${total}€`;
        }
};

showPrice();



// formulaire panier -------------------------------------------------

const form = document.querySelector('#commandeForm');


// zone de verification des inputs ----------------------------------

form.lastName.addEventListener('change', () => {
    validNom(form.lastName);
});

form.firstName.addEventListener('change', () => {
    validPrenom(form.firstName);
});

form.email.addEventListener('change', () => {
    validMail(form.email);
});

form.address.addEventListener('change', () => {
    validAdresse(form.address);
});

form.city.addEventListener('change', () => {
    validVille(form.city);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validNom(form.lastName) && validPrenom(form.firstName) && validMail(form.email) && validAdresse(form.address) &&  validVille(form.city) == true){
        contact = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            address: form.address.value,
            city: form.city.value,
        }
        panier.forEach(teddy => {
            products.push(teddy._id);
        });
        commande = JSON.stringify({
            contact,
            products
        });
        sendOrders('http://localhost:3000/api/teddies/order', commande).then(response => 
        {
            sessionStorage.setItem('contact', JSON.stringify(response.contact));
            sessionStorage.setItem('orderId', JSON.stringify(response.orderId));
        })
        localStorage.clear();
        window.location='confirmation.html';
    }
});

// zone des functions

function validNom(inputLastName) {
    let lastNameRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testLastName = lastNameRegex.test(inputLastName.value);
    let message = inputLastName.nextElementSibling;

    if (testLastName == false) {
        message.innerHTML = 'Nom : champs non conforme';
        return false;
    } else {
        message.innerHTML ='';
        return true;
    }
};



function validPrenom(inputFirstName) {
    let firstNameRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testFirstName = firstNameRegex.test(inputFirstName.value);
    let message = inputFirstName.nextElementSibling;

    if (testFirstName == false) {
        message.innerHTML = 'Prénom : champs non conforme';
        return false;
    } else {
        message.innerHTML ='';
        return true;
    }
};

function validMail(inputEmail) {
    let emailRegex = new RegExp(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i);
    let testEmail = emailRegex.test(inputEmail.value);
    let message = inputEmail.nextElementSibling;

    if (testEmail == false) {
        message.innerHTML = 'Mail : champs non conforme';
        return false;
    } else {
        message.innerHTML ='';
        return true;
    }
};
function validAdresse(inputAddress) {
    let addressRegex = new RegExp(/^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/i);
    let testAddress = addressRegex.test(inputAddress.value);
    let message = inputAddress.nextElementSibling;

    if (testAddress == false) {
        message.innerHTML = 'Adresse : champs non conforme';
        return false;
    } else {
        message.innerHTML ='';
        return true;
    }
};
function validVille(inputCity) {
    let cityRegex = new RegExp(/^[a-zA-Z- ]+$/i);
    let testCity = cityRegex.test(inputCity.value);
    let message = inputCity.nextElementSibling;

    if (testCity == false) {
        message.innerHTML = 'Ville : champs non conforme';
        return false;
    } else {
        message.innerHTML ='';
        return true;
    }
};

