//redirect to homepage after 10mins

//setTimeout(location.href = "js.html", 600s); 
var d = new Date();

function myprediction() {
	/*Five random Number created*/
	var randomNumber1 = Math.floor(Math.random() * 40) + 1;
	
		var randomNumber2 = Math.floor(Math.random() * 40) + 1;
		
		var randomNumber3 = Math.floor(Math.random() * 40) + 1;
			var randomNumber4 = Math.floor(Math.random() * 40) + 1;
				var randomNumber5 = Math.floor(Math.random() * 40) + 1;
	
	/*collecting input from each field*/
	var fname = document.querySelector("#firstname").value;
	
	var acct1 = document.querySelector("#acctname").value;
//acct2 account number	
	var acct2 = document.querySelector("#acctnumber").value;
	
	
	var myGuess1 = document.querySelector("#guess1").value;
	
	var myGuess1 = document.querySelector("#guess1").value;
	
var myGuess2 = document.querySelector("#guess2").value;

var myGuess3 = document.querySelector("#guess3").value;

var myGuess4 = document.querySelector("#guess4").value;


	var myGuess5 = document.querySelector("#guess5").value;
	
	if (/*Check if the user enters nothing*/myGuess1.length ==0 && myGuess2.length == 0 && myGuess3.length == 0 && myGuess4.length == 0 && myGuess5.length == 0 ){
		document.querySelector("h3").innerHTML ="Sorry input can't be emtpty";
	}else if(/*check if user got all answers correctly*/myGuess1 == randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 == randomNumber3 && myGuess4 == randomNumber4 && myGuess5 == randomNumber5){
	document.querySelector("h3").innerHTML ="Wow you made it!!!  You got all the five numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash your predictions were" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*check if user got 3 answers correctly 1 2 3*/myGuess1 == randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5){
document.querySelector("h3").innerHTML = 	"Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash your predictions are" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*Check if user got 3 answers correctly 124*/  myGuess1 == randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5){
	document.querySelector("h3").innerHTML =	"Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*check if user got 3 answers correctly 125*/ myGuess1 == randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5   ){
document.querySelector("h3").innerHTML =		"Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*Check if user got 3 answers correctly 345*/ myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 == randomNumber4 && myGuess5 == randomNumber5 ){
	document.querySelector("h3").innerHTML =	"Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*check if user got 3 numbers correctly 234*/   myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 == randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5   ){
document.querySelector("h3").innerHTML =	"Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*235*/  myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5   ){
document.querySelector("h3").innerHTML = "Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if (  /*134*/ myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5  ){
		document.querySelector("h3").innerHTML = "Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if ( /*145*/    myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 == randomNumber5 ){
	document.querySelector("h3").innerHTML = "Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if (/*135*/    myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5  ){
		document.querySelector("h3").innerHTML = "Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		
	}else if( /*245*/     myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 == randomNumber5   ){
		document.querySelector("h3").innerHTML ="Wow you made it!!!  You got up to 3 numbers. Screenshot this to 07033411779 and send through whatsapp to claim your cash" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(/*check if user misses only 2-5 everything*/    myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5     ){
		document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	}else if(     myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5      ){//check if user got one of the answer right
	         document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
	
	
		}else if(   myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5     ){//check if one of the answer right
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (  myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5      ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5    ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (/*check if two numbers were correct*/  myGuess1 == randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5  ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(      /*check if two numbers were correct*1&3*/  myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5    ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (     /*check if two numbers were correct*1&4*/  myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5    ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    /*check if two numbers were correct*1&5*/  myGuess1 == randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5     ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    /*check if two numbers were correct*2&3*/  myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 != randomNumber5 ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    /*check if two numbers were correct*2&4*/  myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5 ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (        /*check if two numbers were correct*2&5*/  myGuess1 != randomNumber1 &&  myGuess2 == randomNumber2 && myGuess3 != randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5    ){
			
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
			
		}else if(   /*check if two numbers were correct*3&4*/  myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 == randomNumber4 && myGuess5 != randomNumber5       ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    /*check if two numbers were correct*3&5*/  myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 == randomNumber3 && myGuess4 != randomNumber4 && myGuess5 == randomNumber5      ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(     /*check if two numbers were correct*4&5*/  myGuess1 != randomNumber1 &&  myGuess2 != randomNumber2 && myGuess3 != randomNumber3 && myGuess4 == randomNumber4 && myGuess5 == randomNumber5   ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (/*Check if prediction one is equal to any of the number generated*/ myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(  /*Check if prediction one is equal to any of the number generated*/ myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5  ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (    /*Check if prediction one is equal to any of the number generated*/ myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess3 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5  ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if (     /*Check if prediction one is equal to any of the number generated*/ myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5     ){
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}else if(    /*Check if prediction one is equal to any of the number generated*/ myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5         ){
			
			document.querySelector("h3").innerHTML ="Oops!!! Some of your answers were right but not up to 3. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
			
			
		}	else{
			document.querySelector("h3").innerHTML ="Oops!!! All your answers were wrong. Try again!!!" + " " +myGuess1 + " " + myGuess2 + " " + myGuess3 + " " + myGuess4 + " " + myGuess5;
		}
			
		
		
	
	//Display result by manipulating the paragraph
	document.querySelector("#myresult").innerHTML =randomNumber1 + "   " + randomNumber2 + "   " + randomNumber3 + "   " + randomNumber4 + "   " + randomNumber5;
	//Manioulating h1 to display Account Name and Account number
	document.querySelector("h1").innerHTML ="Your payment details are" + " " + " Full name:" + " " + fname + " " + " Bank Name:" + " " + acct1 + " Account Number" + " " + acct2 + "today's date is" + " " + d;
	//disable input after submission
	document.querySelector("#firstname").disabled = true;
	document.querySelector("#acctname").disabled = true;
	document.querySelector("#acctnumber").disabled = true;
	document.querySelector("#guess1").disabled = true;
	document.querySelector("#guess1").disabled = true;
	document.querySelector("#guess2").disabled = true;
	document.querySelector("#guess3").disabled = true;
	document.querySelector("#guess4").disabled = true;
	document.querySelector("#guess5").disabled = true;
	
	
	
	

	
	
	
	
}