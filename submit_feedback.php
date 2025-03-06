<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedback (email, address, phone, message) VALUES ('$email', '$address', '$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error-try again: " . $conn->try again;
    }

    $conn->close();
}
?>
