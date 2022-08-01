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
    let itemQuantity = document.getElementById( 'itemsCarrito' );

   

    //cálculo del valor total de la compra
    let total = 0;
    let totalItems = 0;
    cart.forEach((product) => {
        total += product.quantity*product.price;
        totalItems += product.quantity;
    })

    itemQuantity.innerText = `(Hay ${totalItems} items agregados al carrito).`;
    elementTotal.innerText = `$${total}`;


    //funcionamiento del botón de comprar.
    let buyButton = document.getElementById('botonComprar');
    buyButton.addEventListener('click', (event) =>{
      Swal.fire({
        title: `El total de la compra es $${total}`,
        text: "Desea pagar la compra?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero pagar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Genial',
            `Su compra se ha realizado con éxito!`,
            'success',
            4000 
          )
        }
      })  
    })
}
