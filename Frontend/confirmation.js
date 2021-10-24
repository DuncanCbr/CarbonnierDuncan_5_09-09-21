let order = JSON.parse(sessionStorage.getItem('order'));

function ShowOrders()  {

  if(order){
    confirmation.innerHTML = 
    `
    <h1 class="thanku">Nous vous remercions ${order.contact.lastName} ${order.contact.firstName},<br>
      votre commande N°${order.orderId} a bien été enregistrée !
    </h1>
    <div class="container-confirmation">
      <div class="commande">
        Vous receverez votre commande dans un délais de 5 jours à l'adresse : ${order.contact.address}.
      </div>
    </div>
    `
    localStorage.clear();
    sessionStorage.clear();
  }
}


ShowOrders();
