<?php
$db = mysqli_connect("localhost:3306", "root", "rootPassword360!", "unSecureApplication");

// Check the connection
if (!$db) {
    die('Connection failed: ' . mysqli_connect_error());
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve data from the database
    $email =  $_GET['email'];
    $password = $_GET['password'];
    $result = mysqli_query($db, "SELECT * FROM user_model WHERE email='$email' AND password='$password'");
    // Check if the query was successful
    if ($result->num_rows > 0) {
        // Successful login
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
    } else {
        echo json_encode(['error' => 'Invalid email or password']);
    }
}

// Close the database connection
mysqli_close($db);
?>
