//JS of Password Reset Webpage
//Validating Form fields

  function checkName(){

    var usr = document.getElementById('username');


    var btnVerify = document.getElementById('updatep');
    var message = document.getElementById('confirmMessage');

    var blaColor = "#66cc66";


    //Verification User name field

    if(usr.value == ""){
      usr.effect(
        "shake", { times:3 }, 300
      );
    }
  }


  function checkPwd(){
    var pass1 = document.getElementById('pwd1');
    var pass2 = document.getElementById('pwd2');
    var btnVerify = document.getElementById('updatep');
    var message = document.getElementById('confirmMessage');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var regx = "\w{8,16}";

    var cmduser = "";

    //Verification Password fields
    if(pass1.value == pass2.value){
      pass1.style.backgroundColor = goodColor;
      pass2.style.backgroundColor = goodColor;
      message.style.color = goodColor;
      message.innerHTML = "Os campos de senha conferem!";
      btnVerify.disabled = false;
    }else{
      pass1.style.backgroundColor = badColor;
      pass2.style.backgroundColor = badColor;
      message.style.color = badColor;
      message.innerHTML = "Os campos de senha não conferem!";
      btnVerify.disabled = true;
    }
  }
