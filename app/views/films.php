<!DOCTYPE html>
<html>
	<head>
		<title>Films</title>
		<?php require_once("../../include/head.php"); ?>
	</head>
	<body>
		<script>
			api_call('films',1)
		</script>
		<main>
			<?php require_once("../../include/nav.php"); ?>
			<h2 id="sec_title"> Films </h2>
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
