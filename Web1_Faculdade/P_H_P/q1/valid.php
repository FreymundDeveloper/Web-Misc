<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador</title>
</head>
<body>
    <?php
	    if ( empty($_POST['nome']) {
		    print ("Nome obrigatorio");
		    die ( );   
        }
        
        if ( empty($_POST['email']) {
            print ("Email obrigatorio");
            die ( );
        }

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) == false){
            print('Email invalido');
            die();
        }

        if ( empty($_POST['bday']) {
            print ("Data de nascimento obrigatorio");
            die ( );
        }

        $data = explode('-', $_POST['bday']));
        $dataLimite = new DateTime('2021-02-07');
        $dataUsr = new DateTime($_POST['bday']);

        if(count($data) != 3 || checkdate($data[1], $data[2], $data[0]) == false){
            print('Data de nascimento invalida');
            die();
        }

        if($dataUsr > $dataLimite){//Não entendi muito bem o que tinha q fazer, enunciado meio confuso
            print('Idade digitada ultrapassa o dia atual');
            die();
        }

        if ( empty($_POST['usrtel']) {
            print ("Telefone obrigatorio obrigatorio");
            die ( );
        }

        if(preg_match("/\([0-9]{2}\)[0-9]{4}\-[0-9]{4}$/", $_POST['usrtel']) != 1) {
            print('Telefone invalido');
            die();
        }


	    print("<br>Seus dados:<br>");
	    print("Nome: $_POST['nome']<br>");
	    print("Email: $_POST['email']<br>");
        print("Data de Nascimento: $_POST['bday']<br>");
	    print("Telefone: $_POST['usrtel']<br>");  
        print("URL: $_POST['homepage']<br>");    
        print("Estado: $_POST['estados']<br>"); 
    ?>

    
</body>
</html>