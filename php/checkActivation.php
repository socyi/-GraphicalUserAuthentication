<?php
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
		
		$email=$_GET["email"];
		

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="SELECT IsActivated FROM users WHERE Email='".$email."'";

		$result = mysqli_query($con,$sql);

		$flag="false";
		while ($row = mysqli_fetch_row($result)) {
			if ($row[0]==1)
				$flag="true";
  		}	

  		echo $flag;
		mysqli_close($con);
	

	}
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') == 0) {

		session_start();
		
		$json = file_get_contents("php://input");
		$data = json_decode($json);

		$_SESSION["email"]=$data->email;

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}


		$sql="SELECT UserID FROM users WHERE Email='".$data->email."'";
		$id;
		$result = mysqli_query($con,$sql);

		while ($row = mysqli_fetch_row($result)) {
			$id=$row[0];
  		}	



		$sql="INSERT INTO passwords(UserID,UserImages,DecoyImages) VALUES
		 ('$id','$data->password','$data->decoy')";
		 
		$con->query($sql);
		
		

		mysqli_close($con);
	

	}

?>