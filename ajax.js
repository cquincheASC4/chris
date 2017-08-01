

var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,nf_calories&appId=e4f69b14&appKey=d309adff545b59cee07eb78192848af8"

$.ajax({
    url:bigMacURL,
}).done(function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + "kcal !!!</h2>");
    });
