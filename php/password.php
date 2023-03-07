
	<?php
		

		$con = mysqli_connect('127.0.0.1','sgiann05','esxm1111!!!!','phpmyadmin','3306');
		if (!$con) {
    		die('Could not connect: ' . mysqli_error($con));
		}

		function loadImage($con,$id){
			
			$sql="SELECT FilePath FROM images WHERE ImageID=".$id;
					
						$result = mysqli_query($con,$sql);
						
						while ($row = mysqli_fetch_row($result)) {
							


    						echo "<img id='".$id."' onclick='onClickSelect(".$id.")' src='".$row[0]."'>";
	    			
  						 }		
		}
	
	?>



	<html lang="en">
	<head>
	  <meta charset="utf-8">

	  <title>Create Password</title>
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
	  <script src="password.js" defer></script>
	
	
	</head>

	<body>
		<div class="container">
    		<h2 class="title">Please create your secret key</h2>

    		<p>Select exactly 5 images in a specific order for creating your secret key. You
    		cannot use the same image multiple times.<br> You can drag and drop your selected images
    		to change the order of your secret key.</p>
    		<h2>Your secret key</h2>

    		<div name="box" id="sortable" class="ui-state box">
    		</div>
    		<button type="button" id="create" class="btn btn-default">Create your secret key</button>
    		<button type="button" id="login" class="btn btn-default">Login</button>
    		  <div id="msg">
     		  </div>


    		<div class="container" id="grid">
	    		<div class="row">
	    			<?php
	    				loadImage($con,1);
	    				loadImage($con,2);
	    				loadImage($con,3);
	    				loadImage($con,4);
	    				loadImage($con,5);
	    				loadImage($con,6);
	    				loadImage($con,7);
	    				loadImage($con,8);
	    				loadImage($con,9);
					?>
				  
				</div>
	
		    	<div class="row">
					<?php
	    				loadImage($con,10);
	    				loadImage($con,11);
	    				loadImage($con,12);
	    				loadImage($con,13);
	    				loadImage($con,14);
	    				loadImage($con,15);
	    				loadImage($con,16);
	    				loadImage($con,17);
	    				loadImage($con,18);
					?>
		 		</div>

		 		<div class="row">
				  <?php
	    				loadImage($con,19);
	    				loadImage($con,20);
	    				loadImage($con,21);
	    				loadImage($con,22);
	    				loadImage($con,23);
	    				loadImage($con,24);
	    				loadImage($con,25);
	    				loadImage($con,26);
	    				loadImage($con,27);
					?>
		  		</div>
		  	</div>
	
    	
    	<?php
    	mysqli_close($con);
    	?>
    



  </div>



	</body>
</html>