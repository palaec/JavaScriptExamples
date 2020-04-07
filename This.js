/**
 * This refers to an object , that object which is executing the current bit of javascript code.
 */
"use strict";
this.i = "Lets study this";
console.log(this);
const e = {
 x : 1,
	// From Regular function and a timeout function
	 validate1(){
		console.log("validate1" , this);
		let that = this;
		setTimeout(function(){
			console.log("validate1 set timeout " , this);
			console.log("validate1 set timeout: that " , that.x);
		},100);
	},
	// Arrow function
	validate2 : ()=>{
		console.log("validate2" , this);
	},
	
	// fat arrow function inside a function
	 validate3(){
		 let val = ()=>{
			console.log("validate3" , this);
		}	
		 return val;
	 },
	 
	// function inside a function
	 validate4(){
		 let v="abc";
		 let that = this;
		let val = function(){
			console.log("validate4 :  this " , this);
		 console.log("validate4 : that " , that);
		 console.log("validate4 : " , v);
		 console.log("validate4 : " , that.x);
		}
		return val;
		 
	}
}


e.validate1();

console.log("////////////");

e.validate2();

console.log("////////////");

e.validate3().call();

console.log("////////////");

e.validate4().call();
