<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentence = $bd->query("select period_name, period_details, period_trivia, period_events, period_id from periods");
$periods = $sentence->fetchAll(PDO::FETCH_OBJ);
echo json_encode($periods);