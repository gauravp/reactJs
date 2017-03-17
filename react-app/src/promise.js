var Promise = require("bluebird");

import React from "react";

// generate odd number
// use math random, only one
// return result after 3 seconds.


function generateOddNumber(){

	let promise = new Promise(function(resolve, reject){

	setTimeout( () => {

	let n = Math.ceil(Math.random() * 100);
			if(n % 2 ==1){
				resolve(n);
			}else{
				reject(new Error("failed"));
			}

		}, 3000);


	})	;

	return promise;



	
}

console.log(generateOddNumber());

generateOddNumber()
.then( (n) => {
	console.log("got odd no", n);
})
.catch( error => {
	console.log("error", error);
})