function ShowOrders()  {
    let orderContact = JSON.parse(sessionStorage.getItem('contact'));
    let orderId = JSON.parse(sessionStorage.getItem('orderId'));



    confirmation.innerHTML = 
    `
    <h1 class="thanku">Nous vous remercions ${orderContact.lastName} ${orderContact.firstName},<br>
      votre commande N°${orderId} a bien été enregistrée !
    </h1>
    <div class="container-confirmation">
      <div class="commande">
        Vous receverez votre commande dans un délais de 5 jours à l'adresse : ${orderContact.address}.
      </div>
    </div>
    `
}


ShowOrders();