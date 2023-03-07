	<?php
		if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
			

			$email=$_GET["email"];
			$password=$_GET["password"];
			
			

			$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
			if (!$con) {
	    		die('Could not connect: ' . mysqli_error($con));
			}

			$sql="SELECT UserID FROM users WHERE Email='".$email."'";
			
			$result = mysqli_query($con,$sql);

			while ($row = mysqli_fetch_row($result)) {
				$id=$row[0];
	  		}	

	  		$sql="SELECT UserImages FROM passwords WHERE UserID='".$id."'";
			$images= array();
			$img1;
			$result = mysqli_query($con,$sql);
			while ($row = mysqli_fetch_row($result)) {
				$img1=$row[0];
	  		}
	  		$arr1=explode(',',$img1);
	  		
	  		$arr2=explode(',',$password);

	  		$flag="true";
	  		for ($i=0; $i <5 ; $i++) { 
	  			if ($arr1[$i]!==$arr2[$i]){
	  				$flag="false";
	  				break;
	  			}
	  		}

	  		echo $flag;
	

	  		mysqli_close($con);

	  		
			
		
		}
	?>