<!DOCTYPE html>
<html>
	<head>
		<title>Planets</title>
		<?php require_once("../../include/head.php"); ?>
	</head>
	<body>
		</div>
		<script>
			api_call('planets',1)
		</script>
		<main>
			<?php require_once("../../include/nav.php"); ?>
			<div id="masterlist">
				<ul id="list"></ul>
			</div>
		</main>
		<div id="popup">
			<button id='close' onclick="close_popup()">X</button>
			<div id="data"></div>
		</div>
	</body>
</html>	
