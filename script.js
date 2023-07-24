var database = [

        {
            username: "Michael",
            password: "Rainbow"
        },
        {
            username: "Rachel",
            password: "1234"
        },
        {
            username: "Mitch",
            password: "GymRocks"
        },

];

var newsFeed = [

        {
            username: "Bobby",
            timeline: "Socil Manna is the place to hang out"

        },
        {

            username: "Sally",
            timeline: "This is so much cooler than Meta"
        },
        {

            username: "Matthew",
            timeline: "How old is Facebook?"
        }

];


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password ===password) {
            return true;
        }
    }
    return false;
}



function signIn(username, password) {
    if (isUserValid(username,password)) {
        console.log (newsFeed);
    } else {
        alert ("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What is your user username?");
var passWordPrompt = prompt("What is your password?");



signIn(userNamePrompt, passWordPrompt);
