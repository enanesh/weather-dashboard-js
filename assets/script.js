//VARIABLES 

var apiString = "fa199b1fa16945296c4472000a55f603";
var city = "";
var lon = "";
var lat = "";


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
        var list = $('<div>');
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

function getForecast(lat, lon,) {

    var apiCall5day = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=fa199b1fa16945296c4472000a55f603";

    getApiForecast(apiCall5day)

}

//CREATES THE URL FOR TODAYS WEATHER

function getCurrent(lat, lon) {

    var currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=fa199b1fa16945296c4472000a55f603"

    getApiCurrent(currentUrl)

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
            getCurrent(data[0].lat, data[0].lon);
            getForecast(data[0].lat, data[0].lon);


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
        .then(function (forecastData) {

            // console.log(forecastData);

            forecastLogic(forecastData);



        });
}


//API CALL FOR THE CURRENT DATA 

function getApiCurrent(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response.status);
            if (response.status !== 200) {
                console.log("There was an error")
            }
            return response.json();
        })
        .then(function (currentData) {

            console.log(currentData);



        });
}






//GETS DATA FROM API CALL AND CREATES CARDS 


function forecastLogic(forecastData) {
    $('#forecastCards').empty();

    console.log(forecastData.list);

    for (var i = 0; i < forecastData.list.length; i += 8) {

        var dayString = forecastData.list[i].dt_txt;
        var tempString = forecastData.list[i].main.temp;
        var iconString = forecastData.list[i].weather[0].icon;

        var windString = forecastData.list[i].wind.speed;
        var humidityString = forecastData.list[i].main.humidity;


        var cardEl = $("<div/>", {
            class: "card",
        });
        $("#forecastCards").append(cardEl);


        var cardBodyEl = $("<div/>", {
            class: "card-body",
        });
        cardEl.append(cardBodyEl);

        var cardtittleEl = $("<h6/>", {
            text: dayString.slice(0, 10),
            class: "card-title",

        });
        cardBodyEl.append(cardtittleEl);

        var cardIconEl = $("<img />", {
            src: "http://openweathermap.org/img/wn/" + iconString + "@2x.png",

        });
        cardBodyEl.append(cardIconEl);

        var cardTempEl = $("<div/>", {
            text: "Temp:" + tempString + "°F",
            class: "card-text",
        })
        cardBodyEl.append(cardTempEl);


        var cardWindEl = $("<div/>", {
            text: "wind:" + windString + "MPH",
            class: "card-text",
        })
        cardBodyEl.append(cardWindEl);


        var cardHumEl = $("<div/>", {
            text: "Humidity: " + humidityString + "%",
            class: "card-text",
        })
        cardBodyEl.append(cardHumEl);


        // console.log(dayString)
        // console.log(tempString)
        // console.log(windString)
        // console.log(humidityString)
        // console.log(iconString)

    }


}

//GETS API DATA AND FILLS THE BIG BOX 

