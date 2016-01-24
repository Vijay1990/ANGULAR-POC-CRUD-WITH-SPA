/* 
 *	ctrlApp.js : This File acts the App's base controller.
 */
 angularControllers.controller('ContactCtrl', ['$scope','factoryTriggerRestApi', function($scope,factoryTriggerRestApi) {

    $scope.init = function() {
    	// App Base Controller Actions 
    	//url, params, data, headers, callbackSuccess, callbackFailure
    	$scope.contactDatas = {};
        $scope.lastProcess = null;
    	$scope.footerUrl = '../partials/footer.html';
    	$scope.contacts = [
	    	{id:'1',name:'vijay',gender:'Male',mobile:'123',location:'chennai1',display:true},
	    	{id:'2',name:'aaaa',gender:'Male',mobile:'124',location:'chennai2' ,display:true},
	    	{id:'3',name:'bbbb',gender:'Male',mobile:'125',location:'chennai3' ,display:true},
	    	{id:'4',name:'cccc',gender:'Male',mobile:'126',location:'chennai4' ,display:true},
	    	{id:'5',name:'dddd',gender:'Male',mobile:'127',location:'chennai5' ,display:true}
    	];
    	$scope.datasLength = $scope.contacts.length+1;
    	$scope.Fieldname = Object.keys($scope.contacts[0]);
    	$scope.datasFieldLength = $scope.Fieldname.length;

    	$scope.emptyField = function(){
    		var ele = document.querySelectorAll('.user-input .form-control');
    		angular.element(ele).val('');
    		$scope.contactDatas = {};
    	};

    	$scope.addData = function(val){
    		$scope.addFlag = val;
    		if(!val){
    			$scope.emptyField();
    			$scope.lastProcess = null;

    		}
    	};

    	$scope.processData = function(id,flag,datas){

			var ele = document.querySelectorAll('.user-input .form-control');
    		var validData = $(ele).hasClass('ng-invalid-required');
    		$scope.datas = angular.copy(datas);

    	/*Insert*/
    		if(id==""&&flag=="add" && !validData){
    			//console.log();
    			$scope.datas['display'] = true;
    			$scope.contacts.push($scope.datas); 
    			$scope.emptyField();   				    		

		/*Update Fetch*/
    		} else if(id&&flag=="up"){
    			$scope.upid = id;
    			$scope.addFlag = true;
				for(var i in $scope.contacts){
					if($scope.contacts[i]['id']==id)
					$scope.contactDatas = $scope.contacts[i];
					$scope.lastProcess = "update";
					//$scope.emptyField();
				}

		/*Delete*/
    		} else if(id&&flag=="del"){
    			for(var i in $scope.contacts){
					if($scope.contacts[i]['id']==id)
    					$scope.contacts[i]['display'] = false;
    					$scope.emptyField();
    					$scope.lastProcess = null;				
				}				
    		}
    	}; 
    	$scope.UpdateDetails = function(datas){ 
    		if(datas.length){
	    		for(var i in $scope.contacts){     		
		    		if($scope.contacts[i]['id']==$scope.upid){
		    			for(var j in $scope.contacts[i]){
		    				$scope.contacts[j] = datas[j];
		    			}
						$scope.emptyField();
		    		}
	    		}
    		}
    	};
    };

    $scope.init();
}]);

