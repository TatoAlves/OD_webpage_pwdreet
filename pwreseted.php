<!DOCTYPE html>
	<html>
		<head>
		<meta charset="UTF-8">
		<meta name="description">

			<title>Reset Password Apple</title>
  		<meta name="author" content="Gabriel Guilherme e Otavio Alves">



			<link rel="stylesheet" href="css/reset.css">
  		<link rel="stylesheet" href="css/styles.css">
			<!-- Here links cdn to Bootstrap/AJAX/JS-->

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

			<script type="text/javascript" src="js/validate_form.js"></script>

	</head>

	<body>

		<div class="container-fluid flogo">
			<img src="img/concxlogo_business-983x3001.png" style="max-height:25%;max-width:50%;" id="logotop">
		</div>

		<!-- NAVBAR -->

		<nav class="container-fluid navbar navbar-default">
			<div class="container">
				<div class="nav navbar-header nv">
					<a class="navbar-brand" href="index.html">Sobre</a>
				</div>
				<div class="navbar-collapse collapse nv">
					<ul class="nav navbar-nav">
						<li class="nav-link"><a href="userinfo.html">Administração de Usuários</a></li>
					</ul>
					<ul class="nav navbar-nav">
						<li class="nav-link active"><a href="pwreset.html">Reset de Senha</a></li>
					</ul>
				</div>
			</div>
		</nav>


		<!-- CONTENT -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title"></h3>
      </div>
			<div class="panel-body">

			    <?php

					if($_POST){
					    		$pwd = $_POST['pwd1'];
					    		$user = $_POST['username'];
									$cmdpw = "dscl -u admin -P 'senhaadmin' /LDAPv3/127.0.0.1 -passwd /Users/" . $user . " " . $pwd;
									//$cmdpw = "pwpolicy -a web.page -p 'Full#1234' -u " . $user . " -setpassword " . $pwd ."";
									$cmdpol = "pwpolicy -a admin -p 'senhaadmin' -u " . $user . " -setpolicy 'isDisabled=0 newPasswordRequired=1'";

					              try{
					                $pwd_line = system($cmdpw, $ret_pw);
													try{
														$pol_line = system($cmdpol, $ret_pol);
													}
													catch(Exception $error_policy){
													}
					              }
					              catch(Exception $error_pwd){
					              }
												/*
					              #echo '<br>Lastline: ' . $last_line;
					              #echo '<br>retval: ' . $retval;
								    		#echo '<br>Comando executado: ' . $cmd;
												*/
					              if($ret_pw == 0){
					                echo '<div class="page-header">';
					                echo '<h2>';
					                echo '<span class="">Senha para usuário: ' . $user . ' foi modificada para <i>' . $pwd . '</i></span>';
					   		echo "</h2>";
					                echo "</div>";
					                $msg = "Sucesso ao alterar senha para o usuário: " . $user . " as " . date('Y-m-d H:i:s');
					              }
					              else {
					                echo '<div class="">';
					                echo '<h2>';
					                echo '<span class="">Senha para usuário: ' . $user . ' NÃO foi modificada</span>';
					                echo "</h2>";
					                echo "</div>";
					                $msg = "Falha ao alterar senha para o usuário: " . $user . " as " . date('Y-m-d H:i:s');
					              }

					              $msg = wordwrap($msg, 70);
					              mail("otavio.alves@concentrix.com","Alteração de senha para usuário da Orquídea", $msg);
								    	}


						?>
            <button type="button" class="btn btn-info" onclick="window.location='index.html'">Voltar</button>
      </div>

			<!-- FOOTER -->
			<footer>
				<div class="well">
					<p>© 2016 Corporation - a global business services. All rights reserved. | Legal Information | Privacy Policy | Copyright Policy</p>
				</div>
			</footer>
		</html>
