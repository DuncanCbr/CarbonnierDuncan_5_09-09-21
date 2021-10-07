let teddies;

getAllProducts("http://localhost:3000/api/teddies")
 .then(data => {
    teddies = data;
    teddiesDisplay();
})



async function teddiesDisplay() {
    if (teddies === null) {
        result.innerHTML ="<h2> Aucun résultat </h2>";
    }else{
        await teddies.forEach((teddy) => {
            
            products.innerHTML += `
            <a href="produit.html" onclick="stockData('${teddy._id}')">
                <div class="card">
                    <div class="container-img">
                        <img src="${teddy.imageUrl}" class="img-card" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${teddy.name}</h5>
                        <p class="card-text">${teddy.description}</p>
                    </div>
                </div>
            </a>
            `;
        });
    };
};

