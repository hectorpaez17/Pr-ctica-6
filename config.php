<?php
$conn = new mysqli("localhost", "root", "", "arduino");

if ($conn->connect_errno) {
echo "Error: ". $conn->connect_error;
}