<?php
$passw = "Museo_Info_2021";
$usuario = "admin";
$nombre_base_de_datos = "museo_eii";
try {
    return new PDO('mysql:host=localhost:3306;dbname=' . $nombre_base_de_datos, $usuario, $passw);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}