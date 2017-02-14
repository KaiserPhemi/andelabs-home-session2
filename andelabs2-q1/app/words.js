(function(){
	
	'use strict';
	
	module.exports = {

		words : function(stringArg){
			
			var checkInput = (typeof stringArg != 'string')? "Input must be a string" :
							(stringArg.length == 0)? "No string input was supplied" : countString(stringArg);
			return checkInput;

			function countString(stringArg){
				
				var stringDataSet = stringArg.split(" ") || stringArg.split("\t");
				var resultingObject = {};
				var value;

				for (var counter = 0; counter < stringDataSet.length; counter++){
					value = stringDataSet[counter];
										
					if (resultingObject[value] == undefined  || resultingObject[value] == null) {
					
						resultingObject[value] = 1;
					}
					else{
					
						resultingObject[value]++;
					}
				}
				return (resultingObject);

			}
			

		}
	};
})();