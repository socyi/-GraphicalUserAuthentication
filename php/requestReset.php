<?php
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
		
		$email=$_GET["email"];

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="SELECT UserID FROM users WHERE Email='".$email."'";

		$result = mysqli_query($con,$sql);

		if (mysqli_num_rows($result) ==0){
			echo "false";
		}
		else{
			echo "true";
		}

		mysqli_close($con);
	

	}


	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') == 0) {
		
		$json = file_get_contents("php://input");
		$data = json_decode($json);

		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="INSERT INTO resets(Email,ResetCode) VALUES
		 ('$data->email','$data->code')";
		 
		if ($con->query($sql) === TRUE) {
			echo "201";
		} else {
			echo "500 server error";
		}

		mysqli_close($con);

		$url = 'https://api.sendgrid.com/';
		$user = 'azure_8150980dcca3f4931269d6c41ec342e6@azure.com';
		$pass = '';

		$params = array(
	      'api_user' => $user,
	      'api_key' => $pass,
	      'to' => $data->email,
	      'subject' => 'Graphical Password Reset',
	      'html' => 'The following is your reset code: '. $data->code,
	      'text' => '',
	      'from' => 'sgiann05@ucy.ac.cy',
	   	);

	 	$request = $url.'api/mail.send.json';

			 
		$session = curl_init($request);

	 	curl_setopt ($session, CURLOPT_POST, true);


		curl_setopt ($session, CURLOPT_POSTFIELDS, $params);

	 	curl_setopt($session, CURLOPT_HEADER, false);
	 	curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

	 	$response = curl_exec($session);
	 	curl_close($session);

	 	print_r($response);

	}

?>