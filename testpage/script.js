//alert("Hello World 1");
document.write("Hello World 2");
console.log("Hello World 3");

var age = 18;
var count = 0;
//if(age => 18)
//{
//	alert("You can have alcohol!");
//}

do
{
	count++;
	console.log(count);
}
while(count != 10)


for(let i = 0; i < 5; i++)
{
	console.log(i*3);
}

function SayHello()
{
	alert("Hello!");
}

var num1 = 8;
var num2 = 6;

function Multiply(A, B)
{
	return A * B;
}

document.write("<br>", num1, " x ", num2, " = ", Multiply(num1, num2));

function Greeting()
{
	alert("Hello " + document.getElementById("firstname").value + " " + document.getElementById("lastname").value + ".");
}

