// ES5 

function add(a,b){
	return a + b;
}

exports.add = add;	
module.exports.sub = function(a, b ){
		return a - b;
}