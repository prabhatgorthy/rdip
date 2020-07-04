// TASK1

function add(x,y)
{
x=parseInt(x);
y=parseInt(y);
return "Answer "+(x+y);
}
function sub(x,y)
{
x=parseInt(x);
y=parseInt(y);
return "Answer "+(x-y);
}
function mul(x,y)
{
x=parseInt(x);
y=parseInt(y);
return "Answer "+x*y;
}
function div(x,y)
{
x=parseInt(x);
y=parseInt(y);
return "Answer "+x/y;
}
function percent(x,y)
{
x=parseInt(x);
y=parseInt(y);
return x+" % "+y+" = " +(x/100)*y;
}
function mod(x,y)
{
x=parseInt(x);

return "Answer "+Math.abs(x);
}
function sqrt(x)
{
	x=parseInt(x);
	if(x<0)
	{
		return " PLEASE ENTER A VALID NUMBER"
	}
	a=Math.sqrt(x);
	
	if(a%1 === 0 )
	{
	return "Square Root of x is "+a;
	
}
else 
return "Square Root of x is "+a.toFixed(3);

}
function pow(x,y)
{
x=parseInt(x);
y=parseInt(y);
return "Answer "+Math.pow(x,y)
}






//TASK2

function verify(form)
{
	valid=false;
	var name=document.forms[0].elements[0].value;
	var email=document.forms[0].elements[1].value;
	var phn=document.forms[0].elements[7].value;
	var pass=document.forms[0].elements[2].value;
	var text=document.forms[0].elements[6].value;
	var nir=new RegExp("^[A-Za-z|_][A-Za-z0-9]*$");
	var eir=new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"); 
	var phnr=new RegExp("^[\\d]+$","g");
	if(document.forms[0].elements[0].value=="")
	{
		alert("ENTER YOUR NAME!!");
		return false;
	}
	if(name.match(nir))
	{
		valid=true;

	}
	else
	{
alert("NAME SHOULD NOT START WITH NUMBER");
return false;
}
if(pass=="")
	{
		alert("ENTER PASSWORD");
		return false;
	}
	if(text=="")
	{
		alert("ENTER ANY DISCRIPTION");
		return false;
	}
	if(email=="")
	{
		alert("ENTER EMAIL-ID");
		return false;
	}
	if(email.match(eir)) 
{ 
valid=true; 
} 
else
{
alert("PLEASE ENTER CORRECT EMAIL ID");
return false;
}
if(phn=="")
	{
		alert("ENTER PHONE NUMBER");
		return false;
	}
if(phn.match(phnr)) 
{ 
valid=true; 

} 
else 
{ 
alert("ENTER A VALID NUMBER"); 
return(false); 
} 
if(phn.length < 10) 
{ 
alert("PHONE NUMBER SHOULD CONTAIN ATLEAST 10 DIGITS!!"); 

return false; 
} 
if(document.getElementById("m").checked==true||document.getElementById("f").checked==true||document.getElementById("o").checked==true)
{
	valid=true;
}
else
{
	alert("SELECT YOUR GENDER");
	return false;
}
}


//TASK3

function palindrome( word)
{

if(word.length>=2)
{

 str1=word.split("").reverse().join("");

 if(word==str1)
 {
 	return true;
 }
else
{
	return false;
}
}
}




function anagram(txt1,txt2)
{
	 var len1 = txt1.split(' ').length-1;
	 len1=parseInt(len1)
	 i=len1
	  var len2 = txt2.split(' ').length-1;
	  len2=parseInt(len2)
	  j=len2

if(txt1==txt2)
{
return true;
}

else 
{

var ns1 = txt1.toLowerCase().split("").sort().join();

var ns2 = txt2.toLowerCase().split("").sort().join();
 
if(len1 >1 && len1==i)
{
	n1=ns1.slice(i+2);

}
else if(len1==1 && len1==i)
{
	n1=ns1.slice(i+1);
}
else
{
	n1=ns1
}

 if(len2>1 && len2==j)
{
	n2=ns2.slice(j+2);

}
else if(len2==1 && len2==j)
{
	n2=ns2.slice(j+1);
}
else
{
	n2=ns2;
}

 if(n1 == n2){
    return (true);
  }
  else{
    return (false);
  }

}
}

//TASK4

function text1()
{
	var gen=Math.floor(Math.random()*(1000-1))
	document.getElementById("t1").value=gen;
	return gen;

}
function text2()
{
	var gen1=Math.floor(Math.random()*(1000-1))
	document.getElementById("t2").value=gen1;
	return gen1;

}

function gamecheck(x,y)
{
  x=x%10;
  y=y%10;
  var map1 = new Map();
  map1.set(0,1);
 map1.set(1,1);
 map1.set(2,2);
 map1.set(3,3);
map1.set(4,3);
map1.set(5,2);
 map1.set(6,1);
map1.set(7,3);
 map1.set(8,1);
 map1.set(9,2);
  x1=map1.get(x);
  y1=map1.get(y);
 
  var map = new Map();

 map.set(2,"HUMAN");
  map.set(3,"COCKROACH"); 
  map.set(1,"NUCLEAR BOMB"); 
  map.set(4,"Tie");
  if(x1==1 && y1==1 || x1==2 && y1==2 || x1==3 && y1==3)
  {
  	if(x1==1 && y1==1)
  	{
  		document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(1);
  	return "OHH!!!! IT'S "+(map.get(4));
  }
  if(x1==2 && y1==2)
  	{
  		document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(2);
  	return "OHH!!!! IT'S "+(map.get(4));
  }
  if(x1==3 && y1==3)
  	{
  		document.getElementById("h2").innerHTML=map.get(3)+" Vs "+map.get(3);
  	return "OHH!!!! IT'S "+(map.get(4));
  }
  }
  else if(x1==1 && y1==2 || x1==2 && y1==1)
  {
  	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(2);
  	return "WINNER IS "+(map.get(1));
  }
   else if(x1==2 && y1==3 || x1==3 && y1==2)
   	
  {
  	document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(3);
  	return "WINNER IS "+(map.get(2));
  }
   else if(x1==1 && y1==3 || x1==3 && y1==1)
  
  {
  	 	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(3);
  	return "WINNER IS "+(map.get(3));
  }

}



//BONUS TASK
function convert()
{
	var from=document.getElementById("from").value;

	var to=document.getElementById("to").value;


	var xmlhttp=new XMLHttpRequest();
	var url="https://free.currconv.com/api/v7/convert?q="+from+"_"+to+"&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";


	xmlhttp.open("GET",url,true)
	xmlhttp.send();
	xmlhttp.onreadystatechange=function()
	{
		var amt=document.getElementById("t1").value;
		if(xmlhttp.readyState ==  4 && xmlhttp.status==200)
		{
			var result=xmlhttp.responseText;
		
			var jsResult=JSON.parse(result);
		for (x in jsResult) {
     document.getElementById("t2").value=(jsResult[x]*amt)
  }

}
}
}



