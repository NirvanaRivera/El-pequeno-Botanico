
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

for (const button of buyButtonElements) {
    button.addEventListener('click', (event) => {
        let selectedProduct = products.find( (product) => {
            return product.name === button.id
        });

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
    });
}
