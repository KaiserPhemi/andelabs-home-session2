(function(){
	
	'use strict';
	
	module.exports = {

		words : function(stringArg){
			
			var checkInput = (typeof stringArg != 'string')? "Input must be a string" :
							(stringArg.length == 0)? "No string input was supplied" : countString(stringArg);
			return checkInput;

			function countString(stringArg){
				
				/*Converts multiple occurences of whitespace character into a
				single spaceand transform input to an array */
				var stringDataSet = stringArg.replace(/\s+/g, ' ').split(' '),

					resultingObject = {},
					value;

				for (var counter = 0; counter < stringDataSet.length; counter++){
					value = (stringDataSet[counter]);

					if (!(resultingObject.hasOwnProperty(value))){
					
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