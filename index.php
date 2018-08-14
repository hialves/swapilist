<!DOCTYPE html>
<html>
	<head>
		<?php require_once("include/head.php"); ?>
		<script>
			window.onscroll = function(){
				if(document.documentElement.scrollTop > 500){
					document.getElementById('menu_alert').style.display = "block"
				}else{
					document.getElementById('menu_alert').style.display = "none"
				}
			}
		</script>
	</head>
	<body>
		<?php require_once("include/nav.php"); ?>

		<h2 id="sec_title"> Learn more about <span>Star Wars</span> !</h2>
		<div class="carousel">
			<img style="position:absolute" src="http://epicwallpaperz.com/wallpaper-hd/star-wars-wallpapers-desktop-background-On-wallpaper-hd.jpg">
			<div class="carousel-inner">
				<a class="carousel-item" href="/swapi/app/views/vehicles.php"><img src="/swapi/imgs/vehicles.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/characters.php"><img src="/swapi/imgs/characters.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/films.php"><img src="/swapi/imgs/films.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/planets.php"><img src="/swapi/imgs/planets.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/species.php"><img src="/swapi/imgs/species.jpg"></a>
			    <a class="carousel-item" href="/swapi/app/views/starships.php"><img src="https://www.starmourn.com/wp-content/uploads/2017/10/starships-header-800x418.jpg"></a>
			    
			</div>
		  </div>
		  <script>
			$(document).ready(function(){
			    $('.carousel').carousel({
			    	dist: 0,
				    padding: 0,
				    fullWidth: true,
				    indicators: true,
				    duration: 100,
				});
				autoplay()
			});
		 	
		  	function autoplay(){
		  		setTimeout(autoplay,4500);
		  		$('.carousel').carousel('next');
		  	}
		  	
		</script>
		<div id="characters">
			<img src="/swapiteste/imgs/background3.jpg">
			<a href="/swapi/app/views/characters.php"><button>Start</button></a>
		</div>

	</body>
</html>