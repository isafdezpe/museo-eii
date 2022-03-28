<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $bd = include_once "bd.php";
    $email = trim($request->user);
    $pwd = trim($request->password);
    $sentence = $bd->prepare("select email from administrator where email = ? and pwd = AES_ENCRYPT(?, 'museum_key_crypt')");
    $res = $sentence->execute([$email, $pwd]);
    if ($res) {
        $users = $sentence->fetchAll(PDO::FETCH_OBJ);
        if (count($users) > 0) {
            echo json_encode($users[0]);
        } else {
            http_response_code(400);
            exit("No existe el usuario");
        }
    }
}