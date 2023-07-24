
var database = [

        {
            username: "Michael",
            password: "Rainbow"
        }

];

var newsFeed = [

        {
            username: "Bobby",
            timeline: "So tired from all that learning"

        },
        {

            username: "Sally",
            timeline: "Javascript is soooooo cool"
        }

];







var userNamePrompt = prompt("What is your user username?");
var passWordPrompt = prompt("What is your password?");


function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log (newsFeed);
    } else {
        alert ("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passWordPrompt);

