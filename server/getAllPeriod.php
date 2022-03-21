<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
try {
    $bd = include_once "bd.php";
    $sentence = $bd->query("select period_name, period_details, period_trivia, period_events, period_id from periods");
    $periods = $sentence->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($periods);
} catch (PDOException $e) {
    error_log('PDOException - ' . $e->getMessage(), 0);
    http_response_code(500);
    exit("Error al conectar con la base de datos");
}