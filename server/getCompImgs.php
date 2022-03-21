<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idComp"])) {
    exit("No hay id del componente");
}
$idComp = $_GET["idComp"];
if (is_numeric($idComp)) {
    try {
        $bd = include_once "bd.php";
        $sentence = $bd->prepare("select image from component_images where component_id = ?");
        $sentence->execute([$idComp]);
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