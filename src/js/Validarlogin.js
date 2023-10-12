document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formulario');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para validar primero.

    const email = document.getElementById('emailHelp').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
    } else if (email === 'evazquez0691@gmail.com' && password === '123456789') {
      window.location.href = 'pantallaMapa.html';
    } else {
      alert('Credenciales incorrectas. Por favor, ingrese un correo y contraseña válidos.');
    }
  });
});






// const form = document.getElementById('formulario');

// form.addEventListener('submit', function(event) {
//   const email = document.getElementById('email').value;
//   console.log('Tu email es: ', email);
//   const password = document.getElementById('password').value;
//   console.log('Tu contraseña es: ', password);

//   if (email === 'evazquez0691@gmail.com' && password === '123456789') {
//     // Las credenciales son correctas, redirige al usuario a la página deseada.
//     window.open('pantallaMapa.html');
//   } else {
//     alert('Credenciales incorrectas. Por favor, ingrese un correo y contraseña válidos.');
//     event.preventDefault();
//   }
// });





// const form = document.getElementById('formulario');

// form.addEventListener('submit',function(event) {
//   const email = document.getElementById('email').value;
//   console.log('Tu email es: ',email);
//   const password = document.getElementById('password').value;
//   console.log('Tu contraseña es: ',password);
//   const emailRegex = /^\S+@\S+\.\S+$/;
  
//   if (!emailRegex.test(email)) {
//     alert('Ingrese un correo electrónico válido.');
//     event.preventDefault();
//   } 
//   else{
//     if (password.length < 8) {
//       alert('La contraseña debe tener al menos 8 caracteres.');
//       event.preventDefault();
//     }
//     else{
//       window.open("pantallaMapa.html");
//       }
//       //window.location.replace = "L:/FACULTAD/urquiza2018/DS/2do/Practica Profesionalizante 1/Remplazapp/Proyecto-Practica-Profesional-Gonzalo(para entregar/Proyecto-Practica-Profesional-Gonzalo/pantallaMapa.html";
//       //window.location.replace("../pantallaMapa.html");
      

//     }
  
//   window.open("pantallaMapa.html");
//   return true;  
// });


 // if (email !== 'evazquez0691@gmail.com' || password !== '123456789') {
  //   alert('Credenciales incorrectas. Por favor, ingrese un correo y contraseña válidos.');
  //   event.preventDefault();
  // } else {
  //   // Las credenciales son correctas, redirige al usuario a la página deseada.
  //   window.open("pantallaMapa.html");
  // }
  //window.location.replace = "L:/FACULTAD/urquiza2018/DS/2do/Practica Profesionalizante 1/Remplazapp/Proyecto-Practica-Profesional-Gonzalo(para entregar/Proyecto-Practica-Profesional-Gonzalo/pantallaMapa.html";
  
 //window.location.replace("../pantallaMapa.html");