<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idPeriod"])) {
    exit("No hay id del periodo");
}
$idPeriod = $_GET["idPeriod"];
if (is_numeric($idPeriod)) {
    try {
        $bd = include_once "bd.php";
        $sentence = $bd->prepare("select component_id, component_name, famous_system, famous_system_img from components where component_period_id = ?");
        $sentence->execute([$idPeriod]);
        $comps = $sentence->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($comps);
    } catch (PDOException $e) {
        error_log('PDOException - ' . $e->getMessage(), 0);
        http_response_code(500);
        exit("Error al conectar con la base de datos");
    }
} else {
    http_response_code(400);
    exit("Error al procesar la petición");
}