<?php

$nombre = isset($_POST['myname']) ? $_POST['myname'] : '';
$apellido = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$telefono = isset($_POST['mobile']) ? $_POST['mobile'] : '';
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';
try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=formulario_db", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO formulario_usuario(nombre, apellido, email, telefono, mensaje) VALUES(?, ?, ?, ?, ?)');
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $apellido);
    $pdo->bindParam(3, $email);
    $pdo->bindParam(4, $telefono);
    $pdo->bindParam(5, $mensaje);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}