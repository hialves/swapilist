<!DOCTYPE html>
<html>
	<head>
		<?php require_once("include/head.php"); ?>
	</head>
	<body>
		<?php require_once("include/nav.php"); ?>
		<div class="carousel">
		    <a class="carousel-item" href="/swapi/app/views/characters.php"><img src="/swapi/imgs/characters.jpg"></a>
		    <a class="carousel-item" href="/swapi/app/views/films.php"><img src="/swapi/imgs/films.jpg"></a>
		    <a class="carousel-item" href="/swapi/app/views/planets.php"><img src="/swapi/imgs/planets.jpg"></a>
		    <a class="carousel-item" href="/swapi/app/views/species.php"><img src="/swapi/imgs/species.jpg"></a>
		    <a class="carousel-item" href="/swapi/app/views/starships.php"><img src="/swapi/imgs/starships.jpg"></a>
		    <a class="carousel-item" href="/swapi/app/views/vehicles.php"><img src="/swapi/imgs/vehicles.jpg"></a>
		  </div>
		  <script>
			  $(document).ready(function(){
			    $('.carousel').carousel();
			  });
		</script>
	</body>
</html>