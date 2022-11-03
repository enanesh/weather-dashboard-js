
function getAPI() {
    
    var cityUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=(mexico&limit)=5&appid=fa199b1fa16945296c4472000a55f603';

        // fetch(cityUrl)
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         //Using console.log to examine the data
        //         console.log(data);
        //         for (var i = 0; i < data.length; i++) {
        //             //Creating a h3 element and a p element
        //             var userName = document.createElement('h3');
        //             var userUrl = document.createElement('p');

        //             //Setting the text of the h3 element and p element.
        //             userName.textContent = data[i].login;
        //             userUrl.textContent = data[i].url;

        //             //Appending the dynamically generated html to the div associated with the id="users"
        //             //Append will attach the element as the bottom most child.
        //             usersContainer.append(userName);
        //             usersContainer.append(userUrl);
        //         }
        //     });
    
    console.log(cityUrl)
}


getAPI();
