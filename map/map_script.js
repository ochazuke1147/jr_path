var map;
var marker;
var center = {
    lat: 35.170694, // à‹ìx
    lng: 136.881637 // åoìx
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // ínê}ÇÃíÜêSÇéwíË
        zoom: 6 // ínê}ÇÃÉYÅ[ÉÄÇéwíË
    });
// pathÇÃÉâÉCÉìê›íË
    var path_line = new google.maps.Polyline({
        map: map,
        path:[
// íºç]í√
            new google.maps.LatLng(37.1702506,138.242039),
// îêçË
            new google.maps.LatLng(37.3637096,138.5562887),
// ãgìc
            new google.maps.LatLng(37.6871131,138.8786033),
// êVäÉ
            new google.maps.LatLng(37.91209,139.0617442),
// êVî≠ìc
            new google.maps.LatLng(37.9440569,139.3350935),
// êVí√
            new google.maps.LatLng(37.8004686,139.1212473),
// ìåéOè
            new google.maps.LatLng(37.6285143,138.9736524),
// ã{ì‡
            new google.maps.LatLng(37.4220999,138.8402313),
// èaêÏ
            new google.maps.LatLng(36.4913158,139.0088),
// êVëOã¥
            new google.maps.LatLng(36.379033,139.0469116),
// è¨éR
            new google.maps.LatLng(36.3128947,139.8064972),
// ëÂã{
            new google.maps.LatLng(35.9063453,139.6231198),
// ïêë†âYòa
            new google.maps.LatLng(35.845352,139.6468681),
// êºçëï™éõ
            new google.maps.LatLng(35.6997996,139.4657707),
// êVèh
            new google.maps.LatLng(35.6894597,139.700537),
// írë‹
            new google.maps.LatLng(35.729487,139.7109997),
// ìcí[
            new google.maps.LatLng(35.7383571,139.7607333),
// ê‘âH
            new google.maps.LatLng(35.7776795,139.7209883),
// ìÏâYòa
            new google.maps.LatLng(35.8481784,139.6687818),
// êVèºåÀ
            new google.maps.LatLng(35.8255382,139.9211025),
// ì˙ïÈó¢
            new google.maps.LatLng(35.7281575,139.770638),
// èHótå¥
            new google.maps.LatLng(35.698362,139.7733021),
// ã—éÖí¨
            new google.maps.LatLng(35.6971445,139.81384),
// êºëDã¥
            new google.maps.LatLng(35.7074664,139.9590826),
// êÁót
            new google.maps.LatLng(35.6129299,140.1134652),
// ç≤ëq
            new google.maps.LatLng(35.7095572,140.2259731),
// ê¨ìc
            new google.maps.LatLng(35.7773313,140.3135312),
// çÅéÊ
            new google.maps.LatLng(35.8979327,140.5322812),
// èºçË
            new google.maps.LatLng(35.7395434,140.7952883),
// ê¨ìå
            new google.maps.LatLng(35.6083855,140.4108524),
// ëÂñ‘
            new google.maps.LatLng(35.522508,140.3110421),
// ëÂñ‘(äOñ[ÅEì‡ñ[ê¸)
            new google.maps.LatLng(35.522508,140.3110421),
// ëhâ‰(äOñ[ÅEì‡ñ[ê¸)
            new google.maps.LatLng(35.5815282,140.1310471),
// ëhâ‰
            new google.maps.LatLng(35.5815282,140.1310471),
// ìÏëDã¥
            new google.maps.LatLng(35.6817774,139.9958289),
// ésêÏâñïl
            new google.maps.LatLng(35.6664838,139.9236774),
// ìåãû
            new google.maps.LatLng(35.6811957,139.767251),
// ê_ìc
            new google.maps.LatLng(35.6918216,139.770935),
// å‰íÉÉmêÖ
            new google.maps.LatLng(35.6994603,139.7652079),
// ë„ÅXñÿ
            new google.maps.LatLng(35.6841068,139.7021759),
// ïiêÏ
            new google.maps.LatLng(35.6284888,139.7387767),
// êÏçË
            new google.maps.LatLng(35.5313531,139.6968913),
// êKéË
            new google.maps.LatLng(35.5315627,139.6842527),
// ïlêÏçË
            new google.maps.LatLng(35.5102298,139.7138483),
// ïêë†îíêŒ
            new google.maps.LatLng(35.5018366,139.7064453),
// êÛñÏ
            new google.maps.LatLng(35.4976003,139.6956468),
// íﬂå©
            new google.maps.LatLng(35.5082528,139.6763195),
// ïêë†è¨êô
            new google.maps.LatLng(35.5766373,139.6594584),
// ï{íÜñ{í¨
            new google.maps.LatLng(35.6661875,139.4772291),
// óßêÏ
            new google.maps.LatLng(35.6982051,139.4137788),
// îqìá
            new google.maps.LatLng(35.7210899,139.343634),
// î™â§éq
            new google.maps.LatLng(35.6556399,139.3388915),
// ã¥ñ{
            new google.maps.LatLng(35.5949215,139.3450528),
// ìåê_ìﬁêÏ
            new google.maps.LatLng(35.4779787,139.6333869),
// â°ïl
            new google.maps.LatLng(35.4657885,139.6223299),
// â°ïl(ç™ä›ê¸)
            new google.maps.LatLng(35.4657885,139.6223299),
// ëÂëD(ç™ä›ê¸)
            new google.maps.LatLng(35.3544937,139.5315814),
// ëÂëD
            new google.maps.LatLng(35.3544937,139.5315814),
// äùÉñçË
            new google.maps.LatLng(35.3303085,139.406848),
// çëï{í√
            new google.maps.LatLng(35.2813605,139.214952),
// è¿í√
            new google.maps.LatLng(35.1026012,138.8597631),
// ïxém
            new google.maps.LatLng(35.151486,138.6511946),
// çbï{
            new google.maps.LatLng(35.6670765,138.5690546),
// â™íJ
            new google.maps.LatLng(36.0570347,138.0453799),
// íCñÏ
            new google.maps.LatLng(35.9845957,137.9978725),
// ñLã¥
            new google.maps.LatLng(34.7629304,137.381926),
// ëÂï{
            new google.maps.LatLng(35.0088341,136.9620734),
// ã‡éR
            new google.maps.LatLng(35.1429282,136.9012195),
// âñêK
            new google.maps.LatLng(36.1143387,137.9481023),
// èºñ{
            new google.maps.LatLng(36.2308211,137.9643505),
// ìÏè¨íJ
            new google.maps.LatLng(36.7748831,137.9082227),
        ],
        strokeColor: "rgb(0 ,51,204)", //ê¸êF(def:#000000)
        strokeOpacity: 0.5, //ìßñæìx0Å`1(def:1)
        strokeWeight: 5, //pxéwíËÅidef:1)
        zIndex: 1 //èdÇ»ÇËèá
        }
    );
