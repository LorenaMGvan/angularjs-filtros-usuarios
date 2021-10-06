angular.module('agendaApp.userscontrol', [])

.controller('usersCtrl', ['$scope', '$filter','$log', 'FacUsers', function($scope, $filter, $log , FacUsers) {        

        $scope.usersList = [];
        $scope.loading = true;

        $scope.showUsers = () => {
                FacUsers.getusers().then( function (response) {                         
                        $scope.usersList = response;  
                        $scope.loading = false;                                                                                                                      
                }).catch(function(error) {                                                                                                 
                        $log.info(error);                              
                });              
        }  

        $scope.showUsers();
}]);              

