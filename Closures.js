/**
 * Closures are functions inside a function. 
 * Closure helps to access outer function variable from inner function. 
 * Closures helps to implement OOP concept in JavaScript 
 * 
 */

function Employee(empId,empName){
	console.log("Inside Emp")
	var empId = empId;
	var empName = empName ;
	function validate(){
		console.log("Do some validation: ", this.empId , this.empName );
		console.log(this)
	}
	function salary(){
		console.log("salary of empId: ", empId , "is 50000");
	}
	
	return {
		empId,
		empName,
		validate
	}
}

let e = new Employee(1001 , "Arghya");
e.validate();