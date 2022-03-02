<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonComp = json_decode(file_get_contents("php://input"));
if (!$jsonComp) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentence = $bd->prepare("UPDATE components SET component_name = ?, component_description = ?, component_family = ?, component_year_init = ?, component_year_end = ?, component_price = ?, component_price_units = ?, component_devices = ?, famous_system = ?, famous_system_img = ?, component_period_id = ? WHERE component_id = ?");
$res = $sentence->execute([$jsonComp->component_name, $jsonComp->component_description, $jsonComp->component_family, $jsonComp->component_year_init, $jsonComp->component_year_end, $jsonComp->component_price, $jsonComp->component_price_units, $jsonComp->component_devices, $jsonComp->famous_system, $jsonComp->famous_system_img, $jsonComp->component_period_id, $jsonComp->component_id]);
if ($jsonComp->component_type == "CPU") {
	$sentence = $bd->prepare("UPDATE cpus SET program_memory = ?, program_memory_units = ?, ram_memory = ?, ram_memory_units = ?, clockspeed = ?, clockspeed_units = ?, cpu_power = ?, cpu_power_units = ?, wordsize = ?, wordsize_units = ?, transistor_size = ?, transistor_size_units = ?, passmark = ?, transistors = ? WHERE cpu_id = ?");
	$res = $sentence->execute([$jsonComp->program_memory, $jsonComp->program_memory_units, $jsonComp->ram_memory, $jsonComp->ram_memory_units, $jsonComp->clockspeed, $jsonComp->clockspeed_units, $jsonComp->cpu_power, $jsonComp->cpu_power_units, $jsonComp->wordsize, $jsonComp->wordsize_units, $jsonComp->transistor_size, $jsonComp->transistor_size_units, $jsonComp->passmark, $jsonComp->transistors, $jsonComp->component_id]);
}
echo json_encode($res);