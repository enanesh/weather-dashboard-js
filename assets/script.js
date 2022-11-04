//VARIABLES 

var apiString = "fa199b1fa16945296c4472000a55f603";
var city = "";
var lon = "";
var lat = "";


//THIS GETS THE 5 DAY FORECAST 
var ipaCall5day = "api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&ctn=6&appid=fa199b1fa16945296c4472000a55f603"




var queryUrl = "";


//LOCAL STORAGE FOR USER INPUT 

function inputStorage() {
    $("#button").click(function (e) {
        e.preventDefault();
        var city = $("#search-input")
        var item = JSON.parse(localStorage.getItem("cities"));
        if (item == null) {
            item = [city.val()]
        }
        else {
            if (item.includes(city.val())) {

            } else {
                item.push(city.val());
            }
        }
        localStorage.setItem("cities", JSON.stringify(item));

        console.log(city);
        citiesButtons();
        cityUrl(city.val());

    });


}

inputStorage();
citiesButtons();



//LOOKS INTO LOCAL STORAGE AND GETS THE LAST ARRAY ITEM
var urlArray = JSON.parse(localStorage.getItem("cities"));

console.log(urlArray);

if (urlArray != null) {
    var city = urlArray[urlArray.length - 1];
    cityUrl(city);
}




//CREATES THE BUTTONS WITH THE NAMES OF THE ALREADY SEARCHED 

function citiesButtons() {

    $('#listCities').empty();

    var citiesLocalstorage = JSON.parse(localStorage.getItem("cities"));


    for (i = 0; i < citiesLocalstorage.length; i++) {

        var btn = $('<button/>', {
            text: citiesLocalstorage[i],
            id: citiesLocalstorage[i],
            class: "container btn btn-secondary"
        });
        var list = $('<li>');
        list.append(btn);
        $("#listCities").append(list);

        console.log(citiesLocalstorage[i])
    }

}




//CREATES THE URL FOR THE FIRST API CALL

function cityUrl(cityName) {

    console.log(cityName);

    var ApiCallNameCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiString;

    getApi(ApiCallNameCity);

}


// CREATES THE URL FOR THE 5 DAY FORECAST 

function getForecast(lat, lon,)
{
    

    var apiCall5day = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon+ "&appid=fa199b1fa16945296c4472000a55f603";
    

    console.log(apiCall5day);
    getApiForecast(apiCall5day)

}



// CALLS THE GEOAPI FOR THE LAT LON INFO

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response.status);
            if (response.status !== 200) {      
               console.log("There was an error")
            }
            return response.json();
        })
        .then(function (data) {
        

            console.log(data);
            getForecast(data[0].lat, data[0].lon)
        });
}



//API CALL FOR THE 5 DAY FORECAST 

function getApiForecast(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response.status);
            if (response.status !== 200) {
                console.log("There was an error")
            }
            return response.json();
        })
        .then(function (data) {
            

            console.log(data);
            
        });
}


//GETS DATA FROM API CALL AND CREATES CARDS 


