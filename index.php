<!doctype html>
<!--<html ng-app="gpsApp" lang="fr" manifest="cache.manifest">-->
<html ng-app="gpsApp" lang="fr">
<head>
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="stylesheet"
	href="libs/bootstrap/bootstrap-3.3.7/css/bootstrap.min.css">	
<link rel="stylesheet"
	href="libs/mobile-angular-ui/css/mobile-angular-ui-base.min.css">
<link rel="stylesheet" href="app/app.css">
<script src="libs/angular/angular-1.5.8/angular.min.js"></script>
<script src="libs/angular/angular-1.5.8/angular-route.min.js"></script>
<script src="libs/angular/angular-1.5.8/angular-resource.min.js"></script>
<script src="libs/angular/angular-1.5.8/angular-animate.min.js"></script>
<script src="libs/mobile-angular-ui/js/mobile-angular-ui.min.js"></script>
<script src="app/app.module.js"></script>
<script src="app/app.config.js"></script>
<script src="app/question/question.module.js"></script>
<script src="app/question/question.component.js"></script>
<title ng-bind="$root.title">Pour vivre un GPS</title>
</head>
<body>
	<div ng-view></div>
</body>
</html>

