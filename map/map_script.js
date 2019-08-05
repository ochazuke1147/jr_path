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
// gc
            new google.maps.LatLng(37.6871131,138.8786033),
// V
            new google.maps.LatLng(37.91209,139.0617442),
// V­c
            new google.maps.LatLng(37.9440569,139.3350935),
// VΓ
            new google.maps.LatLng(37.8004686,139.1212473),
// Oπ
            new google.maps.LatLng(37.6285143,138.9736524),
// {ΰ
            new google.maps.LatLng(37.4220999,138.8402313),
// aμ
            new google.maps.LatLng(36.4913158,139.0088),
// VO΄
            new google.maps.LatLng(36.379033,139.0469116),
// ¬R
            new google.maps.LatLng(36.3128947,139.8064972),
// ε{
            new google.maps.LatLng(35.9063453,139.6231198),
//  Ya
            new google.maps.LatLng(35.845352,139.6468681),
// Όͺ
            new google.maps.LatLng(35.6997996,139.4657707),
// Vh
            new google.maps.LatLng(35.6894597,139.700537),
// rά
            new google.maps.LatLng(35.729487,139.7109997),
// c[
            new google.maps.LatLng(35.7383571,139.7607333),
// ΤH
            new google.maps.LatLng(35.7776795,139.7209883),
// μYa
            new google.maps.LatLng(35.8481784,139.6687818),
// VΌΛ
            new google.maps.LatLng(35.8255382,139.9211025),
// ϊι’
            new google.maps.LatLng(35.7281575,139.770638),
// Ht΄
            new google.maps.LatLng(35.698362,139.7733021),
// Ρ¬
            new google.maps.LatLng(35.6971445,139.81384),
// ΌD΄
            new google.maps.LatLng(35.7074664,139.9590826),
// ηt
            new google.maps.LatLng(35.6129299,140.1134652),
// ²q
            new google.maps.LatLng(35.7095572,140.2259731),
// ¬c
            new google.maps.LatLng(35.7773313,140.3135312),
// ζ
            new google.maps.LatLng(35.8979327,140.5322812),
// Όθ
            new google.maps.LatLng(35.7395434,140.7952883),
// ¬
            new google.maps.LatLng(35.6083855,140.4108524),
// εΤ
            new google.maps.LatLng(35.522508,140.3110421),
// εΤ(O[Eΰ[ό)
            new google.maps.LatLng(35.522508,140.3110421),
// hδ(O[Eΰ[ό)
            new google.maps.LatLng(35.5815282,140.1310471),
// hδ
            new google.maps.LatLng(35.5815282,140.1310471),
// μD΄
            new google.maps.LatLng(35.6817774,139.9958289),
// sμl
            new google.maps.LatLng(35.6664838,139.9236774),
// 
            new google.maps.LatLng(35.6811957,139.767251),
// _c
            new google.maps.LatLng(35.6918216,139.770935),
// δm
            new google.maps.LatLng(35.6994603,139.7652079),
// γXΨ
            new google.maps.LatLng(35.6841068,139.7021759),
// iμ
            new google.maps.LatLng(35.6284888,139.7387767),
// μθ
            new google.maps.LatLng(35.5313531,139.6968913),
// Kθ
            new google.maps.LatLng(35.5315627,139.6842527),
// lμθ
            new google.maps.LatLng(35.5102298,139.7138483),
//  Ξ
            new google.maps.LatLng(35.5018366,139.7064453),
// σμ
            new google.maps.LatLng(35.4976003,139.6956468),
// ί©
            new google.maps.LatLng(35.5082528,139.6763195),
//  ¬
            new google.maps.LatLng(35.5766373,139.6594584),
// {{¬
            new google.maps.LatLng(35.6661875,139.4772291),
// §μ
            new google.maps.LatLng(35.6982051,139.4137788),
// q
            new google.maps.LatLng(35.7210899,139.343634),
// ͺ€q
            new google.maps.LatLng(35.6556399,139.3388915),
// ΄{
            new google.maps.LatLng(35.5949215,139.3450528),
// _ήμ
            new google.maps.LatLng(35.4779787,139.6333869),
