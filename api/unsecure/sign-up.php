<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$db = mysqli_connect("localhost:3306", "root", "rootPassword360!", "unSecureApplication");

// Check the connection
if (!$db) {
    die('Connection failed: ' . mysqli_connect_error());
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve JSON data from the request body
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    // Check if required parameters are set
    if (isset($data['fName'], $data['lName'], $data['phone'], $data['email'], $data['address'], $data['city'], $data['zipCode'], $data['password'])) {
        $fName = $data['fName'];
        $lName = $data['lName'];
        $phone =  $data['phone'];
        $email =  $data['email'];
        $address = $data['address'];
        $city = $data['city'];
        $zipCode =  $data['zipCode'];
        $password = $data['password'];

        $insertQuery = "INSERT INTO user_model (fName, lName, phone, email, address, city, zipCode, password) 
                        VALUES ('$fName', '$lName', '$phone', '$email', '$address', '$city', '$zipCode', '$password')";
        
        $insertResult = mysqli_query($db, $insertQuery);

        if ($insertResult) {
            echo json_encode(['message' => 'Data inserted successfully']);
        } else {
            echo json_encode(['error' => 'Error executing the insert query']);
        }
    } else {
        echo json_encode(['error' => 'All parameters are required in the request body']);
    }
} else {
    echo json_encode(['error' => 'Only POST requests are allowed']);
}

mysqli_close($db);
?>
