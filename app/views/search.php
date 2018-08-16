<!DOCTYPE html>
<html>
	<head>
		<title>Search</title>
		<?php require_once("../../include/head.php"); ?>
		<style>
			p{
				color: crimson;
				font-size: 20px;
				text-align:center;
				font-family: 'starwars';
			}
		</style>
	</head>
	<body>
		<script>
			var path = "<?php echo $_GET["path"] ?>"
			var text = "<?php echo $_GET["text"] ?>"
			var list = document.getElementById('list')
			var html = ""
			$.ajax({
				type:"GET",
				url: "https://swapi.co/api/"+path+"/?search="+text,
				dataType: 'json'
			}).done(function(data){
				getData(path,data,1)
			}).fail(function(){
				console.log("erro")
			});

		</script>
		<main>
			<?php require_once("../../include/nav.php"); ?>
			<h2 id="sec_title" style="font-size:20px"> Search: <?php echo $_GET["text"]; ?> </h2>
			<div class="container">
				<div id="masterlist">
					<ul id="list"></ul>
				</div>
			</div>
		</main>
		<div id="popup">
			<button id='close' onclick="close_popup()">X</button>
			<div class="container"><div id="data"></div></div>
		</div>
	</body>
</html>	