import { registro } from "./components/registroIndex.js";
import { mostrarCarrito } from "./components/carritoIndex.js";
import { mostrarProductos } from "./components/productosIndex.js";
import updateCartNumber from "./controllers/cartNumber.js";


updateCartNumber();

const form = document.getElementById('formularioRegistro');
let cartList = document.getElementById('carrito');
const productList = document.getElementById('listaDeProductos');

if (cartList){
    mostrarCarrito(cartList);
}else if(productList){
    mostrarProductos(productList);
}else if(form){
    registro(form)
};


