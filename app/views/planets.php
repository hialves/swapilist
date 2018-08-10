<!DOCTYPE html>
<html>
	<head>
		<title>Series</title>
		<meta charset="utf-8">
		<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
		<script src="../js/md5.js"></script>
		<script src="../js/api.js"></script>
		<link href="../css/fulllist.css" rel="stylesheet">
		<link href="../css/letterbutton.css" rel="stylesheet">
		<script src="../js/functions.js"></script>
	</head>
	<body>
		<?php require_once("../../include/nav.php"); ?>
		<div id="letters">
			
		</div>
		<script>
			search_buttons('series')
			api_call('series')
		</script>
		<ul id="list"></ul>
	</body>
</html>	
