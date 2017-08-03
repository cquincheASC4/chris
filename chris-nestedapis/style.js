const url = 'https://randomuser.me/api/';
const countryURL = 'https://restcountries.eu/rest/v2/alpha?codes=';

function setup() {
    $.getJSON(url,
    (data) => {
        let userTitle = data.results[0].name.title
        let userFirstName = data.results[0].name.first 
        let userLastName = data.results[0].name.last 
        let userGender = data.results[0].gender
        let userPhoto = data.results[0].picture.large
        let userLocation = data.results[0].nat
        let userEmail = data.results[0].email
        
        $('body').append("<h1>YOUR RANDOM NAME: " + userTitle + " " + userFirstName + " " + userLastName + "</h1>")
        $('body').append("<h2>YOUR GENDER: " + userGender + "</h2>")
        $('body').append('<img src='+userPhoto + '>')
        $('body').append("<h4>WHERE YOU LIVE: " + userLocation + "</h4>")
        $('body').append("<h5>USER EMAIL: " + userEmail + "</h5>")
        $.getJSON(countryURL + userLocation,
            (data) => {
                var userCountry = data[0].name
                var userFlag = data[0].flag
                $("body").append("<h6>FULL COUNTRY NAME: " + userCountry + "</h6>")
                $("body").append("<img id='flag' src='" + userFlag + "'></img>")
                
                
    }
    )
    }
    )
}
$(document).ready(setup);