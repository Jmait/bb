//redirect to homepage after 10mins

//setTimeout(location.href = "js.html", 600000); 
var d =  Date();

function myprediction() {
	/*Five random Number created*/
	var randomNumber1 = Math.floor(Math.random() * 30) + 1;
	
		var randomNumber2 = Math.floor(Math.random() * 30) + 1;
		
		var randomNumber3 = Math.floor(Math.random() * 30) + 1;
			var randomNumber4 = Math.floor(Math.random() * 30) + 1;
				var randomNumber5 = Math.floor(Math.random() * 30) + 1;
	
	/*collecting input from each field
	var fname = document.querySelector("#firstname").value;
	
	var acct1 = document.querySelector("#acctname").value;
//acct2 account number	
	var acct2 = document.querySelector("#acctnumber").value;
	
	*/
	var myGuess1 = document.querySelector("#guess1").value;
	
	var myGuess1 = document.querySelector("#guess1").value;
	
var myGuess2 = document.querySelector("#guess2").value;

var myGuess3 = document.querySelector("#guess3").value;

var myGuess4 = document.querySelector("#guess4").value;


	var myGuess5 = document.querySelector("#guess5").value;
	
	if (/*Check if the user enters nothing*/myGuess1.length ==0 && myGuess2.length == 0 && myGuess3.length == 0 && myGuess4.length == 0 && myGuess5.length == 0 ){
		document.querySelector("h3").innerHTML ="Sorry input can't be emtpty";
	
	}
	//check if user got everything
	else if ((myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 != randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 == randomNumber2 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber2 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)  ){
		document.querySelector("h3").innerHTML ="Perfect Prediction your predictions are";
	}
	
	
	
	
	
	
	//check if three numbers 123 is correct first
	else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three" + " " + myGuess1 + " " + myGuess2 + " " + myGuess3;
		
		//check if three numbers is correct 124
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check 125
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check if it is 234
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check if any number in 235 is correct
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check if any number in 134 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check if any number in 135 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check if number in  145 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	
	}//check 345
	else if(  (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	//check 245
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="Congratulations you got up to three"
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//check if it missed all prediction
	else if ((myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber2 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber2 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber2 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)  ){
		document.querySelector("h3").innerHTML ="Your prediction were wrong or you didn't get up to three'";
	}else{
		document.querySelector("h3").innerHTML ="Some of your predictions were right";
	}
			
		
		
	
	//Display result by manipulating the paragraph
	document.querySelector("#myresult").innerHTML = " Here are the results" + " "+ randomNumber1 + "   " + randomNumber2 + "   " + randomNumber3 + "   " + randomNumber4 + "   " + randomNumber5;
	//Manioulating h1 to display Account Name and Account number
	//document.querySelector("h1").innerHTML ="Your payment details are" + " " + " Full name:" + " " + fname + " " + " Bank Name:" + " " + acct1 + " Account Number" + " " + acct2 + "today's date is" + " " + " " + d;
	//disable input after submission
	/*document.querySelector("#firstname").disabled = true;
	document.querySelector("#acctname").disabled = true;
	document.querySelector("#acctnumber").disabled = true;*/
	document.querySelector("#guess1").disabled = true;
	document.querySelector("#guess1").disabled = true;
	document.querySelector("#guess2").disabled = true;
	document.querySelector("#guess3").disabled = true;
	document.querySelector("#guess4").disabled = true;
	document.querySelector("#guess5").disabled = true;
back = 	document.querySelector("#predict-btn").disabled = true;
	//Return to the payment page after 1mins
	if (back==true){
		


setTimeout(function(){ window.replace = "predict.html";},1*60*1000);
	}else{
		alert("Go back to homepage")
	}
	

	document.querySelector("h1").innerHTML =" You played at" + " " + d

	
	
	
	
}
/*I want 15 numbers to be generated randomly,
 check if user get any numbers correctly(starting from one to two, tell them to try again but if user got three tell them they win)*/
