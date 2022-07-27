import productosController from "../controllers/productosController.js";
import cart from "../controllers/cartController.js";
import updateCartNumber from "../controllers/cartNumber.js";

export const mostrarProductos = async (productList) =>{
    //crea una card para cada prodcuto
    const products = await productosController();

    products.forEach(product => {
        const card = ` 
            <div class="card m-2" style="width: 18rem;">
            <img src="${product.img}" class="card-img-top pt-2" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.name} - $${product.price}</h5>
            <p class="card-text">Breve descripcion del producto</p>
            <button class="btn btn-success botonCarrito" id="${product.name}"> Agregar al Carrito</button>
            
            </div>
            </div>`

        productList.innerHTML += card;
    });




    let buyButtonElements = document.getElementsByClassName('botonCarrito');

    const addToCart = (selectedProduct) => {
        //funcionalidad de agregar al carrito
        let exist = cart.find(element => element.name === selectedProduct.name);
            console.log('existe?', exist);
            console.log('prod seleccionado', selectedProduct);
            if(exist){
                exist.quantity++;
                console.log(cart);
            }else{
                cart.push({ ...selectedProduct, quantity: 1 });
                console.log(cart);
            }

            localStorage.setItem('carrito', JSON.stringify(cart));
            updateCartNumber();
            
            //alerta al usuario
            Swal.fire({
                title: 'Genial',
                text: `Tu producto "${selectedProduct.name}" se ha añadido al carrito`,
                icon: 'success',
                timer: 4000 
            });   
    }

    for (const button of buyButtonElements) {
        //agrega al carrito con el evento 'click'
        button.addEventListener('click', (event) => {
            let selectedProduct = products.find( (product) => {
                return product.name === button.id
            });
            addToCart(selectedProduct);
        });
      
    }
}

