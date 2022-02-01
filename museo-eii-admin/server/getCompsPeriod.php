<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idPeriod"])) {
    exit("No hay id del periodo");
}
$idPeriod = $_GET["idPeriod"];
$bd = include_once "bd.php";
$sentence = $bd->prepare("select component_id, component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img from components where component_type != 'CPU' and component_period_id = ?");
$sentence->execute([$idPeriod]);
$comps = $sentence->fetchAll(PDO::FETCH_OBJ);
$sentence = $bd->prepare("select component_id, component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors from components join cpus where component_type = 'CPU' and component_period_id = ?");
$sentence->execute([$idPeriod]);
$comps2 = $sentence->fetchAll(PDO::FETCH_OBJ);
echo json_encode(array_merge($comps, $comps2));