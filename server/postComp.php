<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonComp = json_decode(file_get_contents("php://input"));
if (!$jsonComp)
    exit("No hay datos");
$bd = include_once "bd.php";
$sentence = $bd->prepare("insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (?,?,?,?,?,?,?,?,?,?,?,?)");
$res = $sentence->execute([$jsonComp->component_name, $jsonComp->component_description, $jsonComp->component_family, $jsonComp->component_type, $jsonComp->component_year_init, $jsonComp->component_year_end, $jsonComp->component_price, $jsonComp->component_price_units, $jsonComp->component_devices, $jsonComp->famous_system, $jsonComp->famous_system_img, $jsonComp->component_period_id]);
echo json_encode([
    "res" => $res
]);