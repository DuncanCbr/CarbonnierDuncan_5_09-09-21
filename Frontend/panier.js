

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
    console.log(panier);
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

function sendOrder () {
    
}


// formulaire panier -------------------------------------------------

const form = document.querySelector('#commandeForm');


console.log(form.nom);

// zone de verification des inputs ----------------------------------

form.nom.addEventListener('change', () => {
    validNom(form.nom);
});
form.prenom.addEventListener('change', () => {
    validPrenom(form.prenom);
});
form.mail.addEventListener('change', () => {
    validMail(form.mail);
});

form.adresse.addEventListener('change', () => {
    validAdresse(form.adresse);
});

form.ville.addEventListener('change', () => {
    validVille(form.ville);
});

// zone des functions

function validNom(inputNom) {
    let nomRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testNom = nomRegex.test(inputNom.value);
    console.log(inputNom.value);
    let message = inputNom.nextElementSibling;

    if (testNom == false) {
        message.innerHTML = 'Nom : champs non conforme';
    } else {
        message.innerHTML ='';
    }
};



function validPrenom(inputPrenom) {
    let prenomRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testPrenom = prenomRegex.test(inputPrenom.value);
    let message = inputPrenom.nextElementSibling;

    if (testPrenom == false) {
        message.innerHTML = 'Prénom : champs non conforme';
    } else {
        message.innerHTML ='';
    }
};

function validMail(inputMail) {
    // changer la regex 
    let mailRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testMail = mailRegex.test(inputMail.value);
    let message = inputMail.nextElementSibling;

    if (testMail == false) {
        message.innerHTML = 'Mail : champs non conforme';
    } else {
        message.innerHTML ='';
    }
};
function validAdresse(inputAdresse) {
    // changer la regex : espace et chiffre possible 
    let adresseRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testAdresse = adresseRegex.test(inputAdresse.value);
    let message = inputAdresse.nextElementSibling;

    if (testAdresse == false) {
        message.innerHTML = 'Adresse : champs non conforme';
    } else {
        message.innerHTML ='';
    }
};
function validVille(inputVille) {
    // changer la regex : ( possibilité de caractère spéciaux à prendre en compte)
    let villeRegex = new RegExp(/^[a-zA-Z]+$/i);
    let testVille = villeRegex.test(inputVille.value);
    let message = inputVille.nextElementSibling;

    if (inputVille == false) {
        message.innerHTML = 'Ville : champs non conforme';
    } else {
        message.innerHTML ='';
    }
};

// changer tout les noms pour les faire correspondre avec le back-end