angular.module('question').component('question', {
	templateUrl : 'app/question/question.template.html',
	controller : function QuestionController($http, $window, $rootScope) {
		var self = this;
		$http.get('app/question/question.data.json').then(function(response) {
			self.gps = response.data
		});

		self.valider = function valider() {
			var resultat = {
				"NA" : 0,
				"EA" : 0,
				"NC" : 0,
				"EC" : 0,
				"EI" : 0,
				"EN" : 0,
				"ES" : 0,
				"TS" : 0,
				"ET" : 0,
				"CN" : 0
			}
			angular.forEach(self.reponses, function(value) {
				value = angular.fromJson(value);
				if (Object.keys(value) != "") {
					key = Object.keys(value);
					value = value[key];
					resultat[key] = resultat[key] + value;
				}
			});
			self.resultat = resultat;
			self.showresult = true;
			//$rootScope.Ui.turnOn('event')
		}

	}

})
