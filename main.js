// ***** JS BOM HOMEWORK *****


// console.log('proba');

// TASK 1

// Create a function that will ALERT if browser is online or not.

//SOLUTION

/*
var isOnline = window.navigator.onLine;

function onlineAlert(condition) {

    condition ? alert('The browser is online!') : alert('The browser is not online!') 

}
onlineAlert(isOnline);
*/

// TASK 2

// Create a function that should, when run, reload the page.

//SOLUTION

/*
function pageReload() {
    window.location.reload();
}
pageReload();
*/

// TASK 3

// Create a function that should, 3 seconds after page is loaded, redirect you to google.com, ad then, 3 seconds after that take you back to your page. (Comment out your code once you're done so you can continue with the other tasks, as this will cause infinite loop).

//SOLUTION
/*
setTimeout(function() {
    
    window.location.href = "http://www.google.com";
    
}, 3000);
*/

// TASK 4

// Create a function that should every second console log a number incremented by one. When number reach 15 it should stop running.

//SOLUTION 1

/*
var i = 0;

function printNum() {
    if(i <= 15) {
        console.log(i);
        i++;
    }
    
}
setInterval(printNum, 1000);
*/

//SOLUTION 2

/*
var i = 0;

function printNum() {
    console.log(i);
    if(i === 15) {
        clearInterval(a);
    } else {
        i++;
    }
}

var a = setInterval(printNum, 1000);
*/

// TASK 5

// Create a function that should return a random number (round number) between 0 and 10, every time you run it.

//SOLUTION

/*
function randomNum() {

    return Math.round(Math.random()*10);
    
}
console.log(randomNum());
*/

// TASK 6

// 	STEP 1
// 	    Create an array of objects, containing at least 5 users. Each of them should have name, age and status. Status should be "inactive" for each of them.

// 	STEP 2
// 	    Once page is loaded it should display a popup where user can enter his name. Once it's done name user entered should be compared against existing users.

// 	    If it doesn't match any user you should console log message: 

// 	        "User with name " + name + " doesn't exist."

// 	    If it match some of users, object with that user's data should be copied from array. It's status should be changed to "active", and it should be saved in local storage using "loggedInUser" as a key.

// 	STEP 3
// 	    After one minute user's data should be removed from local storage.

// 	    You should console log a message that user is logged out.

//SOLUTION

/*
var users = [
    {name: 'John',
    age: 30,
    status: 'inactive'
    },
    {name: 'Mike',
    age: 33,
    status: 'inactive'
    },
    {name: 'Ann',
    age: 26,
    status: 'inactive'
    },
    {name: 'Jonas',
    age: 15,
    status: 'inactive'
    },
    {name: 'Mark',
    age: 21,
    status: 'inactive'
    }
]

var name = prompt('Please enter your name.');

var ifUser = true;

var activeUser = users.filter(function(item) {
    
    if(item.name === name) {
        item.status = 'active';
        ifUser = false;
        localStorage.setItem("loggedInUser", item.name);
    }
    return item.name === name;
});

if(ifUser && name) {
    console.log("User with name " + name + " doesn't exist.");
} else if (!ifUser && name) {
    setTimeout(function() {

        localStorage.removeItem("loggedInUser");
    
        console.log("The user is logged out.");
    
    }, 60000);
}
*/

// console.log(users);
// console.log(activeUser);
// console.log(localStorage.loggedInUser);
// console.log(localStorage);

// setTimeout(function() {
//     console.log(localStorage.loggedInUser);
// }, 6000);