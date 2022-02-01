<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPeriod = json_decode(file_get_contents("php://input"));
if (!$jsonPeriod) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentence = $bd->prepare("UPDATE periods SET period_name = ?, period_details = ?, period_trivia = ?, period_events = ? WHERE period_id = ?");
$res = $sentence->execute([$jsonPeriod->name, $jsonPeriod->details, $jsonPeriod->trivia, $jsonPeriod->events, $jsonPeriod->id]);
echo json_encode($res);