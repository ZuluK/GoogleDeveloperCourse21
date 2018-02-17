

//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
/*
QUIZ QUESTION
We’ve decided to replace some of the donuts in the donuts array.
*/
var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

donuts.pop();
donuts.pop();
donuts.pop();
donuts.push("maple walnut");
donuts.pop();
donuts.push("sprinkled");


//What does the donuts array look like after the following changes?

//["glazed","sprinkled"]
