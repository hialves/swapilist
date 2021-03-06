<head>
	<link href="/swapi/app/css/index.css" rel="stylesheet">
</head>
<header>
	<div class="load"></div>
	<ul id="slide-out" class="sidenav">
	    <li>
	    	<div class="user-view">
		    	<div class="background">
		    		<img src="/swapi/imgs/background2.jpg">
		    	</div>
		    	<a href="#user"><img class="circle" src="/swapi/imgs/star-wars.png"></a>
	    	</div>
	    </li>
	    <li><a class="btn-flat waves-effect waves-light" href="/swapi/index.php">Home</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/films.php">Films</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/characters.php">Characters</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/planets.php">Planets</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/species.php">Species</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/starships.php">Starships</a></li>
		<li><a class="btn-flat waves-effect waves-light" href="/swapi/app/views/Vehicles.php">Vehicles</a></li>
  	</ul>
  <nav>
  	<img data-target="slide-out" class="sidenav-trigger" id="icon" class="material-icons" src="/swapi/imgs/menu_icon.png">
  	<p id="menu_alert">Menu</p>
  	<div id="search">
  		<input type="text" id="text" maxlength="50">
  		<select id="select_value">
  			<option value="people">Characters</option>
  			<option value="films">Films</option>
  			<option value="planets">Planets</option>
  			<option value="species">Species</option>
  			<option value="starships">Starships</option>
  			<option value="vehicles">Vehicles</option>
  		</select>
  		<button onclick="search()">Search</button>
  	</div>
  	<a id="center_logo" class="brand-logo center">Star Wars</a>
  </nav>
	<script>
		$(document).ready(function(){
		    $('.sidenav').sidenav();
		});
	</script>
</header>
<footer>TM & © Lucasfilm Ltd. All Rights Reserved</footer>