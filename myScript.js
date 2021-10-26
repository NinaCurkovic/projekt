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
