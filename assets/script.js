//VARIABLES 

var apiString= "fa199b1fa16945296c4472000a55f603";
var city = "";
var lon = "";
var lat = "";


//THIS GETS THE 5 DAY FORECAST 
var ipaCall5day = "api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&ctn=6&appid=fa199b1fa16945296c4472000a55f603"


//maybe i need to limit this parameters to show only the first element in the array 
var ipaCallNameCity = "http://api.openweathermap.org/geo/1.0/direct?q=london&appid=fa199b1fa16945296c4472000a55f603"



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
        else
        {
            if (item.includes(city.val())) {
            
            } else {
                item.push(city.val());
            }  
        }
        localStorage.setItem("cities", JSON.stringify(item));
        
        console.log(city);
        
    });


}

inputStorage()


// create the for loop for the buttons 

//store the api (lon,lat) variables for the ne api call 

//fix the content into the boxes 







