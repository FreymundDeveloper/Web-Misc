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

        if ( empty($_POST['bday']) {
            print ("Data de nascimento obrigatorio");
            die ( );
        }

        if ( empty($_POST['usrtel']) {
            print ("Telefone obrigatorio obrigatorio");
            die ( );
        }


	    print("Seus dados:");
	    print("Nome: $_POST['nome']");
	    print("Email: $_POST['email']");
        print("Data de Nascimento: $_POST['bday']");
	    print("Telefone: $_POST['usrtel']");  
        print("URL: $_POST['homepage']");    
        print("Estado: $_POST['estados']"); 
    ?>

    
</body>
</html>