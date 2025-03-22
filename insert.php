<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
header('Content-Type: application/json');
// Set up the database connection
$servername = "localhost";
$username = "root";  // Default MySQL user
$password = "";  // No default password in XAMPP
$dbname = "project_testing";  // The name of the database you created
// Create the database connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check the connection
if ($conn->connect_error) {
    die(json_encode(array('error' => "Connection failed: " . $conn->connect_error)));
}
// Get the data sent from the frontend
$data = json_decode(file_get_contents('php://input'), true);

// Check that the data was received correctly
if ($data) {
    // Extract and sanitize the values from the object
    $name = $conn->real_escape_string($data['name']);  // Sanitize input to prevent SQL injection
    $age = intval($data['age']);
    $email = $conn->real_escape_string($data['email']);  // Sanitize input

    // Validate that the fields are not empty and are correct
    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && $age > 0) {
        // SQL query to insert the data into the 'users' table
        $sql = "INSERT INTO tbl_pruebas (name, age, email) VALUES ('$name', '$age', '$email')";
        if ($conn->query($sql) === TRUE) {
            // Send a success response
            echo json_encode(array('message' => 'User successfully registered in the database.'));
        } else {
            // Send an error message if the insertion fails
            echo json_encode(array('error' => 'Error registering the user: ' . $conn->error));
        }
    } else {
        // If the data is not valid, send an error message
        http_response_code(400);
        echo json_encode(array('error' => 'Invalid data. Please check that all fields are correct.'));
    }
} else {
    // If no data was received, send an error
    http_response_code(400);
    echo json_encode(array('error' => 'No data received.'));
}
// Close the database connection
$conn->close();
?>
