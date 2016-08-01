'use strict';

function greeting(name) {
	return "Hello, " + name + "!";
}

function personGreeting(Person, beFormal) {
	var name = Person.firstName + " " + Person.lastName;

	if (beFormal === true) {
		return "Hello, " + name + "!";
	} else {
		return "Hi, " + Person.firstName + "!";
	}
   }

function Person(fName, lName, isPolite) {
	var result;
	this.firstName = fName;
	this.lastName = lName;
	this.isPolite = true;

	this.bePolite = function (param) {
		this.isPolite = param;
		return this.isPolite;
	};

	this.introduce = function (other) {
		var introduction;

		if (this.isPolite === true) {
			introduction = "Казвам се " + this.firstName + " " + this.lastName + ".";
		} else {
			introduction = "Аз съм " + this.firstName + ".";
		}

		return this.greet(other) + " " + introduction;
	};

	this.greet = function (otherPerson) {
		if (otherPerson !== undefined) {
			if (this.isPolite === true) {
				result = "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
			} else {
				result = "Здрасти, " + otherPerson.firstName + "!";
			}
		} else {

			if (this.isPolite === true) {
				result = "Здравейте!";
			} else {
				result = "Здрасти!";
			}
		}
		return result;
	};
}