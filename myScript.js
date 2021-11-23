window.onload = function () {
	let idCounter = 1;
	
	class Product {
		constructor (imgSource, imgAlt, description, price, genderType) {
			this.id = idCounter;
			this.imgSource = imgSource;
			this.imgAlt = imgAlt;
			this.description = description;
			this.price = price;
			this.genderType = genderType
			++idCounter;
		}
	}

	let productDataArray = [
		new Product('./pictures/women1.jpg', 'Zenska_haljina1', 'LONG DRESS LIMITED EDITION', 699.90, 'women'),
		new Product('./pictures/women2.jpg', 'Zenska_haljina2', 'PLEATED DRESS LIMITED EDITION', 699.90, 'women'),
		new Product('./pictures/women3.jpg', 'Zenska_haljina3', 'DRESS LIKE A LIMITED EDITION ROBE', 699.90, 'women'),
		new Product('./pictures/men3.jpg', 'muska_odjeca1', 'TEXTURED EASY CARE SHIRT', 149.90, 'men'),
		new Product('./pictures/men2.jpg', 'muska_odjeca2', 'HERRINGBONE PATTERNED SHIRT', 499.90, 'men'),
		new Product('./pictures/men1.jpg', 'muska_odjeca3', 'OVERSIZED COAT', 1599.90, 'men'),
		new Product('./pictures/children2.jpg', 'djecja_odjeca1', 'SPARKLY MOTORCYCLE JACKET', 499.90, 'children'),
		new Product('./pictures/children1.jpg', 'djecja_odjeca2', 'STAR-CAUSE DRESS', 299.90, 'children'),
	];

	function addProductDataArrayElements(elementsData) {
		elementsData.forEach(addProductElement);
	}

	function addToBasketLocalStorage(productId) {
		const data = productDataArray.find(e => e.id == productId);
        const arrayFromLocalStorage = JSON.parse(localStorage.getItem('productDataArray')) || [];
        arrayFromLocalStorage.push(data);
        localStorage.setItem('productDataArray', JSON.stringify(arrayFromLocalStorage));
		console.log(arrayFromLocalStorage);

    }

	function addHTMLContent(element, data) {
		element.innerHTML += `
			<div class="shopping-products" data-category=${data.genderType}>
				<img src="${data.imgSource}" alt="${data.imgAlt}" class="img"><br>
				<p style="text-align: center;">${data.description}</p>
				<p style="text-align: center;">${data.price} KN</p>
				<input class="btn" type="button" value="Buy!" id="basket-${data.id}">
				<br>
			</div>
		`
	}
	document.addEventListener('click',function(e) {
		if(e.target && e.target.id.includes('basket-')) {
			const productId = e.target.id.replace('basket-','');
			addToBasketLocalStorage(productId);
		}
	});

	function addProductElement(product) {
		var section = document.getElementById('all_product');
		if (section) {
			addHTMLContent(section, product);
		}
	}
	addProductDataArrayElements(productDataArray);
}
	// Search "shopping products"
	function search() {
		let input = document.getElementById('searchbar').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName('shopping-products');
		//spread operator za dobivanje elemenata iz neke kolekcije
		[...x].forEach(el => {
			if (!el.innerHTML.toLowerCase().includes(input)) {
				el.style.display="none";
			}
			else {
				el.style.display="inline-block";                 
			}
		})
	}
	document.getElementById('searchbar').addEventListener("keyup", search);
	// Filter Dropdown list
	function filterDropdown() {
		var user = document.getElementById("myDropdown").value;
		var products = document.getElementsByClassName('shopping-products');
		console.log('a');
		[...products].forEach(elem => {
			if(user==elem.dataset.category || user=="all"){
				elem.style.display='inline-block';
			}
			else{
				elem.style.display='none';
			}
		})
	}
	document.getElementById('myDropdown').addEventListener("change", filterDropdown)
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
	labela_name='';
	
	
    if(name=='')
    {
		document.getElementById("error_name").innerHTML="<br>Please enter your name";
		document.getElementById("error_name").style.color="red";
		
    }
    else if(!letters.test(name))
    {
		document.getElementById("error_name").innerHTML="<br>Name field required only alphabet characters";
		document.getElementById("error_name").style.color="red";
    }
    else if(email=='')
    {
		document.getElementById("error_name").innerHTML=" ";
		document.getElementById("error_email").innerHTML='<br>Please enter your user email';
		document.getElementById("error_email").style.color="red";
    }
    else if (!filter.test(email))
    {
		document.getElementById("error_email").innerHTML='<br>Invalid email';
		document.getElementById("error_email").style.color="red";
    }
    else if(uname=='')
    {
		document.getElementById("error_email").innerHTML='';
        document.getElementById("error_username").innerHTML='<br>Please enter the user name.';
		document.getElementById("error_username").style.color="red";
		
    }
    else if(!letters.test(uname))
    {
		document.getElementById("error_username").innerHTML='<br>User name field required only alphabet characters';
		document.getElementById("error_username").style.color="red";
    }
    else if(pwd=='')
    {
		document.getElementById("error_username").innerHTML='';
		document.getElementById("error_pass").innerHTML='<br>Please enter Password';
		document.getElementById("error_pass").style.color="red";
    }
	else if(!pwd_expression.test(pwd))
    {
		document.getElementById("error_pass").innerHTML='<br>Upper case,Lower case,Special character and Numeric letter are required in Password filed';
		document.getElementById("error_pass").style.color="red";
    }
    else if(cpwd=='')
    {
		document.getElementById("error_pass").innerHTML='';
		document.getElementById("error_cpass").innerHTML='<br>Enter Confirm Password';
		document.getElementById("error_cpass").style.color="red";
    }
    else if(pwd != cpwd)
    {
		document.getElementById("error_cpass").innerHTML='<br>Password not Matched';
		document.getElementById("error_cpass").style.color="red";
    }
    else
    {			                            
        alert('Thank You for Login');
        window.location = "./index.html"; 
    }
}
function clearFunc()
{
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";
    document.getElementById("t5").value="";

	document.getElementById('error_name').innerHTML='';
	
	document.getElementById('error_email').innerHTML='';
	document.getElementById('error_username').innerHTML='';
	document.getElementById('error_pass').innerHTML='';
	document.getElementById('error_cpass').innerHTML='';
}
//newsletter

	function validateEmail(){
		var email1= document.getElementById("email1").value;
		var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email1==''){
			alert('Please enter your email');
		}
		else if (!filter1.test(email1))
		{
			alert('Invalid email');
		}
		else
		{				                            
			alert('Thank You!');
			window.location = "./index.html"; 
		}
	} 
