<?php
$contraseña = "MuseoInfo2021";
$usuario = "root";
$nombre_base_de_datos = "museo-eii";
try {
    return new PDO('mysql:host=localhost:3306;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}