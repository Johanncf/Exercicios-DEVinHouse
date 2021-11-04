
var resultado;
var map;


function initMap() {

    fetch("https://amapalanches.com/includes/v1/getTodas.php").then(function (data) {
        return data.json();
    }).then(function (json) {
        resultado = json.todas;
        const myLatLng = { lat: parseFloat(resultado[0].lat), lng: parseFloat(resultado[0].lng) };
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: myLatLng,
        });


        for (let i = 0; i < resultado.length; i++) {
            var newLatLng = { lat: parseFloat(resultado[i].lat), lng: parseFloat(resultado[i].lng) }
            new google.maps.Marker({
                position: newLatLng,
                map,
                title: "Loja",
            });
        }

    })


}
