import cart from "./cartController.js";

const updateCartNumber = () => { 
    //muestra la cantidad de productos en el carrito en el header.
    let total = 0;
    cart.forEach((product) => {
        total += product.quantity;
    })

    let cartQuantity = document.getElementById('cantidadCarrito');
    cartQuantity.innerText = `( ${total || 'vacío'} )`;
};

export default updateCartNumber;