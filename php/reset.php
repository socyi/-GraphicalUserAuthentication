<?php
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
		
		$email=$_GET["email"];
		$code=$_GET["code"];

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="SELECT * FROM resets WHERE Email='".$email."' AND ResetCode='".$code."'";

		$result = mysqli_query($con,$sql);

		if (mysqli_num_rows($result) ==0){
			echo "false";
		}
		else{

			$sql="SELECT UserID FROM users WHERE Email='".$email."'";
			$id;
			$result = mysqli_query($con,$sql);

			while ($row = mysqli_fetch_row($result)) {
				$id=$row[0];
  			}	
  			

			$sql = "DELETE FROM passwords WHERE UserID='".$id."'";
			$con->query($sql);

			echo "true";

		}
		

		mysqli_close($con);
	

	}

?>