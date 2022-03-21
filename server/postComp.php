<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonComp = json_decode(file_get_contents("php://input"));
if (!$jsonComp)
    exit("No hay datos");
try {
	$bd = include_once "bd.php";
	$sentence = $bd->prepare("insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (?,?,?,?,?,?,?,?,?,?,?,?)");
	$res = $sentence->execute([$jsonComp->component_name, $jsonComp->component_description, $jsonComp->component_family, $jsonComp->component_type, $jsonComp->component_year_init, $jsonComp->component_year_end, $jsonComp->component_price, $jsonComp->component_price_units, $jsonComp->component_devices, $jsonComp->famous_system, $jsonComp->famous_system_img, $jsonComp->component_period_id]);
	$idComp = $bd->lastInsertId();
	for ($i = 0; $i < count($jsonComp->component_imgs); $i++) {
		$sentence2 = $bd->prepare("insert into component_images(component_id, image) values (?,?)");
		$res2 = $sentence2->execute([$idComp, $jsonComp->component_imgs[$i]]);
	}
	if ($jsonComp->component_type == "CPU") {
		$sentence = $bd->prepare("insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		$res = $sentence->execute([$idComp, $jsonComp->program_memory, $jsonComp->program_memory_units, $jsonComp->ram_memory, $jsonComp->ram_memory_units, $jsonComp->clockspeed, $jsonComp->clockspeed_units, $jsonComp->cpu_power, $jsonComp->cpu_power_units, $jsonComp->wordsize, $jsonComp->wordsize_units, $jsonComp->transistor_size, $jsonComp->transistor_size_units, $jsonComp->passmark, $jsonComp->transistors]);
	}
	echo json_encode([
		"res" => $res
	]);
} catch (PDOException $e) {
	error_log('PDOException - ' . $e->getMessage(), 0);
	http_response_code(500);
	exit("Error al conectar con la base de datos");
}
