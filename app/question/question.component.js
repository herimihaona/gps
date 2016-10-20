angular
    .module('question')
    .component(
        'question', {
            templateUrl: 'app/question/question.template.html',
            controller: [
                '$http',
                '$window',
                '$rootScope',
                '$scope',
                '$filter',
                function QuestionController($http, $window,
                    $rootScope, $scope, $filter) {
                    var self = this
                    self.msgClass = null;
                    self.msg = null;

                    $http.get('app/question/question.data.json')
                        .then(function(response) {
                            self.gps = response.data
                        });

                    self.valider = function valider() {
                        if ($scope.formQuestion.$valid) {
                            self.resultat = calculResultat(self.reponses);
                            self.showresult = true;
                        } else {
                            self.msgClass = "error";
                            self.msg = 'Tu dois r\351pondre \340 toutes les questions';
                            $rootScope.Ui.turnOn('modalMsg');
                        }
                    }

                    self.reset = function reset() {
                        self.resultat = {}
                        self.showresult = false;
                        self.reponses = null;
                    }

                    self.mailto = function mailto() {
                        var to = 'Mets ici le mail de ton animateur';
                        var subject = 'Pour vivre un GPS ] Mets ici ton nom et ton pr\351nom';
                        var body = resultatToString(self.resultat);
                        $window.open("mailto:" + to + "?subject=" +
                            subject + "&body=" + body,
                            "_self");
                    }

                    function calculResultat(reponse) {
                        var resultat = {};
                        angular.forEach(reponse, function(value) {
                            value = angular.fromJson(value);
                            if (Object.keys(value) != "") {
                                key = Object.keys(value);
                                value = value[key];
                                resultat[key] = (resultat[key] ? resultat[key] : 0) + value;
                            }
                        });
                        return resultat;
                    }

                    function resultatToString(resultat) {
                        var ret = [];
                        angular.forEach(resultat, function(value,
                            key) {
                            this.push(' ' +
                                self.gps.glossaires[key] +
                                ':' + value);
                        }, ret);
                        return ret.toString();
                    }

                }
            ]

        })