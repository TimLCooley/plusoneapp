//set count

if(localStorage.getItem("count") == null){
	localStorage.setItem("count", 0);
}

//update count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//Add One To count
function plusOne(){

	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
	update();
};


//reset count to 0
function reset(){
	if (confirm ("Are you sure?")) {
	    localStorage.setItem("count", 0);
		update();
	}
	
};
