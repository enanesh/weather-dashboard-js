//VARIABLES 

var apiString = "fa199b1fa16945296c4472000a55f603";
var city = "";
var lon = "";
var lat = "";


//THIS GETS THE 5 DAY FORECAST 
var ipaCall5day = "api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&ctn=6&appid=fa199b1fa16945296c4472000a55f603"

//THIS GETS THE NAME OF THE CITY



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
       
    });


}
cityUrl();
inputStorage()
citiesButtons();


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

function cityUrl() {
    
    var UrlArray = JSON.parse(localStorage.getItem("cities"));

    console.log(UrlArray);

    var city= UrlArray[UrlArray.length - 1];
     
    console.log(city);

    var ApiCallNameCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiString;



    function getApi(requestUrl) {
        fetch(requestUrl)
            .then(function (response) {
                console.log(response.status);
                //  Conditional for the the response.status.
                if (response.status !== 200) {
                    // Place the response.status on the page.
                    responseText.textContent = response.status;
                }
                return response.json();
            })
            .then(function (data) {
                // Make sure to look at the response in the console and read how 404 response is structured.


                
                console.log(data);
            });
    }

    getApi(ApiCallNameCity);


    




}









