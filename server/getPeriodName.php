<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["namePeriod"])) {
    exit("No hay nombre del periodo");
}
$namePeriod = $_GET["namePeriod"];
try {
    $bd = include_once "bd.php";
    $sentence = $bd->prepare("select period_id, period_name, period_details, period_trivia, period_events from periods where period_name = ?");
    $sentence->execute([$namePeriod]);
    $period = $sentence->fetchObject();
    echo json_encode($period);
} catch (PDOException $e) {
    error_log('PDOException - ' . $e->getMessage(), 0);
    http_response_code(500);
    exit("Error al conectar con la base de datos");
}