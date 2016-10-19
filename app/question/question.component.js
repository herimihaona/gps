angular
		.module('question')
		.component(
				'question',
				{
					templateUrl : 'app/question/question.template.html',
					controller : [
							'$http',
							'$window',
							'$rootScope',
							'$scope',
							function QuestionController($http, $window,
									$rootScope, $scope) {

								var self = this
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
								};

								self.msgClass = null;
								self.msg = null;

								$http.get('app/question/question.data.json')
										.then(function(response) {
											self.gps = response.data
										});

								self.valider = function valider() {
									if ($scope.formQuestion.$valid) {
										angular
												.forEach(
														self.reponses,
														function(value) {
															value = angular
																	.fromJson(value);
															if (Object
																	.keys(value) != "") {
																key = Object
																		.keys(value);
																value = value[key];
																resultat[key] = resultat[key]
																		+ value;
															}
														});
										self.resultat = resultat;
										self.showresult = true;
									} else {
										self.msgClass = "error";
										self.msg = 'Tu dois r\351pondre \340 toutes les questions';
										$rootScope.Ui.turnOn('modalMsg');
									}
								}

								self.reset = function reset() {
									self.resultat = resultat;
									self.showresult = false;
									self.reponses = null;
								}

								$scope.sendmail = function sendmail(user) {
									var data = angular.toJson({
										user : user,
										gps : {
											glossaire : self.gps.glossaires,
											resultat : self.resultat
										}
									});
									$http(
											{
												method : 'post',
												url : 'app/question/question.sendmail.php',
												data : data
											})
											.then(
													function successCallback(
															response) {
														if (response.data == 1) {
															self.msgClass = 'success';
															self.msg = 'Bravo! Tes r\351ponses sont bien envoy\351es \340 ton animateur. Au revoir ' + user.name + '.';
														} else {
															self.msgClass = 'error';
															self.msg = 'D\351sol\351, Tes r\351ponses ne sont pas envoy\351es. Copie les vite sur un papier pour ne pas les perdre.';
														}
														$rootScope.Ui
																.turnOff('modalSendmail');
														$rootScope.Ui
																.turnOn('modalMsg');
													},
													function errorCallback(
															response) {

													});

								}

							} ]

				})
