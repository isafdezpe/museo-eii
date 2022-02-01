<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonComp = json_decode(file_get_contents("php://input"));
if (!$jsonComp)
    exit("No hay datos");
$bd = include_once "bd.php";
$sentence = $bd->prepare("insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (?,?,?,?,?,?,?,?,?,?,?,?)");
$res = $sentence->execute([$jsonComp->name, $jsonComp->description, $jsonComp->family, $jsonComp->type, $jsonComp->initYear, $jsonComp->endYear, $jsonComp->price, $jsonComp->priceUnits, $jsonComp->devices, $jsonComp->famousSystem, $jsonComp->famousSystemImg, $jsonComp->periodId]);
$sentence = $bd->prepare("insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$res2 = $sentence->execute([$db->lastInsertId(), $jsonComp->programMemory, $jsonComp->programMemoryUnits, $jsonComp->ramMemory, $jsonComp->ramMemoryUnits, $jsonComp->clockSpeed, $jsonComp->clockSpeedUnits, $jsonComp->power, $jsonComp->powerUnits, $jsonComp->wordSize, $jsonComp->wordSizeUnits, $jsonComp->transistorSize, $jsonComp->transistorSizeUnits, $jsonComp->passmark, $jsonComp->transistors]);
echo json_encode([
    "res" => $res,
    "res2" => $res2
]);