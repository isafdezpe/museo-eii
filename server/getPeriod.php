<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idPeriod"])) {
    exit("No hay id del periodo");
}
$idPeriod = $_GET["idPeriod"];
if (is_numeric($idPeriod)) {
    try {
        $bd = include_once "bd.php";
        $sentence = $bd->prepare("select period_id, period_name, period_details, period_trivia, period_events from periods where period_id = ?");
        $sentence->execute([$idPeriod]);
        $period = $sentence->fetchObject();
        echo json_encode($period);
    } catch (PDOException $e) {
        error_log('PDOException - ' . $e->getMessage(), 0);
        http_response_code(500);
        exit("Error al conectar con la base de datos");
    }
} else {
    http_response_code(400);
    exit("Error al procesar la petición");
}