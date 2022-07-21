
const form = document.getElementById('formularioRegistro');

if (form){

    form.addEventListener('submit', (e) => {
        
        e.preventDefault();

        const email = document.getElementById('inputEmail').value;
        const user = document.getElementById('inputUser').value;
        const password = document.getElementById('inputPassword').value;
        const confirmPassword = document.getElementById('inputConfirmPassword').value;
        const telephoneNumber = document.getElementById('inputNumber').value;
        const checkTerms = document.getElementById('checkTerms').checked;

        console.log(email, user, password, confirmPassword, telephoneNumber, checkTerms);

        let validations = [];

        if (password !== confirmPassword ){
            validations.push('Las contraseñas no coinciden.')
        }

        if (email.length === 0 || user.length === 0 || password.length === 0 || confirmPassword.length === 0 || telephoneNumber.length === 0 ){
            validations.push('Falta completar algún campo.')
        }

        if (checkTerms === false ){
            validations.push('No aceptó los términos y condiciones.')
        }

        console.log(validations);

        const formValidation = document.getElementById('formValidation');

        formValidation.innerHTML = '';

        validations.forEach(validation => {
            let validationError = document.createElement('li');
            validationError.className = "alert alert-danger";

            validationError.innerText = validation;
            formValidation.append(validationError);
        });

    })
}

products = [
    {name: 'Romero', price: 450, img: "img/romero.png"},
    {name: 'Jazmín', price: 530, img: "img/jazmin.jpg"},
    {name: 'Menta', price: 250, img: "img/menta.jpg"},
    {name: 'Lavanda', price: 400, img: "img/lavanda.jpg"}
] 

let productList = document.getElementById('listaDeProductos');

if (productList){
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
}

const cart = JSON.parse(localStorage.getItem("carrito") ) || [];
console.log(cart);

const updateCartNumber = () => { 
    let total = 0;
    cart.forEach((product) => {
        total += product.quantity;
    })

    let cartQuantity = document.getElementById('cantidadCarrito');
    cartQuantity.innerText = `( ${total || 'vacío'} )`;
};

updateCartNumber();

let buyButtonElements = document.getElementsByClassName('botonCarrito');

const addToCart = (selectedProduct) => {
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

        Swal.fire({
            title: 'Genial',
            text: `Tu producto "${selectedProduct.name}" se ha añadido al carrito`,
            icon: 'success',
            timer: 4000 
        });   
}

for (const button of buyButtonElements) {
    button.addEventListener('click', (event) => {
        let selectedProduct = products.find( (product) => {
            return product.name === button.id
        });
        addToCart(selectedProduct);
    });
   
}

let cartList = document.getElementById('carrito');

if (cartList){
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
        `

        cartList.innerHTML += card;
    });
}

let elementTotal = document.getElementById('total');

let total = 0;
cart.forEach((product) => {
    total += product.quantity*product.price;
})

elementTotal.innerText = `$${total}`;


