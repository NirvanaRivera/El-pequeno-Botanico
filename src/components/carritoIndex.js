import cart from "../controllers/cartController.js";

export const mostrarCarrito = (cartList) =>{
    //visualización de los elementos del carrito
    cart.forEach(product => {
      const card = ` 
        <div class="card mb-4" style="background-color: #d2f8d9;">
                <div class="card-body p-4">
      
                  <div class="row align-items-center">
                    <div class="col-md-2">
                      <img src="${product.img}"
                        class="img-fluid" alt="Generic placeholder image">
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Nombre</p>
                        <p class="lead fw-normal mb-0">${product.name}</p>
                      </div>
                    </div>
                  
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Cantidad</p>
                        <p class="lead fw-normal mb-0">${product.quantity}</p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Precio</p>
                        <p class="lead fw-normal mb-0">$${product.price}</p>
                      </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Total</p>
                        <p class="lead fw-normal mb-0">$${product.price*product.quantity}</p>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
      `;
      cartList.innerHTML += card;
    });

    let elementTotal = document.getElementById('total');

    //cálculo del valor total de la compra
    let total = 0;
    cart.forEach((product) => {
        total += product.quantity*product.price;
    })

    elementTotal.innerText = `$${total}`;
}
