<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador Login</title>
</head>
<body>
    <?php
        $login = chop($_POST['login']);
        $senha = chop($_POST['senha']);

        if(empty($login)){
            print('Login obrigatorio');
            die();            
        }
        if(empty($senha)){
            print('Senha obrigatoria');
            die();   
        }

        if(isset($_POST['create']))
        {
            cadastrar($login, $senha);
        }

        if(isset($_POST['verif']))
        {
            validar($login, $senha);
        }

        function validar($login, $senha){//Confere o login e a senha, caso não encontrar inicia a função "cadastrar"
            $fd = fopen('cadastro.txt', 'r');
            $confere_usuario = false;
            $confere_senha = false;

            while(!feof($fd)){
                $dados = fgets($fd);
                $dados_vetor = explode('///', $dados);

                if(count($dados_vetor) == 2){
                    $logins_salvos = $dados_vetor[0];
                    $senhas_salvas = $dados_vetor[1];

                    if($logins_salvo == $login){
                        $confere_usuario = true;

                        if($senhas_salvas == $senha){
                            $confere_senha = true;
                        }
                        break;
                    }
                }
            }

            if($confere_usuario == true){
                print('Usuario encontrado<br>');

                if($confere_senha == true){
                    print('Senha correta<br>');
                } else {
                    print('Senha incorreta<br>');
                }

            } else {
                print('Usuario encontrado<br>');
            }
            die();
        }

        function cadastrar($login, $senha){
            $fd = fopen('cadastro.txt', 'a');

            fwrite($fd, "$login///$senha\n");
            print("Usuário criado com sucesso: $login<br>");
            die();
        }
    ?>
</body>
</html>