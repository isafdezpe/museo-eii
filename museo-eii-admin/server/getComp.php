<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idComp"])) {
    exit("No hay id del componente");
}
$idComp = $_GET["idComp"];
$bd = include_once "bd.php";
$sentence = $bd->prepare("select component_type from components where component_id = ?");
$sentence->execute([$idComp]);
$type = $sentence->fetchColumn()[0];
$sentence = $bd->prepare("select component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id from components where component_id = ?");
if ($type == "CPU")
    $sentence = $bd->prepare("select component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors from components join cpus where component_id = ?");
$sentence->execute([$idComp]);
$comp = $sentence->fetchObject();
echo json_encode($comp);