<?php
  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
   
$folderPath = "./upload/";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$i = 0;   
foreach ($request->fileSource as $key => $value) {
   
    $image_parts = explode(";base64,", $value);
   
    $image_type_aux = explode("image/", $image_parts[0]);
   
    $image_type = $image_type_aux[1];
  
    $image_base64 = base64_decode($image_parts[1]);
  
	$file = $folderPath . $request->name[$i] . '.'.$image_type;
  
    file_put_contents($file, $image_base64);
	
	$i++;
}