var APPID = "e7bd4b31790a49c1939102419182503";

async function fetchData(url) {
	//Först körs en fetch som returnerar en promise
	let promise = await fetch(url);
	//När svaret kommer läggs det över i en variabel
	let data = await promise.json();
	//Resultatet är från början ett objekt. Det görs om till en sträng //innan det returneras
	return data;

}

async function displayForecast(url) {
	var data = await fetchData(url);

	var cityDiv = document.createElement("div");
	cityDiv.classList.add("cityContainer");
	var weatherContainer= document.querySelector("#city");

	var locTag = document.createElement("p");
	var loc = document.createTextNode(data.location.name + ", " + data.location.country);
	var tempTag = document.createElement("p");
	var temp = document.createTextNode(data.current.temp_c);

/*	var iconTag = document.createElement("img");
	var icon = ????;
	iconTag.setAttribute("src", icon);
	auktionDiv.appendChild(iconTag);*/

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";

	tempTag.appendChild(temp);
	cityDiv.appendChild(tempTag);
	locTag.appendChild(loc);
	cityDiv.appendChild(locTag);

	weatherContainer.appendChild(cityDiv);
	span.appendChild(txt);
	cityDiv.appendChild(span);

	deleteBtn();

}

function deleteBtn() {
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}


function getForecast(city) {
	var url = "http://api.apixu.com/v1/current.json?key=" + APPID + "&q=" + city;
	displayForecast(url);
}

function readingInput() {
	var city = document.querySelector("#input").value;

	if (city === '') {
		alert("You must write something!");
	} else {

		getForecast(city);
	}
}



