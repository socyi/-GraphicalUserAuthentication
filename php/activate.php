<?php
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
		
		$email=$_GET["email"];
		$code=$_GET["code"];

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="SELECT UserID FROM users WHERE Email='".$email."' AND ActivationCode='".$code."'";

		$result = mysqli_query($con,$sql);

		if (mysqli_num_rows($result) ==0){
			echo "false";
		}
		else{
			
			$sql = "UPDATE users SET IsActivated=1 WHERE Email='".$email."'";
			$con->query($sql);
			echo "true";
		}

		mysqli_close($con);
	

	}

?>