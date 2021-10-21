//TASK 1
for(var i = 1; i <= 10; i++)
{
	console.log(("6 x ") + i + (" = ") + i*6);
}

//TASK 2
function CheckAge()
{
	if (document.getElementById("age").value < 18)
	{
		alert("You are not old enough to vote.");
	}
	if (document.getElementById("age").value >= 18)
	{
		alert("You are old enough to vote.");
	}
}

//TASK 3
function Time()
{
	document.getElementById('time').innerHTML = Date()
}

//TASK 4
function Greeting()
{
	alert("Hello " + document.getElementById("firstname").value + " " + document.getElementById("lastname").value + ".");
}

//TASK 5
function SetColour()
{
	var red = document.getElementById("red").value;
	var grn = document.getElementById("grn").value;
	var blu = document.getElementById("blu").value;	
	document.getElementById("colourbox").style.backgroundColor = "rgb("+red+" , "+grn+" , "+blu+")";
}