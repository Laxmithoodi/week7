var request = new XMLHttpRequest();
request.open("GET","https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json")
request.onreadystatechange = function (){

    if((request.status == 200) && (request.readyState ==4)) {
        var test = JSON.parse(request.responseText)
        for ( i = 0; i < test.countries.length; i++) {

            var res= document.getElementById("content").innerHTML += "<br>"
                + test.countries[i].country;
            console.log(res);
        }
    }


};

request.send();







