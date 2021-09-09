let teddies;


getAllProducts("http://localhost:3000/api/teddies")
.then(data => {
    teddies = data;
    teddiesDisplay();
})



function teddiesDisplay() {
    if (teddies === null) {
        result.innerHTML ="<h2> Aucun résultat </h2>";
    }else{
        teddies.forEach(teddy => {
            
            products.innerHTML +=  
            `
            <img src="${teddy.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${teddy.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
        });
    };
}

