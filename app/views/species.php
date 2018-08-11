<!DOCTYPE html>
<html>
	<head>
		<title>Species</title>
		<?php require_once("../../include/head.php"); ?>
	</head>
	<body>
		<script>
			api_call('species',1)
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
