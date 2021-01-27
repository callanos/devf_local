  var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: "l33t" },
    { nombre: "Maui", saldo: 67, password: "123" },
    { nombre: "Sandra", saldo: 300, password: '4321' }
  ];

  var passwordCuenta = null;
  var pos;

  function pedirPassword(msj){
    passwordCuenta = prompt(msj);
    return passwordCuenta;
  }

  function mostrarMsg(mjs){
    console.log(msj);
  }

  function cajeroLogIn() {
      var nombreCuenta = prompt("Ingrese nombre de la cuenta: ");
      //Se recorre objeto para validar existencia de la cuenta, si existe solicita clave
      for(i=0; i<cuentas.length; i++){
        if (nombreCuenta === cuentas[i].nombre){
          passwordCuenta = pedirPassword("Ingrese Password: ");
          pos = i;
        }
      }//fin for

      //Se valida si pass es correcto; sino, solicita nuevamente clave.
      if (passwordCuenta){
        if (passwordCuenta === cuentas[pos].password){
          console.log(cuentas[pos].saldo);
          }else {
            passwordCuenta = pedirPassword("Password incorrecto, intente de nuevo: ");
            if (passwordCuenta === cuentas[pos].password){
              console.log(cuentas[pos].saldo);
            }else{
              console.log("Clave incorrecta, ha superado el número de intentos permitidos.");
            }  
          }
      }else{
        console.log("Cuenta no existe!");
      }
      return null;
  }

  function cajeroRetiro(){
    valorRetiro = prompt("Ingrese valor a retirar: ");
    //Valida que existan fondos suficiente
    if(valorRetiro <= cuentas[pos].saldo ){
      var saldo = cuentas[pos].saldo - valorRetiro;
      //Evalúa regla de negocio
      if(saldo >= 10){
        cuentas[pos].saldo = saldo;
        console.log("Retiro exitoso, nuevo saldo:" + cuentas[pos].saldo);
      }else{
        mostrarMsg("Fondos insuficientes");
      }  
    }else{
      mostrarMsg("Fondos insuficientes");
    }
    return null;
  }

  function cajeroDeposito(){
    var valorDeposito = prompt("Ingrese valor del depósito: ");
    var saldo = parseInt(valorDeposito) + cuentas[pos].saldo;
    //Valida regla de negocio para el depósito.
    if(saldo <= 990){
        cuentas[pos].saldo = saldo;
        console.log("Deósito exitoso, nuevo saldo:" + cuentas[pos].saldo);
      }else{
        console.log("Supera límite permitido");
      }  
    return null;
  }