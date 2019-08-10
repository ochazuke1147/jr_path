var map;
var marker;
var center = {
    lat: 35.170694, // άx
    lng: 136.881637 // ox
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // n}ΜSπwθ
        zoom: 6 // n}ΜY[πwθ
    });
// pathΜCέθ
    var path_line = new google.maps.Polyline({
        map: map,
        path:[
// Ό]Γ
            new google.maps.LatLng(37.1702506,138.242039),
// θ
            new google.maps.LatLng(37.3637096,138.5562887),
// {ΰ
            new google.maps.LatLng(37.4220999,138.8402313),
// Oπ
            new google.maps.LatLng(37.6285143,138.9736524),
// VΓ
            new google.maps.LatLng(37.8004686,139.1212473),
// V­c
            new google.maps.LatLng(37.9440569,139.3350935),
// V
            new google.maps.LatLng(37.91209,139.0617442),
// gc
            new google.maps.LatLng(37.6871131,138.8786033),
// θ
            new google.maps.LatLng(37.3637096,138.5562887),
        ],
        strokeColor: "rgb(0 ,51,204)", //όF(def:#000000)
        strokeOpacity: 0.5, //§Ύx0`1(def:1)
        strokeWeight: 5, //pxwθidef:1)
        zIndex: 1 //dΘθ
        }
    );
// wΜ}[J[έθ
    var markers = [
// Ό]Γ
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "Ό]Γ",
            label_text: "0",
            color: "blue"
        },
// θ
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "θ",
            label_text: "1",
            color: "blue"
        },
// {ΰ
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "{ΰ",
            label_text: "2",
            color: "blue"
        },
// Oπ
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "Oπ",
            label_text: "3",
            color: "blue"
        },
// VΓ
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "VΓ",
            label_text: "4",
            color: "blue"
        },
// V­c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "V­c",
            label_text: "5",
            color: "blue"
        },
// V
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "V",
            label_text: "6",
            color: "blue"
        },
// gc
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "gc",
            label_text: "7",
            color: "blue"
        },
// θ
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "θ",
            label_text: "8",
            color: "blue"
        },
    ];
// ‘Μ}[J[πzu
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color, //hθΧ΅F
                fillOpacity: 0.8, //hθΧ΅§ί¦
                path: google.maps.SymbolPath.CIRCLE, //~πwθ
                scale: 8, //~ΜTCY
                strokeColor: m.color, //gΜF
                strokeWeight: 1.0 //gΜ§ί¦
            },
            title: m.title,
            label: {
                text: m.label_text, //xΆ
                color: '#FFFFFF', //ΆΜF
                fontSize: '10px' //ΆΜTCY
            }
        });
    }
}
