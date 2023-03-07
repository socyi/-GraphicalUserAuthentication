
	<?php
		
		session_start();

		$email=$_SESSION["email"];
		
		
		$GLOBALS["counter"]=0;
		
		$con = mysqli_connect('127.0.0.1','root','','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		$sql="SELECT UserID FROM users WHERE Email='".$email."'";
		$id;
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

  		$sql="SELECT DecoyImages FROM passwords WHERE UserID='".$id."'";
		$img2;
		$result = mysqli_query($con,$sql);
		while ($row = mysqli_fetch_row($result)) {
			$img2=$row[0];
  		}

  		$arr1=explode(',',$img1);
  		for ($i=0;$i<count($arr1);$i++){
  			array_push($images,$arr1[$i]);
  		}

  		$arr2=explode(',',$img2);
  		for ($i=0;$i<count($arr2);$i++){
  			array_push($images,$arr2[$i]);
  		}
  		
  		shuffle($images);
  
  
  		$GLOBALS["array"]=$images;

		function loadImage($con){
			
			$imgID=$GLOBALS["array"][$GLOBALS["counter"]];
			$GLOBALS["counter"]++;

			$sql="SELECT FilePath FROM images WHERE ImageID=".$imgID;
					
			$result = mysqli_query($con,$sql);
						
			while ($row = mysqli_fetch_row($result)) {
							


			echo "<img id='".$imgID."' onclick='onClickSelect(".$imgID.")' src='".$row[0]."'>";
	    			
			}		
		}
	
	?>



	<html lang="en">
	<head>
	  <meta charset="utf-8">

	  <title>Login</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	     <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	      <link rel="stylesheet" href="jquery-ui.min.css">
		<script src="jquery-ui.min.js"></script>
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	  <link rel="stylesheet" href="gua.css">

	  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
	  <script src="login.js" defer></script>
	
	
	</head>

	<body>
		<div class="container">
    		<h2 class="title">Please enter the email and secret key to proceed</h2>

    		
	

    		<h2>Your secret key</h2>

    		<div name="box" id="sortable" class="ui-state box">
    		</div>

    		<button type="button" id="login2" class="btn btn-default">Login</button>
    		  <div id="msg">
     		  </div>


    		<div class="container" id="grid">
	    		<div class="row">
	    			<?php
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				
					?>
				  
				</div>
	
		    	<div class="row">
					<?php
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				
					?>
		 		</div>

		 		<div class="row">
				 	<?php
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    				loadImage($con);
	    			?>
	    			
		  		</div>
		  	</div>
	
    	
    	<?php
    	mysqli_close($con);
    	?>
    



  </div>



	</body>
</html>