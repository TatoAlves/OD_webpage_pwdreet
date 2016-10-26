//JS of Password Reset Webpage
//Validating Form fields

  function checkName(){

    var usr = document.getElementById('username');
    var pwi1 = document.getElementById('pwd1');
    var pwi2 = document.getElementById('pwd2');

    var btnVerify = document.getElementById('updatep');
    var message = document.getElementById('confirmMessage');
    var regx = new RegExp('\w+\.\w+', 'g');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";


    //Verification User name field

    if(regx.test(usr) == true){
      pwi1.disabled = false;
      usr.style.backgroundColor = goodColor;
    }else{
      pwi1.disabled = true;
      usr.style.backgroundColor = badColor;
    }
  }

  function checkPwd(){
    var pass1 = document.getElementById('pwd1');
    var pass2 = document.getElementById('pwd2');
    var btnVerify = document.getElementById('updatep');
    var message = document.getElementById('confirmMessage');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";


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
