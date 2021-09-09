// fichier commun à toutes les pages

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
