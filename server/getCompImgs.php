<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idComp"])) {
    exit("No hay id del componente");
}
$idComp = $_GET["idComp"];
$bd = include_once "bd.php";
$sentence = $bd->prepare("select image from component_images where component_id = ?");
$sentence->execute([$idComp]);
$comps = $sentence->fetchAll(PDO::FETCH_OBJ);
echo json_encode($comps);