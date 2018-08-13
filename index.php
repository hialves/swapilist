<!DOCTYPE html>
<html>
	<head>
		<?php require_once("include/head.php"); ?>
	</head>
	<body>
		<?php require_once("include/nav.php"); ?>
		<h2 id="sec_title"> Learn more about <span>Star Wars</span> !</h2>
		<div class="carousel">
			<div class="carousel-inner">
			    <a class="carousel-item" href="/swapi/app/views/characters.php"><img src="/swapi/imgs/characters.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/films.php"><img src="/swapi/imgs/films.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/planets.php"><img src="/swapi/imgs/planets.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/species.php"><img src="/swapi/imgs/species.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/starships.php"><img src="/swapi/imgs/starships.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/vehicles.php"><img src="/swapi/imgs/vehicles.jpg"></a>
			    <img src="/swapi/imgs/json_images/Luke Skywalker.jpg">
			</div>
		  </div>
		  <script>
			$(document).ready(function(){
			    $('.carousel').carousel({
			    	duration:100,
			    	indicators:true
				});
				autoplay()
			});
		 	
		  	function autoplay(){
		  		$('.carousel').carousel('next');
		  		setTimeout(autoplay,4500);
		  	}
		  	
		</script>
	</body>
</html>