// Search "shopping products"
function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('shopping-products');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-block";                 
        }
    }
}
// Filter Dropdown list
  function filterDropdown() {
	var user = document.getElementById("myDropdown").value;
	var women = document.getElementById("women");
	var men = document.getElementById("men");
	var children = document.getElementById("children");
    if(user=="women") {
		women.style.display=" inline-block";
		men.style.display="none";
		children.style.display="none";
	} else if (user=="men") {
		women.style.display="none";
		men.style.display=" inline-block";
		children.style.display="none";
	} else if (user=="children") {
		women.style.display="none";
		men.style.display="none";
		children.style.display=" inline-block";
	}
    else if (user=="all") {
		women.style.display="inline-block";
		men.style.display="inline-block";
		children.style.display="inline-block";
	}
}
// e-mail validation
function validate_email(field_condition, alert_message) {
    with(field_condition) {
      apos = value.indexOf("@");
      dotpos = value.lastIndexOf(".");
      if (apos < 1 || dotpos - apos < 2) {
        alert(alert_message);
        return false;
      } else {
        return true;
      }
    }
  }
  function validate_form(form) {
    with(form) {
      if (validate_email(email, "This E-Mail Address is not a valid!") == false) 
	  {
        email.focus();
        return false;
      }
	  else {
		alert('Thank You!');
		window.location = "file:///C:/Users/ncurkovic/Projects/projekt/index.html"; 
	  }
	}
  }
// SignUp page
function registration()
{

	var name= document.getElementById("t1").value;
	var email= document.getElementById("t2").value;
	var uname= document.getElementById("t3").value;
	var pwd= document.getElementById("t4").value;			
	var cpwd= document.getElementById("t5").value;
	
	//email id expression code
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(name=='')
	{
		alert('Please enter your name');
	}
	else if(!letters.test(name))
	{
		alert('Name field required only alphabet characters');
	}
	else if(email=='')
	{
		alert('Please enter your user email id');
	}
	else if (!filter.test(email))
	{
		alert('Invalid email');
	}
	else if(uname=='')
	{
		alert('Please enter the user name.');
	}
	else if(!letters.test(uname))
	{
		alert('User name field required only alphabet characters');
	}
	else if(pwd=='')
	{
		alert('Please enter Password');
	}
	else if(cpwd=='')
	{
		alert('Enter Confirm Password');
	}
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if(pwd != cpwd)
	{
		alert ('Password not Matched');
	}
	else if(document.getElementById("t5").value.length < 6)
	{
		alert ('Password minimum length is 6');
	}
	else if(document.getElementById("t5").value.length > 12)
	{
		alert ('Password max length is 12');
	}
	else
	{				                            
		   alert('Thank You for Login & You are Redirecting to Campuslife Website');
		   window.location = "file:///C:/Users/ncurkovic/Projects/projekt/index.html"; 
	}
}
function clearFunc()
{
	document.getElementById("t1").value="";
	document.getElementById("t2").value="";
	document.getElementById("t3").value="";
	document.getElementById("t4").value="";
	document.getElementById("t5").value="";
}
