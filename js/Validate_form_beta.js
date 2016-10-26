
  function checkForm(){
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("ERRO: O nome deve ser escrito <i>nome.sobrenome</i>!");
      form.username.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 8) {
        alert("ERRO: A senha deve conter no minímo 8 caracteres!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.username.value) {
        alert("ERRO: A senha deve ser diferente do nome do Usuário!");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("ERRO: A senha deve conter ao menos um número de zero a nove <i>(0-9)</i>!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("ERRO: A senha deve conter ao menos um caractere minúsculo (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("ERRO: A senha deve conter ao menos um caractere maiúsculo (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("ERRO: Por favor, confirme a nova senha!");
      form.pwd1.focus();
      return false;
    }

    alert("Sua informação de senha está válida: " + form.pwd1.value);
    return true;
  }
