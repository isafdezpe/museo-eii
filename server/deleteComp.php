<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idComp"])) {
    exit("No hay id de componente para eliminar");
}
$idComp = $_GET["idComp"];
if (is_numeric($idComp)) {
    try {
        $bd = include_once "bd.php";
        $sentencia = $bd->prepare("DELETE FROM components WHERE component_id = ?");
        $resultado = $sentencia->execute([$idComp]);
        echo json_encode($resultado);
    } catch (PDOException $e) {
        error_log('PDOException - ' . $e->getMessage(), 0);
        http_response_code(500);
        exit("Error al conectar con la base de datos");
    }
} else {
    http_response_code(400);
    exit("Error al procesar la petición");
}
