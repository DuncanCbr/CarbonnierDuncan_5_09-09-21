function showConfirmation()  {

    
    panier.forEach(teddy => {
        detail.innerHTML += 
            `
                <div class="card-detail">
                    <div class="container-img-detail">
                        <img src="${teddy.imageUrl}" class="img"></img>
                    </div>
                    <div class="detail-box">
                        <p class="name">${teddy.name}</p>
                        <p class="choosen-color">${teddy.color}</p>
                        <p class="choosen-quantity">quantité : ${teddy.quantity}</p>
                    </div>
                </div>
            `
    });
}

showConfirmation();