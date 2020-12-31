<?php

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "ex01";

// Create connection
$connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}


	if(isset($_POST["submit"])) {

		$ntype		= $_POST["title"];
		$fname		= $_POST["fname"];
		$lname		= $_POST["lname"];
		$date		= $_POST["date"];
		$month		= $_POST["month"];
		$year		= $_POST["year"];
		$region		= $_POST["coure"];
		$gender		= $_POST["gender"];
		$email		= $_POST["email"];
		$password 	= $_POST["psw"];

		$sql = "INSERT INTO singup(ntype, fname, lname, day, month, year, region, gender, email, pwd) VALUES ('$ntype','$fname', '$lname', '$date', '$month', '$year', '$region', '$gender', '$email', '$password')";

		if ($connection->query($sql) === TRUE) {
		  echo "New record created successfully <br>";
		} else {
		  echo "Error: " . $sql . "<br>" . $connection->error;
		}

		/*echo $ntype . $fname;
		echo "<br>";
		echo $lname;
		echo "<br>";
		echo $dob;
		echo "<br>";
		echo $region;
		echo "<br>";
		echo $gender;
		echo "<br>";
		echo $email;
		echo "<br>";
		echo $password;
		echo "<br>";*/

	}

 ?>