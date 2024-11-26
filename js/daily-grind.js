/*
daily-grind.js


Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.





name - Bubble tea
pic - an image of bubble tea
day - Wednesday 
alt - the data in the alt tag 
color - a color to match the coffee 


*/


let myDate = new Date();
let = myDay = myDate.getDay()
let today = "";
let coffee = ""; 


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

myDay = parseInt(myDay); // mast change to int for switch


// myDate = 3;// test only




switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            day: "Sunday",
            alt: "A pic of a Cold-Brew",
            color: "brown",
            desc: `I love me a Cold-Brew!`
        };
    break;


    case 1:
        today = "Monday";
        coffee = {
            name: "Pumpkin Spice",
            pic: "images/pumpkin-spice-latte.jpg",
            day:"Monday",
            alt:"A pic of Pumpkin spice latte",
            color:"orange",
            desc:"One of ours best sellers"
        };
    break;
    case 2:
        today = "Tuesday";
 coffee = {
            name: "Caramel-Latte",
            pic: "images/caramel-latte.jpg",
            day: "Tuesday",
            alt: "A pic of a Caramel-Latte",
            color: "purple",
            desc: `Caramel-Latte's are the best ever!`
        };    
        
        break;


    case 3:
        today = "Wednesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day:"Wednesday",
            alt:"A pic of bubble tea",
            color:"pink",
            desc:"I like me some bubble tea"
        };
    
    break;
    case 4:
        today = "Thursday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            day: "Thursday",
            alt: "A pic of a Frappaccino",
            color: "yellow",
            desc: `Frappaccino's are so delicious!`
        };

    break;


    case 5:
        today = "Friday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            day: "Friday",
            alt: "A pic of a Mocha",
            color: "green",
            desc: `Mocha is the best drink ever!`
        };    

    break;


    case 6:
        today = "Saturday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            day: "Saturday",
            alt: "A pic of a Drip",
            color: "blue",
            desc: `A classic drink calls for a Drip!`
        };
    
    break;


    default:
        today = "Something went wrong";

}

// alert(today);
console.log(coffee);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;



function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}"  id="coffee" />
            <strong class="feature">"${coffee.day}"  Coffee Special:</strong> "${coffee.day}"  daily coffee special is <strong class="feature">"${coffee.name}" </strong>,"${coffee.desc}" </p>`;

    return(myReturn);






}