// âwÇÃÉ}Å[ÉJÅ[ê›íË
    var markers = [
// íºç]í√
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "íºç]í√",
            label_text: "0",
            color: "blue"
        },
// îêçË
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "îêçË",
            label_text: "1",
            color: "blue"
        },
// ãgìc
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "ãgìc",
            label_text: "2",
            color: "blue"
        },
// êVäÉ
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "êVäÉ",
            label_text: "3",
            color: "blue"
        },
// êVî≠ìc
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "êVî≠ìc",
            label_text: "4",
            color: "blue"
        },
// êVí√
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "êVí√",
            label_text: "5",
            color: "blue"
        },
// ìåéOè
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "ìåéOè",
            label_text: "6",
            color: "blue"
        },
// ã{ì‡
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "ã{ì‡",
            label_text: "7",
            color: "blue"
        },
// èaêÏ
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "èaêÏ",
            label_text: "8",
            color: "blue"
        },
// êVëOã¥
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "êVëOã¥",
            label_text: "9",
            color: "blue"
        },
// è¨éR
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "è¨éR",
            label_text: "10",
            color: "blue"
        },
// ëÂã{
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "ëÂã{",
            label_text: "11",
            color: "blue"
        },
// ïêë†âYòa
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: "ïêë†âYòa",
            label_text: "12",
            color: "blue"
        },
