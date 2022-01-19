<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentence = $bd->query("select period_name as name, period_details as details, period_trivia as trivia, period_events as events, period_id as id from periods");
$periods = $sentence->fetchAll(PDO::FETCH_OBJ);
echo json_encode($periods);