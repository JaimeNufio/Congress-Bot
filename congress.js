var url = "i.propublica.org/congress/v1/115/senate/members.json"  
var apiKey = "C4pXHb5hHa3m1POhoJPa19s1GNIJcOXoo7vRcmd4"

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var website = "https://www.reddit.com/r/njtech.json";
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //var myArr = JSON.parse(this.responseText);
        	console.log(JSON);
	}
};

xhr.open('GET', website, true);
xhr.send();


