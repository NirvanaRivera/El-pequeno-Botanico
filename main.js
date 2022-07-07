

// function ingresoMail() {
//     let mailIngresado = '';
//     let mailConfirmacion = '';
//     let mailVacio = false;
//     let mailDiferentes = false;

//     do {
//         mailIngresado = prompt('Ingrese su mail, por favor');
//         mailConfirmacion = prompt('Confirme su mail, por favor');
//         mailVacio = mailIngresado === '' || mailIngresado === null;
//         mailDiferentes = mailConfirmacion !== mailIngresado;
//         if (mailVacio) {
//             alert('No ingresó un mail, ingrese un mail por favor.');
//         } else if (mailDiferentes) {
//             alert('Los mails no son iguales, ingrese mails iguales por favor.');
//         }
//     } while (mailVacio || mailDiferentes);
//     return mailIngresado;
// }

// function ingresoContrasena() {
//     let contraseña = '';

//     do {
//         contraseña = prompt('Ingrese contraseña por favor.');
//         if (contraseña === null || contraseña.length < 6) {
//             alert('La contraseña debe tener 6 caractéres o mas.');
//         }
//     } while (contraseña === null || contraseña.length < 6);
//     return contraseña;
// }

// function ubicarNombreUsuario(mail) {
//     let elementoUsuario = document.getElementById('nombreUsuario');
//     elementoUsuario.innerText = mail;
// }

// function principal() {

//     const registro = confirm('Hola! Bienvenido a El pequeño Botánico, ¿desea registrase en la página?');

//     let mail;
//     if (registro) {
//         mail = ingresoMail();
//         let contrasena = ingresoContrasena();
//         alert(mail + ' Se ha registrado con exito!');
//     } else {
//         alert('Una pena, vuelve cuando quieras!');
//         mail = 'Anónimo';
//     }

//     ubicarNombreUsuario(mail);




//     productos = [
//         {nombre: 'jazmin', precio: 530, img: "img/jazmin.jpg"},
//         {nombre: 'lavanda', precio: 400, img: "img/lavanda.jpg"},
//         {nombre: 'menta', precio: 250, img: "img/menta.jpg"},
//     ]   

//     let listaDeProductos = [];

//     alert('Bienvenido '+ mail +' que productos desea comprar?');
//     let nombresYPrecios = '';
//     productos.forEach((producto) => nombresYPrecios += producto.nombre + ' a $' + producto.precio+ ', ');
//     do {
//         let compra = prompt('Escriba una de las opciones: ' + nombresYPrecios);
//         let productoSeleccionado = productos.find( (producto) => producto.nombre === compra);
//         if ( productoSeleccionado === undefined){
//             alert('No ha seleccionado un producto correcto, por favor vuelva a escribir el producto que desea comprar')      
//         }else{
//             listaDeProductos.push(productoSeleccionado)
//         }
     
//     } while (
//         confirm('Desea seguir comprando?')
//     );
    
//     let nombresProductos = [];

//     let precioProductos = 0;
    
//     listaDeProductos.forEach((producto) => nombresProductos.push(producto.nombre));

//     listaDeProductos.forEach((producto) => precioProductos += producto.precio);

//     if( nombresProductos.length > 0 ){
//         alert('Compraste ' + nombresProductos + ' y el total es: ' + precioProductos);
//     }else{
//         alert('Vuelva pronto ' + mail + ' !');
//     }

// }

// principal();


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

        let validaciones = [];

        if (password !== confirmPassword ){
            validaciones.push('Las contraseñas no coinciden.')
        }

        if (email.length === 0 || user.length === 0 || password.length === 0 || confirmPassword.length === 0 || telephoneNumber.length === 0 ){
            validaciones.push('Falta completar algún campo.')
        }

        if (checkTerms === false ){
            validaciones.push('No aceptó los términos y condiciones.')
        }

        console.log(validaciones);

        const formValidation = document.getElementById('formValidation');

        formValidation.innerHTML = '';

        validaciones.forEach(validacion => {
            let errorValidacion = document.createElement('li');
            errorValidacion.className = "alert alert-danger";

            errorValidacion.innerText = validacion;
            formValidation.append(errorValidacion);
        });

    })
}

productos = [
    {nombre: 'Jazmín', precio: 530, img: "img/jazmin.jpg"},
    {nombre: 'Lavanda', precio: 400, img: "img/lavanda.jpg"},
    {nombre: 'Menta', precio: 250, img: "img/menta.jpg"},
] 


productos.forEach(producto => {
    const card = ` 
        <div class="card m-2" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top pt-2" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre} - $${producto.precio}</h5>
        <p class="card-text">Breve descripcion del producto</p>
        <button class="btn btn-success botonCarrito" id="${producto.nombre}"> Agregar al Carrito</button>
        
        </div>
        </div>

        `

    let listaDeProductos = document.getElementById('listaDeProductos')

    listaDeProductos.innerHTML += card;

});

const carrito = [];

let elementosBotonesCompra = document.getElementsByClassName('botonCarrito');

for (const boton of elementosBotonesCompra) {
    boton.addEventListener('click', (event) => {
        let productoSeleccionado = productos.find( (producto) => {
            return producto.nombre === boton.id
        });
        console.log(productoSeleccionado);
        carrito.push(productoSeleccionado);
        console.log(carrito);
        let cantidadCarrito = document.getElementById('cantidadCarrito');
        cantidadCarrito.innerText = `( ${carrito.length} )`;
    });
    
}














