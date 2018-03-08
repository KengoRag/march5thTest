	var subjects = [
	"Math",
	"English",
	"Science",
	"Social Studies"];

	var string = "Music";

	subjects.pop(3);

	subjects.push(string);

	console.log(subjects);

	var i; 

	var text = " ";


function printArray() {
	var i; 

	var text = " ";

	for (i=0; i<4; i++) {
		text += subjects[i] + " ";
	}

	document.getElementById("fourth").innerHTML = text;

	var person = {
		firstName: "John",
		lastName: "Smith",
		Major: "History"
	}

	var text2 = person.firstName + " " + person.lastName + " " + person.Major

	document.getElementById("fourthSecond").innerHTML = text2;
}




