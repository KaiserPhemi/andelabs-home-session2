(function(){
	'use strict';

	module.exports = {
		reverseString : function(stringArg){
			var result = (typeof stringArg != 'string') ? "Input must be a string":
						(stringArg == "") ? null : reverse(stringArg);
			return result;

			function reverse(stringArg){
				
				/*Ternary operation that converts string to array, reverses it and converts it back to string*/
				var reverseResult = (stringArg.split("").reverse().join("") == stringArg) ? true : stringArg.split("").reverse().join("");
				return reverseResult;
			}

		}
	};
})();