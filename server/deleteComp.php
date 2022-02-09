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
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM components WHERE component_id = ?");
$resultado = $sentencia->execute([$idComp]);
echo json_encode($resultado);