// êºçëï™éõ
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "êºçëï™éõ",
            label_text: "13",
            color: "blue"
        },
// êVèh
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "êVèh",
            label_text: "14",
            color: "blue"
        },
// írë‹
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "írë‹",
            label_text: "15",
            color: "blue"
        },
// ìcí[
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "ìcí[",
            label_text: "16",
            color: "blue"
        },
// ê‘âH
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "ê‘âH",
            label_text: "17",
            color: "blue"
        },
// ìÏâYòa
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "ìÏâYòa",
            label_text: "18",
            color: "blue"
        },
// êVèºåÀ
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "êVèºåÀ",
            label_text: "19",
            color: "blue"
        },
// ì˙ïÈó¢
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "ì˙ïÈó¢",
            label_text: "20",
            color: "blue"
        },
// èHótå¥
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "èHótå¥",
            label_text: "21",
            color: "blue"
        },
// ã—éÖí¨
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "ã—éÖí¨",
            label_text: "22",
            color: "blue"
        },
// êºëDã¥
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "êºëDã¥",
            label_text: "23",
            color: "blue"
        },
// êÁót
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "êÁót",
            label_text: "24",
            color: "blue"
        },
// ç≤ëq
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "ç≤ëq",
            label_text: "25",
            color: "blue"
        },
// ê¨ìc
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "ê¨ìc",
            label_text: "26",
            color: "blue"
        },
// çÅéÊ
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "çÅéÊ",
            label_text: "27",
            color: "blue"
        },
// èºçË
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "èºçË",
            label_text: "28",
            color: "blue"
        },
// ê¨ìå
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "ê¨ìå",
            label_text: "29",
            color: "blue"
        },
// ëÂñ‘
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "ëÂñ‘",
            label_text: "30",
            color: "blue"
        },
// ëÂñ‘(äOñ[ÅEì‡ñ[ê¸)
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "ëÂñ‘(äOñ[ÅEì‡ñ[ê¸)",
            label_text: "31",
            color: "blue"
        },
// ëhâ‰(äOñ[ÅEì‡ñ[ê¸)
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "ëhâ‰(äOñ[ÅEì‡ñ[ê¸)",
            label_text: "32",
            color: "blue"
        },
// ëhâ‰
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "ëhâ‰",
            label_text: "33",
            color: "blue"
        },
// ìÏëDã¥
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "ìÏëDã¥",
            label_text: "34",
            color: "blue"
        },
// ésêÏâñïl
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "ésêÏâñïl",
            label_text: "35",
            color: "blue"
        },
// ìåãû
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "ìåãû",
            label_text: "36",
            color: "blue"
        },
// ê_ìc
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "ê_ìc",
            label_text: "37",
            color: "blue"
        },
// å‰íÉÉmêÖ
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "å‰íÉÉmêÖ",
            label_text: "38",
            color: "blue"
        },
// ë„ÅXñÿ
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "ë„ÅXñÿ",
            label_text: "39",
            color: "blue"
        },
// ïiêÏ
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "ïiêÏ",
            label_text: "40",
            color: "blue"
        },
// êÏçË
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "êÏçË",
            label_text: "41",
            color: "blue"
        },
// êKéË
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "êKéË",
            label_text: "42",
            color: "blue"
        },
// ïlêÏçË
        {
            position : { lat: 35.5102298, lng: 139.7138483 },
            title: "ïlêÏçË",
            label_text: "43",
            color: "blue"
        },
// ïêë†îíêŒ
        {
            position : { lat: 35.5018366, lng: 139.7064453 },
            title: "ïêë†îíêŒ",
            label_text: "44",
            color: "blue"
        },
