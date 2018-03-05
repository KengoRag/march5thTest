var subjects = [
	"Math",
	"English",
	"Science",
	"Social Studies"];

var string = "This is a string";

subjects.pop(3);

subjects.push(string);

console.log(subjects);

function forLoop() {
	var i ;
	var text= " " ;
	for (i = 0; i <subjects.length; i++) {
		text += subjects[i] + "<br>";
	}

	document.getElementById("fourth").innerHTML = forLoop;
};

var person = {
	firstName: "George",
	lastName: "Orwell",
	book: "Animal Farm"
}

document.getElementById("fourth").innerHTML= person;