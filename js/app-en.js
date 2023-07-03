window.addEventListener('load', ()=> {
    const form = document.getElementById('my-form')
    const nombre = document.getElementById('nombre-cliente')
    const direccion = document.getElementById('direccion')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    // const comentario = document.getElementById('comentario')
    
    form.addEventListener('keyup', () => {
        // e.preventDefault()
         validaCampos()
     })
    
    const validaCampos = () => {
       // captura de datos ingresados
       const nombreValor = nombre.value.trim();
       const direccionValor = direccion.value.trim();
       const emailValor = email.value.trim();
       const telefonoValor = telefono.value.trim();
    //    const comentarioValor = comentario.value.trim();
    
    //     //validando nombre y direccion
    //    (!nombreValor) ? validaFalla(nombre, 'This data is required') : validaOk(nombre);
    //    (!direccionValor) ? validaFalla(direccion, 'This data is required') : validaOk(direccion);

    // valida nombre
    if (!nombreValor){
      validaFalla(nombre, "This data is required")
    } else if (nombreValor.length < 4){
    validaFalla(nombre, "At least 4 characters required")
    } else {
     validaOk(nombre);
    }
    
  
    //valida direccion
    if (!direccionValor){
       validaFalla(direccion, "This data is required")
    } else if (direccionValor.length < 8){
      validaFalla(direccion, "At least 8 characters required")
    } else {
      validaOk(direccion);
    }

       // validando mail
        if (!emailValor){
            validaFalla(email, 'This data is required')
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'The email is not valid')
        }else { validaOk(email)  } 
        
        // validando el telefono
        if(!telefonoValor){
            validaFalla(telefono, 'This data is required')
        }else if(!validaTelefono(telefonoValor)){
            validaFalla(telefono, 'only numbers without spaces, or parentheses, or signs')
        } else if(telefonoValor[0] != '0') {   
            validaFalla(telefono,"don't forget to start with 0") 
        } else if(telefonoValor.length != 11) {   
            validaFalla(telefono,'missing or excess numbers')            
        }else {validaOk(telefono)}
        
    
       
                              
    
    } ;      
    const validaFalla = (input,msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
    
        formControl.className = 'control falla'
    }
    const validaOk = (input,msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'control ok'
    }
    const validaEmail = (email) =>{
        return /^[a-zA-Z0-9_-]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email);
    }
    const validaTelefono = (telefono) =>{
        return /^[0-9]+$/.test(telefono);
    }
    
    
    })

    var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Your order've sent!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Ups! There was a problem. Please, try again later.";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML =
      "Ups! There was a problem. Please, try again later.";
    });
}
form.addEventListener("submit", handleSubmit)