// êÛñÏ
        {
            position : { lat: 35.4976003, lng: 139.6956468 },
            title: "êÛñÏ",
            label_text: "45",
            color: "blue"
        },
// íﬂå©
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "íﬂå©",
            label_text: "46",
            color: "blue"
        },
// ïêë†è¨êô
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: "ïêë†è¨êô",
            label_text: "47",
            color: "blue"
        },
// ï{íÜñ{í¨
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "ï{íÜñ{í¨",
            label_text: "48",
            color: "blue"
        },
// óßêÏ
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "óßêÏ",
            label_text: "49",
            color: "blue"
        },
// îqìá
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "îqìá",
            label_text: "50",
            color: "blue"
        },
// î™â§éq
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "î™â§éq",
            label_text: "51",
            color: "blue"
        },
// ã¥ñ{
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "ã¥ñ{",
            label_text: "52",
            color: "blue"
        },
// ìåê_ìﬁêÏ
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "ìåê_ìﬁêÏ",
            label_text: "53",
            color: "blue"
        },
// â°ïl
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "â°ïl",
            label_text: "54",
            color: "blue"
        },
// â°ïl(ç™ä›ê¸)
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "â°ïl(ç™ä›ê¸)",
            label_text: "55",
            color: "blue"
        },
// ëÂëD(ç™ä›ê¸)
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "ëÂëD(ç™ä›ê¸)",
            label_text: "56",
            color: "blue"
        },
// ëÂëD
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "ëÂëD",
            label_text: "57",
            color: "blue"
        },
// äùÉñçË
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "äùÉñçË",
            label_text: "58",
            color: "blue"
        },
// çëï{í√
        {
            position : { lat: 35.2813605, lng: 139.214952 },
            title: "çëï{í√",
            label_text: "59",
            color: "blue"
        },
// è¿í√
        {
            position : { lat: 35.1026012, lng: 138.8597631 },
            title: "è¿í√",
            label_text: "60",
            color: "blue"
        },
// ïxém
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "ïxém",
            label_text: "61",
            color: "blue"
        },
// çbï{
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "çbï{",
            label_text: "62",
            color: "blue"
        },
// â™íJ
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "â™íJ",
            label_text: "63",
            color: "blue"
        },
// íCñÏ
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "íCñÏ",
            label_text: "64",
            color: "blue"
        },
// ñLã¥
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "ñLã¥",
            label_text: "65",
            color: "blue"
        },
// ëÂï{
        {
            position : { lat: 35.0088341, lng: 136.9620734 },
            title: "ëÂï{",
            label_text: "66",
            color: "blue"
        },
// ã‡éR
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "ã‡éR",
            label_text: "67",
            color: "blue"
        },
// âñêK
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "âñêK",
            label_text: "68",
            color: "blue"
        },
// èºñ{
        {
            position : { lat: 36.2308211, lng: 137.9643505 },
            title: "èºñ{",
            label_text: "69",
            color: "blue"
        },
// ìÏè¨íJ
        {
            position : { lat: 36.7748831, lng: 137.9082227 },
            title: "ìÏè¨íJ",
            label_text: "70",
            color: "blue"
        },
    ];
// ï°êîÇÃÉ}Å[ÉJÅ[Çîzíu
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color, //ìhÇËí◊ÇµêF
                fillOpacity: 0.8, //ìhÇËí◊Çµìßâﬂó¶
                path: google.maps.SymbolPath.CIRCLE, //â~ÇéwíË
                scale: 16, //â~ÇÃÉTÉCÉY
                strokeColor: m.color, //ògÇÃêF
                strokeWeight: 1.0 //ògÇÃìßâﬂó¶
            },
            title: m.title,
            label: {
                text: m.label_text, //ÉâÉxÉãï∂éö
                color: '#FFFFFF', //ï∂éöÇÃêF
                fontSize: '20px' //ï∂éöÇÃÉTÉCÉY
            }
        });
    }
}
