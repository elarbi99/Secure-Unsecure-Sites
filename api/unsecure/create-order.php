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
    if (isset($data['email'], $data['order_name'], $data['price'])) {
        $email =  $data['email'];
        $order_name = $data['order_name'];
        $price = $data['price'];
        $order_number=rand(1,999999999999);
        $insertQuery = "INSERT INTO order_model (email, order_name, price, order_number) 
                        VALUES ('$email', '$order_name', '$price', '$order_number')";
        
        $insertResult = mysqli_query($db, $insertQuery);

        if ($insertResult) {
            $result = mysqli_query($db, "SELECT * FROM order_model WHERE email='$email' AND order_number='$order_number'");
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode(['message' => 'Data inserted successfully', 'orders' => $data]);
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