// ‘l
            new google.maps.LatLng(35.4657885,139.6223299),
// ‘l(ͺέό)
            new google.maps.LatLng(35.4657885,139.6223299),
// εD(ͺέό)
            new google.maps.LatLng(35.3544937,139.5315814),
// εD
            new google.maps.LatLng(35.3544937,139.5315814),
// θ
            new google.maps.LatLng(35.3303085,139.406848),
// {Γ
            new google.maps.LatLng(35.2813605,139.214952),
// ΐΓ
            new google.maps.LatLng(35.1026012,138.8597631),
// xm
            new google.maps.LatLng(35.151486,138.6511946),
// b{
            new google.maps.LatLng(35.6670765,138.5690546),
// ͺJ
            new google.maps.LatLng(36.0570347,138.0453799),
// Cμ
            new google.maps.LatLng(35.9845957,137.9978725),
// L΄
            new google.maps.LatLng(34.7629304,137.381926),
// ε{
            new google.maps.LatLng(35.0088341,136.9620734),
// ΰR
            new google.maps.LatLng(35.1429282,136.9012195),
// K
            new google.maps.LatLng(36.1143387,137.9481023),
// Ό{
            new google.maps.LatLng(36.2308211,137.9643505),
// μ¬J
            new google.maps.LatLng(36.7748831,137.9082227),
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
// gc
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "gc",
            label_text: "2",
            color: "blue"
        },
// V
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "V",
            label_text: "3",
            color: "blue"
        },
// V­c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "V­c",
            label_text: "4",
            color: "blue"
        },
// VΓ
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "VΓ",
            label_text: "5",
            color: "blue"
        },
// Oπ
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "Oπ",
            label_text: "6",
            color: "blue"
        },
// {ΰ
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "{ΰ",
            label_text: "7",
            color: "blue"
        },
// aμ
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "aμ",
            label_text: "8",
            color: "blue"
        },
// VO΄
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "VO΄",
            label_text: "9",
            color: "blue"
        },
// ¬R
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "¬R",
            label_text: "10",
            color: "blue"
        },
// ε{
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "ε{",
            label_text: "11",
            color: "blue"
        },
//  Ya
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: " Ya",
            label_text: "12",
            color: "blue"
        },
// Όͺ
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "Όͺ",
            label_text: "13",
            color: "blue"
        },
// Vh
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "Vh",
            label_text: "14",
            color: "blue"
        },
// rά
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "rά",
            label_text: "15",
            color: "blue"
        },
// c[
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "c[",
            label_text: "16",
            color: "blue"
        },
// ΤH
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "ΤH",
            label_text: "17",
            color: "blue"
        },
// μYa
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "μYa",
            label_text: "18",
            color: "blue"
        },
// VΌΛ
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "VΌΛ",
            label_text: "19",
            color: "blue"
        },
// ϊι’
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "ϊι’",
            label_text: "20",
            color: "blue"
        },
// Ht΄
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "Ht΄",
            label_text: "21",
            color: "blue"
        },
// Ρ¬
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "Ρ¬",
            label_text: "22",
            color: "blue"
        },
// ΌD΄
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "ΌD΄",
            label_text: "23",
            color: "blue"
        },
// ηt
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "ηt",
            label_text: "24",
            color: "blue"
        },
// ²q
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "²q",
            label_text: "25",
            color: "blue"
        },
// ¬c
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "¬c",
            label_text: "26",
            color: "blue"
        },
// ζ
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "ζ",
            label_text: "27",
            color: "blue"
        },
// Όθ
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "Όθ",
            label_text: "28",
            color: "blue"
        },
// ¬
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "¬",
            label_text: "29",
            color: "blue"
        },
// εΤ
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "εΤ",
            label_text: "30",
            color: "blue"
        },
// εΤ(O[Eΰ[ό)
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "εΤ(O[Eΰ[ό)",
            label_text: "31",
            color: "blue"
        },
// hδ(O[Eΰ[ό)
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "hδ(O[Eΰ[ό)",
            label_text: "32",
            color: "blue"
        },
