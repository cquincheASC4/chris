 var name = prompt("What's your name?");
 var favFood = prompt("What is your favorite food?");

 firebase.database().ref(email).set(
     {
         food: favFood
     }
 )



 let database = firebase.database().ref(userInfo)