<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idPeriod"])) {
    exit("No hay id del periodo");
}
$idPeriod = $_GET["idPeriod"];
$bd = include_once "bd.php";
$sentence = $bd->prepare("select component_id, component_name, famous_system, famous_system_img from components where component_period_id = ?");
$sentence->execute([$idPeriod]);
$comps = $sentence->fetchAll(PDO::FETCH_OBJ);
echo json_encode($comps);