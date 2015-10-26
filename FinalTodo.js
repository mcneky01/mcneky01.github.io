newTodo = function() {
    oldi = document.querySelector("#addinput");
    highul = document.querySelector("#highul");
    medul = document.querySelector("#medul");
    lowul = document.querySelector("#lowul");
    drop = document.querySelector("#priority");
	    
    li = document.createElement("li");
    newi = document.createElement("input");
    newi.type="checkbox";
    newi.onclick=check;
    tn = document.createTextNode(oldi.value);
	    
    li.appendChild(newi);
    li.appendChild(tn);

    if (drop.value=="High") {
	highul.appendChild(li);
	li.classList.add("high");
    } 
    else {
	if (drop.value=="Medium") {
	    medul.appendChild(li);
	    li.classList.add("medium");
	} 
	else {
	    lowul.appendChild(li);
	    li.classList.add("low");
	}
    }
            
}

check = function() {
    if (this.checked) {
        this.parentNode.classList.add("done");
    } else {
        this.parentNode.classList.remove("done");
    }
}