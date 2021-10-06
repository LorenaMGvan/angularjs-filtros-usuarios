'use strict';

  angular.module('agendaApp.users',[])

  .factory('FacUsers', [ '$q', '$http', function ($q, $http){

    let self = {
            users: [],
            getusers: getusers,
    }; 
    
function getusers() {            

            let q = $q.defer(); 

            $http.get("https://jsonplaceholder.typicode.com/users")
                .then(function(response) {                           
                        window.setTimeout(function() {                
                                self.users = response.data;                              
                                q.resolve(response.data); 
                        }, 1000);                        
                })
                .catch(function(error) {
                        return q.reject(error);
                });                
                                                            
            return q.promise;
    }         
   
    return self; 

}]);

