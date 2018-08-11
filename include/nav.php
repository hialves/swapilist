<header>
	<!--<nav>
		<a class="btn-flat waves-effect waves-yellow waves-ripple" href="/swapi/index.php">Home</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/films.php">Films</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/characters.php">Characters</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/planets.php">Planets</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/species.php">Species</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/starships.php">Starships</a>
		<a class="waves-effect waves-yellow" href="/swapi/app/views/Vehicles.php">Vehicles</a>
	</nav>
-->
	<ul id="slide-out" class="sidenav">
	    <li>
	    	<div class="user-view">
		    	<div class="background">
		    		<img src="/swapi/imgs/background2.jpg">
		    	</div>
		    	<a href="#user"><img class="circle" src="/swapi/imgs/star-wars.png"></a>
		    	<a href="#name"><span class="white-text name"></span></a>
		    	<a href="#email"><span class="white-text email"></span></a>
	    	</div>
	    </li>
	    <li><a class="waves-effect waves-light waves-ripple" href="/swapi/index.php">Home</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/films.php">Films</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/characters.php">Characters</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/planets.php">Planets</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/species.php">Species</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/starships.php">Starships</a></li>
		<li><a class="waves-effect waves-yellow" href="/swapi/app/views/Vehicles.php">Vehicles</a></li>
  	</ul>
  <img data-target="slide-out" class="sidenav-trigger" id="icon" class="material-icons" src="/swapi/imgs/menu_icon.png">
	<script>
		$(document).ready(function(){
		    $('.sidenav').sidenav();
		});
	</script>
</header>