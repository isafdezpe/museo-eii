<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["email"])) {
    exit("No hay usuario");
}
$email = $_GET["email"];
try {
    $bd = include_once "bd.php";
    $sentence = $bd->prepare("select * from administrator where pwd = ?");
    $sentence->execute([$email]);
    $res = $sentence->fetchObject();
    if ($res) {
        $token = md5($emailId).rand(10,9999);
        $expFormat = mktime(
        date("H"), date("i"), date("s"), date("m") ,date("d")+1, date("Y")
        );
        $expDate = date("Y-m-d H:i:s",$expFormat);
        $update = $bd->prepare("update administrator set pwd = ?, reset_link_token = ?, expDate = ? where email = ?");
        $update->execute([$password, $token, $expDate, $email]);
        $link = "<a href='http://localhost:80/changePassword.php?key=".$email."&amp;token=".$token."'>Click aquí para cambiar la contraseña</a>";
        
    } else {
        http_response_code(400);
        exit("Dirección de email inválida");
    }
} catch (PDOException $e) {
    error_log('PDOException - ' . $e->getMessage(), 0);
    http_response_code(500);
    exit("Error al conectar con la base de datos");
}