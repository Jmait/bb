//redirect to homepage after 10mins

//setTimeout(location.href = "js.html", 600000); 
var d =  Date();

var randomStorage1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var randomStorage2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

	var randomStorage3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
	
	var randomStorage4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
	var randomStorage5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60,]
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var randomNumber1 = randomStorage1[Math.floor(Math.random()*randomStorage1.length)];
	
		var randomNumber2 =  randomStorage2[Math.floor(Math.random()*randomStorage2.length)];
		
		var randomNumber3 =  randomStorage3[Math.floor(Math.random()*randomStorage3.length)];
			var randomNumber4 = randomStorage4[Math.floor(Math.random()*randomStorage4.length)];
				var randomNumber5 = randomStorage5[Math.floor(Math.random()*randomStorage5.length)];






function myprediction() {
	/*Five random Number created*/
	
	
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
		document.querySelector("#myresult").innerHTML="Sorry input can't be empty";
	
	}else if ( myGuess1 == myGuess2 || myGuess1 == myGuess3 || myGuess1 == myGuess4 || myGuess1 == myGuess5 || myGuess2 == myGuess3 || myGuess2 == myGuess4 || myGuess3 == myGuess4 || myGuess3 == myGuess5 || myGuess4 == myGuess5){
		document.querySelector("h3").innerHTML ="Alert!!! Duplicate input error";
	}
	
	//check if user got everything
	else if ((myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)  ){
		document.querySelector("h3").innerHTML ="Perfect Prediction your predictions are";
	}
	
	//check if user got only myGuess1 and 2 corrwctky
	else if(     (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess1 + " " + myGuess2;
	}
	
	
		//check if user got only myGuess1 and 3 corrwctky
	else if(     (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess1 + " " + myGuess3;
	}
	
	//check if user got only myGuess1 and 4 corrwctky
	else if(     (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess1 + " " + myGuess4;
	}
	
	//check if user got only myGuess1 and 5 corrwctky
	else if(     (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess1 + " " + myGuess5;
	}
	
	//check if user got only myGuess2 and 3 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess2 + " " + myGuess3;
	}
	
	//check if user got only myGuess2 and 4 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess2 + " " + myGuess4;
	}
	
	
	
	
	//check if user got only myGuess2 and 5 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess2 + " " + myGuess5;
	}
	
	
	//check if user got only myGuess3 and 4 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess3 + " " + myGuess5;
	}
	
	
	
	//check if user got only myGuess3 and 5 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess3 + " " + myGuess5;
	}
	
	//check if user got only myGuess4 and 5 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 == randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only two of your prediction is right your right prediction is." + " " + myGuess4 + " " + myGuess5;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//check if user got  only myGuess1 one correcrly
	else if (                (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)       ){
		document.querySelector("h3").innerHTML ="Only one of your prediction is right your right prediction is." + " " + myGuess1;
	
	}
	//check if user got only myGuess2 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only one of your prediction is right your right prediction is." + " " + myGuess2;
	}//check if user got only myGuess3 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only one of your prediction is right your right prediction is." + " " + myGuess3;
	}
	//check if user got only myGuess4 correctly
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber3 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only one of your prediction is right your right prediction is." + " " + myGuess4;
	}
	
	
	//check if user got only myGuess5
	
	else if(     (myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber3 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 != randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber3 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)   ){
		document.querySelector("h3").innerHTML ="Only one of your prediction is right your right prediction is." + " " + myGuess5;
	}
	
	
	
	//check if three numbers 123 is correct first
	else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="  Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again  " + " " + myGuess1 + " " + myGuess2 + " " + myGuess3;
		
		//check if three numbers is correct 124
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="   Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again";
	//check 125
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="  Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again ";
	//check if it is 234
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess2 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="    Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again ";
	//check if any number in 235 is correct
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="  Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again";
	//check if any number in 134 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber3 || myGuess4 == randomNumber4 || myGuess4 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="      Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again"
	//check if any number in 135 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="  Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again"
	//check if number in  145 is correct
	}else if(  (myGuess1 == randomNumber1 || myGuess1 == randomNumber2 || myGuess1 == randomNumber3 || myGuess1 == randomNumber4 || myGuess1 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="    Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again  "
	
	}//check 345
	else if(  (myGuess3 == randomNumber1 || myGuess3 == randomNumber2 || myGuess3 == randomNumber3 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="   Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again  "
	//check 245
	}else if(  (myGuess2 == randomNumber1 || myGuess2 == randomNumber2 || myGuess2 == randomNumber3 || myGuess2 == randomNumber4 || myGuess2 == randomNumber5) &&    (myGuess4 == randomNumber1 || myGuess4 == randomNumber2 || myGuess4 == randomNumber4 || myGuess3 == randomNumber4 || myGuess3 == randomNumber5) &&     (myGuess5 == randomNumber1 || myGuess5 == randomNumber2 || myGuess5 == randomNumber3 || myGuess5 == randomNumber4 || myGuess5 == randomNumber5)    ){
		
		document.querySelector("h3").innerHTML ="     Congratulations you got up to three. Kindly screenshot this to 07033411779 to claim your price. please note that you have to send it today. It expires in the next 24hours. Congratulations once again "
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//check if it missed all prediction
	else if ((myGuess1 != randomNumber1 || myGuess1 != randomNumber2 || myGuess1 != randomNumber3 || myGuess1 != randomNumber4 || myGuess1 != randomNumber5) && (myGuess2 != randomNumber1 || myGuess2 != randomNumber2 || myGuess2 != randomNumber3 || myGuess2 != randomNumber4 || myGuess2 != randomNumber5) && (myGuess3 != randomNumber1 || myGuess3 != randomNumber2 || myGuess3 != randomNumber2 || myGuess3 != randomNumber4 || myGuess3 != randomNumber5) &&   (myGuess4 == randomNumber1 || myGuess4 != randomNumber2 || myGuess4 != randomNumber2 || myGuess4 != randomNumber4 || myGuess4 != randomNumber5) &&   (myGuess5 != randomNumber1 || myGuess5 != randomNumber2 || myGuess5 != randomNumber2 || myGuess5 != randomNumber4 || myGuess5 != randomNumber5)  ){
		document.querySelector("h3").innerHTML ="Your prediction were wrong or you didn't get up to three'";
	}else{
		document.querySelector("h3").innerHTML ="Some of your predictions were right";
	}
			
		
		
	
	//Display result by manipulating the paragraph
	document.querySelector("#myresult").innerHTML = " Here are the results" + " "+ randomNumber1 + "   " + randomNumber2 + "   " + randomNumber3 + "   " + randomNumber4 + "   " + randomNumber5;
	document.getElementById("myresult").style.color = "red";
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
	
document.querySelector("h1").innerHTML =" You played at" + " " + d
	

	

	
	
}
/*I want 15 numbers to be generated randomly,
 check if user get any numbers correctly(starting from one to two, tell them to try again but if user got three tell them they win)*/