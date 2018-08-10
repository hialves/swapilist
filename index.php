<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
		<script src="app/js/md5.js"></script>
		<script src="app/js/api.js"></script>
		<link href="app/css/fulllist.css" rel="stylesheet">
	</head>
	<body>
		<?php require_once("include/nav.php"); ?>
		<ul id="lista"></ul>
		<script>api_call()</script>
	</body>
</html>