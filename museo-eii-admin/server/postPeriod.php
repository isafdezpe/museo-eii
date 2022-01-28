<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPeriod = json_decode(file_get_contents("php://input"));
if (!$jsonPeriod)
    exit("No hay datos");
$bd = include_once "bd.php";
$sentence = $bd->prepare("insert into periods(period_name, period_details, period_trivia, period_events) values (?,?,?,?)");
$res = $sentence->execute([$jsonPeriod->period_name, $jsonPeriod->period_details, $jsonPeriod->period_trivia, $jsonPeriod->period_events]);
echo json_encode([
    "res" => $res
]);