// hδ
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "hδ",
            label_text: "33",
            color: "blue"
        },
// μD΄
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "μD΄",
            label_text: "34",
            color: "blue"
        },
// sμl
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "sμl",
            label_text: "35",
            color: "blue"
        },
// 
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "",
            label_text: "36",
            color: "blue"
        },
// _c
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "_c",
            label_text: "37",
            color: "blue"
        },
// δm
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "δm",
            label_text: "38",
            color: "blue"
        },
// γXΨ
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "γXΨ",
            label_text: "39",
            color: "blue"
        },
// iμ
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "iμ",
            label_text: "40",
            color: "blue"
        },
// μθ
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "μθ",
            label_text: "41",
            color: "blue"
        },
// Kθ
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "Kθ",
            label_text: "42",
            color: "blue"
        },
// lμθ
        {
            position : { lat: 35.5102298, lng: 139.7138483 },
            title: "lμθ",
            label_text: "43",
            color: "blue"
        },
//  Ξ
        {
            position : { lat: 35.5018366, lng: 139.7064453 },
            title: " Ξ",
            label_text: "44",
            color: "blue"
        },
// σμ
        {
            position : { lat: 35.4976003, lng: 139.6956468 },
            title: "σμ",
            label_text: "45",
            color: "blue"
        },
// ί©
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "ί©",
            label_text: "46",
            color: "blue"
        },
//  ¬
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: " ¬",
            label_text: "47",
            color: "blue"
        },
// {{¬
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "{{¬",
            label_text: "48",
            color: "blue"
        },
// §μ
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "§μ",
            label_text: "49",
            color: "blue"
        },
// q
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "q",
            label_text: "50",
            color: "blue"
        },
// ͺ€q
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "ͺ€q",
            label_text: "51",
            color: "blue"
        },
// ΄{
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "΄{",
            label_text: "52",
            color: "blue"
        },
// _ήμ
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "_ήμ",
            label_text: "53",
            color: "blue"
        },
// ‘l
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "‘l",
            label_text: "54",
            color: "blue"
        },
// ‘l(ͺέό)
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "‘l(ͺέό)",
            label_text: "55",
            color: "blue"
        },
// εD(ͺέό)
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "εD(ͺέό)",
            label_text: "56",
            color: "blue"
        },
// εD
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "εD",
            label_text: "57",
            color: "blue"
        },
// θ
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "θ",
            label_text: "58",
            color: "blue"
        },
// {Γ
        {
            position : { lat: 35.2813605, lng: 139.214952 },
            title: "{Γ",
            label_text: "59",
            color: "blue"
        },
// ΐΓ
        {
            position : { lat: 35.1026012, lng: 138.8597631 },
            title: "ΐΓ",
            label_text: "60",
            color: "blue"
        },
// xm
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "xm",
            label_text: "61",
            color: "blue"
        },
// b{
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "b{",
            label_text: "62",
            color: "blue"
        },
// ͺJ
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "ͺJ",
            label_text: "63",
            color: "blue"
        },
// Cμ
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "Cμ",
            label_text: "64",
            color: "blue"
        },
// L΄
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "L΄",
            label_text: "65",
            color: "blue"
        },
// ε{
        {
            position : { lat: 35.0088341, lng: 136.9620734 },
            title: "ε{",
            label_text: "66",
            color: "blue"
        },
// ΰR
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "ΰR",
            label_text: "67",
            color: "blue"
        },
// K
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "K",
            label_text: "68",
            color: "blue"
        },
// Ό{
        {
            position : { lat: 36.2308211, lng: 137.9643505 },
            title: "Ό{",
            label_text: "69",
            color: "blue"
        },
// μ¬J
        {
            position : { lat: 36.7748831, lng: 137.9082227 },
            title: "μ¬J",
            label_text: "70",
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
                scale: 16, //~ΜTCY
                strokeColor: m.color, //gΜF
                strokeWeight: 1.0 //gΜ§ί¦
            },
            title: m.title,
            label: {
                text: m.label_text, //xΆ
                color: '#FFFFFF', //ΆΜF
                fontSize: '20px' //ΆΜTCY
            }
        });
    }
}
