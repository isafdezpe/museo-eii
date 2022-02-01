<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idPeriod"])) {
    exit("No hay id de periodo para eliminar");
}
$idPeriod = $_GET["idPeriod"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM periods WHERE period_id = ?");
$resultado = $sentencia->execute([$idPeriod]);
echo json_encode($resultado);