
var select = document.querySelector("select");
var selectedBreed = select.value;
var myInterval;

var search = document.querySelector("body .search");

select.addEventListener("change", (event)=> {

	if (select.options.length === 6) {
		select.removeChild(select.options[0]);
	}

	clearInterval(myInterval);
	
	selectedBreed = event.target.value;

	displayDogs(selectedBreed);

	myInterval = setInterval(()=>{
		displayDogs(selectedBreed);
	},5000)


})

function createImg(someSrc) {
	
	if (!document.querySelector("body .search img")) {
		var myImg = document.createElement("img");
		search.appendChild(myImg);
	} else {
		var myImg = document.querySelector("body .search img");
	}

	myImg.setAttribute("src", someSrc);
}

function displayDogs(someBreed) {
	var myRequest = new XMLHttpRequest();

  	myRequest.open('GET', 'https://dog.ceo/api/breed/' +  someBreed + '/images/random')

  	myRequest.onload = ()=> {
    	if(myRequest.status === 200) {
      		var mySrc = JSON.parse(myRequest.responseText).message;
      		createImg(mySrc);
   		 }
  	}

 	myRequest.send();
}