<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idComp"])) {
    exit("No hay id del componente");
}
$idComp = $_GET["idComp"];
if (is_numeric($idComp)) {
    try {
        $bd = include_once "bd.php";
        $sentence = $bd->prepare("select component_type from components where component_id = ?");
        $sentence->execute([$idComp]);
        $type = $sentence->fetchColumn();
        $sentence = $bd->prepare("select component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id from components where component_id = ?");
        if ($type == "CPU")
            $sentence = $bd->prepare("select component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors from components c join cpus cp on c.component_id = cp.cpu_id where component_id = ?");
        $sentence->execute([$idComp]);
        $comp = $sentence->fetchObject();
        echo json_encode($comp);
    } catch (PDOException $e) {
        error_log('PDOException - ' . $e->getMessage(), 0);
        http_response_code(500);
        exit("Error al conectar con la base de datos");
    }
} else {
    http_response_code(400);
    exit("Error al procesar la petición");
}
