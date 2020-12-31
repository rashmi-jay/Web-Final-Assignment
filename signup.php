
<html>
<head>
</head>
<body>
<?php
include_once 'connection.php';


if(!$conn)
{
	die("Connection failed".mysqli_connect_error());
}
else
{
    $tit=$_POST['title'];
    $fn=$_POST['fname'];
    $ln=$_POST['lname'];
    $da=$_POST['date'];
    $mo=$_POST['month'];
    $ye=$_POST['year'];
    $cou=$_POST['coure'];
    $gen=$_POST['gender'];
    $em=$_POST['email'];
    $pas=$_POST['psw'];

    $sql ="INSERT INTO signup (Title, First_Name,Last_Name, BirthDate, BirthMonth, Birthyear, Country, Gender, Email,Password) VALUES('$tit','$fn','$ln','$da','$mo','$ye','$cou','$gen','$em','$pas');";

    if(mysqli_query($conn,$sql))
{
	echo "Record added successfully";
}
else
{
	echo "error";
}
}
mysqli_close($conn);



/*$query="INSERT INTO signup VALUES('$tit','$fn','$ln','$da','$mo','$ye','$cou','$gen','$em','$pas')";
$con=mysqli_connect("localhost","root","","seasidesouthpark");
if($con) echo("connection successful");
$db=mysqli_select_db($con,"seasidesouthpark");
$res=mysqli_query($con,$query);*/

?>

</body>
<html>