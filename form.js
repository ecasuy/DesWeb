function validar(){
    //Validar nombre
    if (document.formularios.myname.value.length < 5){
      alert("Ingrese un nombre valido.")
      document.formularios.myname.focus()
      return 0;
    }

    //validar apellido
    if (document.formularios.mylastname.value.length < 4){
        alert("Ingrese un apellidos valido.")
        document.formularios.mylastname.focus()
        return 0;
      }

      //validar correo
    if (document.formularios.mail.value.length < 5){
        alert("Ingrese un correo valido.")
        document.formularios.mail.focus()
        return 0;
      }

       //validar nacimiento
    if (document.formularios.naci.value.length < 5){
        alert("Ingrese fecha de nacimiento.")
        document.formularios.naci.focus()
        return 0;
      }

       //validar direccion
    if (document.formularios.dire.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.dire.focus()
        return 0;
      }

      //validar telefono
    if (document.formularios.phone.value.length < 5){
        alert("Ingrese numero de telefono.")
        document.formularios.phone.focus()
        return 0;
      }

      //validar tipo de sexo
    if (document.formularios.tsex.value.length < 5){
        alert("Ingrese tipo de sexo.")
        document.formularios.tsex.focus()
        return 0;
      }

       //validar Contraseña
    if (document.formularios.pass.value.length < 5){
        alert("Ingrese una contraseña.")
        document.formularios.pass.focus()
        return 0;
      }

       //validar numero de tarjeta
    if (document.formularios.card.value.length < 12){
      alert("Ingrese numero de tarjeta.")
      document.formularios.card.focus()
      return 0;
    }

     //validar fecha de expiracion
     if (document.formularios.fecha.value.length < 5){
      alert("Ingrese fecha de expiracion.")
      document.formularios.fecha.focus()
      return 0;
    }

     //validar codigo de seguridad
     if (document.formularios.seguridad.value.length < 3){
      alert("Ingrese codigo de seguridad.")
      document.formularios.seguridad.focus()
      return 0;
    }

     //validar nombre de titular
     if (document.formularios.titular.value.length < 5){
      alert("Ingrese el nombre del titular.")
      document.formularios.titular.focus()
      return 0;
    }

    alert("Muchas gracias por enviar el formulario");
        docent.formularios.submit();
       
}
