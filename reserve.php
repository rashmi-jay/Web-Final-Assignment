<?php

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "sea side south park";

// Create connection
$connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}


    if(isset($_POST["submit"])) {

        $CheckinDate     = $_POST["indate"];
        $CheckoutDate    = $_POST["outdate"];
        $Adults		= $_POST["adults"];
        $Children      = $_POST["children"];
        $Rooms      = $_POST["rooms"];

        $sql = "INSERT INTO reservations(CheckinDate, CheckoutDate, Adults, Children, Rooms) VALUES ('$indate','$outdate', '$adults', '$children', '$rooms')";

		if ($connection->query($sql) === TRUE) {
		  echo "New record created successfully <br>";
		} else {
		  echo "Error: " . $sql . "<br>" . $connection->error;
		}

        /*echo $inDate;
        echo "<br>";
        echo $outDate;
        echo "<br>";
        echo $adults;
        echo "<br>";
        echo $children;
        echo "<br>";
        echo $rooms;*/


    }
    $conn -> close();

?>