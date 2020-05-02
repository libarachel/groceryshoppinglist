function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            console.log(response);

            var Jlist = response.food;
            var txt = "";
            var oby = "";
            var tt = "";
            txt += "<table border='1'> "




            for (var i = 0; i < Jlist.length; i++) {

                txt += '<tr><td>' + Jlist[i].SerialNumber + '</td><td>' + Jlist[i].Name + '</td><td>' + Jlist[i].Quantity + '</td><td>' + Jlist[i].unit + '</td><td>' + Jlist[i].Department + '</td><td>' + Jlist[i].notes + '</td></tr>';


            }

            txt += "</table>"

            document.getElementById("tableContents").innerHTML = txt;





        }
    }
    xhttp.open("GET", "food.json", true);
    xhttp.send();
}