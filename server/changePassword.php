<?php
$user = trim(readline("Introduzca el usuario: "));
$pass = trim(readline("Introduzca una nueva contraseña: "));
$pass2 = trim(readline("Repita la contraseña: "));
if ($pass == $pass2 && $pass != "") {
	try {
		$bd = include_once "bd.php";
		$sentence = $bd->prepare("UPDATE administrator SET pwd = AES_ENCRYPT(?, 'museum_key_crypt') where email = ?");
		$res = $sentence->execute([$pass, $user]);
		echo "Contraseña actualizada con éxito.\n";
	} catch (PDOException $e) {
		echo "Ha habido un error al actualizar la contraseña.\n";
	}
} else {
	echo "Las contraseñas no coinciden.\n";
}
?>