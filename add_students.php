<?php
include 'db.php';

$roll = $_POST['roll_no'];
$name = $_POST['name'];
$course = $_POST['course'];
$dept = $_POST['department'];
$contact = $_POST['contact'];

$sql = "INSERT INTO students (roll_no,name,course,department,contact)
VALUES ('$roll','$name','$course','$dept','$contact')";

if($conn->query($sql)){
    echo "Student Added";
} else {
    echo "Error";
}
?>