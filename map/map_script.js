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
// îqìá
            new google.maps.LatLng(35.7210899,139.343634),
// óßêÏ
            new google.maps.LatLng(35.6982051,139.4137788),
// ï{íÜñ{í¨
            new google.maps.LatLng(35.6661875,139.4772291),
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
// ïêë†âYòa
            new google.maps.LatLng(35.845352,139.6468681),
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
// èºä›
            new google.maps.LatLng(35.7395434,140.7952883),
// ê¨ìå
            new google.maps.LatLng(35.6083855,140.4108524),
// ëÂñ‘
            new google.maps.LatLng(35.522508,140.3110421),
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
// ïêë†è¨êô
            new google.maps.LatLng(35.5766373,139.6594584),
// íﬂå©
            new google.maps.LatLng(35.5082528,139.6763195),
// ìåê_ìﬁêÏ
            new google.maps.LatLng(35.4779787,139.6333869),
// â°ïl
            new google.maps.LatLng(35.4657885,139.6223299),
// ëÂëD
            new google.maps.LatLng(35.3544937,139.5315814),
// äùÉñçË
            new google.maps.LatLng(35.3303085,139.406848),
// ã¥ñ{
            new google.maps.LatLng(35.5949215,139.3450528),
// î™â§éq
            new google.maps.LatLng(35.6556399,139.3388915),
// çbï{
            new google.maps.LatLng(35.6670765,138.5690546),
// ïxém
            new google.maps.LatLng(35.151486,138.6511946),
// ñLã¥
            new google.maps.LatLng(34.7629304,137.381926),
// íCñÏ
            new google.maps.LatLng(35.9845957,137.9978725),
// â™íJ
            new google.maps.LatLng(36.0570347,138.0453799),
// âñêK
            new google.maps.LatLng(36.1143387,137.9481023),
// ã‡éR
            new google.maps.LatLng(35.1429282,136.9012195),
// ñºå√âÆ
            new google.maps.LatLng(35.1709142,136.8816447),
// ëÂä_
            new google.maps.LatLng(35.3669998,136.6175494),
// ïƒå¥
            new google.maps.LatLng(35.3145999,136.2905717),
// ëêí√
            new google.maps.LatLng(35.0228832,135.9622036),
// éRâ»
            new google.maps.LatLng(34.992343,135.8173204),
// ãﬂç]âñí√
            new google.maps.LatLng(35.5383377,136.1514616),
// àªïî
            new google.maps.LatLng(35.3021433,135.2518621),
// ãûìs
            new google.maps.LatLng(34.9858294,135.7589033),
// ñÿí√
            new google.maps.LatLng(34.7359383,135.8248179),
// ï˙èo
            new google.maps.LatLng(34.6880334,135.5630922),
// ãvïÛéõ
            new google.maps.LatLng(34.6224548,135.5842199),
// â§éõ
            new google.maps.LatLng(34.5977198,135.7025349),
// ìﬁó«
            new google.maps.LatLng(34.6809044,135.8189335),
// çÇìc
            new google.maps.LatLng(34.5163234,135.7447341),
// òaâÃéR
            new google.maps.LatLng(34.2319356,135.1911771),
// ì˙ç™ñÏ
            new google.maps.LatLng(34.3901649,135.3306787),
// ñP
            new google.maps.LatLng(34.5319888,135.4588616),
// ìVâ§éõ
            new google.maps.LatLng(34.6473099,135.5138727),
// ç°ã{
            new google.maps.LatLng(34.6541072,135.4927889),
// êºã„è
            new google.maps.LatLng(34.68215,135.4661438),
// ëÂç„
            new google.maps.LatLng(34.7024849,135.4959506),
// êVëÂç„
            new google.maps.LatLng(34.7331669,135.5002139),
// é∞ñÏ
            new google.maps.LatLng(34.6927724,135.545139),
// ãûã¥
            new google.maps.LatLng(34.6965674,135.5341349),
// ìÚçË
            new google.maps.LatLng(34.7318259,135.4316693),
// íJêÏ
            new google.maps.LatLng(35.0823226,135.0501144),
// â¡å√êÏ
            new google.maps.LatLng(34.7676372,134.8393645),
// ïPòH
            new google.maps.LatLng(34.8266323,134.6898735),
// ëäê∂
            new google.maps.LatLng(34.8179561,134.4741181),
// ìåâ™éR
            new google.maps.LatLng(34.6856481,133.9881796),
// â™éR
            new google.maps.LatLng(34.6664023,133.9186461),
// ëqï~
            new google.maps.LatLng(34.6020202,133.7657547),
// ïüéR
            new google.maps.LatLng(34.4892415,133.3614224),
// éOå¥
            new google.maps.LatLng(34.4005593,133.0831419),
// äCìcés
            new google.maps.LatLng(34.3720353,132.530533),
// â°êÏ
            new google.maps.LatLng(34.4099757,132.4505616),
// â∫èº
            new google.maps.LatLng(34.0087337,131.8680532),
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
// îqìá
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "îqìá",
            label_text: "12",
            color: "blue"
        },
// óßêÏ
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "óßêÏ",
            label_text: "13",
            color: "blue"
        },
// ï{íÜñ{í¨
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "ï{íÜñ{í¨",
            label_text: "14",
            color: "blue"
        },
// êºçëï™éõ
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "êºçëï™éõ",
            label_text: "15",
            color: "blue"
        },
// êVèh
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "êVèh",
            label_text: "16",
            color: "blue"
        },
// írë‹
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "írë‹",
            label_text: "17",
            color: "blue"
        },
// ìcí[
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "ìcí[",
            label_text: "18",
            color: "blue"
        },
// ê‘âH
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "ê‘âH",
            label_text: "19",
            color: "blue"
        },
// ïêë†âYòa
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: "ïêë†âYòa",
            label_text: "20",
            color: "blue"
        },
// ìÏâYòa
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "ìÏâYòa",
            label_text: "21",
            color: "blue"
        },
// êVèºåÀ
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "êVèºåÀ",
            label_text: "22",
            color: "blue"
        },
// ì˙ïÈó¢
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "ì˙ïÈó¢",
            label_text: "23",
            color: "blue"
        },
// èHótå¥
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "èHótå¥",
            label_text: "24",
            color: "blue"
        },
// ã—éÖí¨
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "ã—éÖí¨",
            label_text: "25",
            color: "blue"
        },
// êºëDã¥
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "êºëDã¥",
            label_text: "26",
            color: "blue"
        },
// êÁót
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "êÁót",
            label_text: "27",
            color: "blue"
        },
// ç≤ëq
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "ç≤ëq",
            label_text: "28",
            color: "blue"
        },
// ê¨ìc
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "ê¨ìc",
            label_text: "29",
            color: "blue"
        },
// çÅéÊ
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "çÅéÊ",
            label_text: "30",
            color: "blue"
        },
// èºä›
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "èºä›",
            label_text: "31",
            color: "blue"
        },
// ê¨ìå
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "ê¨ìå",
            label_text: "32",
            color: "blue"
        },
// ëÂñ‘
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "ëÂñ‘",
            label_text: "33",
            color: "blue"
        },
// ëhâ‰
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "ëhâ‰",
            label_text: "34",
            color: "blue"
        },
// ìÏëDã¥
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "ìÏëDã¥",
            label_text: "35",
            color: "blue"
        },
// ésêÏâñïl
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "ésêÏâñïl",
            label_text: "36",
            color: "blue"
        },
// ìåãû
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "ìåãû",
            label_text: "37",
            color: "blue"
        },
// ê_ìc
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "ê_ìc",
            label_text: "38",
            color: "blue"
        },
// å‰íÉÉmêÖ
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "å‰íÉÉmêÖ",
            label_text: "39",
            color: "blue"
        },
// ë„ÅXñÿ
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "ë„ÅXñÿ",
            label_text: "40",
            color: "blue"
        },
// ïiêÏ
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "ïiêÏ",
            label_text: "41",
            color: "blue"
        },
// êÏçË
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "êÏçË",
            label_text: "42",
            color: "blue"
        },
// êKéË
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "êKéË",
            label_text: "43",
            color: "blue"
        },
// ïêë†è¨êô
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: "ïêë†è¨êô",
            label_text: "44",
            color: "blue"
        },
// íﬂå©
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "íﬂå©",
            label_text: "45",
            color: "blue"
        },
// ìåê_ìﬁêÏ
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "ìåê_ìﬁêÏ",
            label_text: "46",
            color: "blue"
        },
// â°ïl
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "â°ïl",
            label_text: "47",
            color: "blue"
        },
// ëÂëD
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "ëÂëD",
            label_text: "48",
            color: "blue"
        },
// äùÉñçË
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "äùÉñçË",
            label_text: "49",
            color: "blue"
        },
// ã¥ñ{
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "ã¥ñ{",
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
// çbï{
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "çbï{",
            label_text: "52",
            color: "blue"
        },
// ïxém
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "ïxém",
            label_text: "53",
            color: "blue"
        },
// ñLã¥
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "ñLã¥",
            label_text: "54",
            color: "blue"
        },
// íCñÏ
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "íCñÏ",
            label_text: "55",
            color: "blue"
        },
// â™íJ
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "â™íJ",
            label_text: "56",
            color: "blue"
        },
// âñêK
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "âñêK",
            label_text: "57",
            color: "blue"
        },
// ã‡éR
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "ã‡éR",
            label_text: "58",
            color: "blue"
        },
// ñºå√âÆ
        {
            position : { lat: 35.1709142, lng: 136.8816447 },
            title: "ñºå√âÆ",
            label_text: "59",
            color: "blue"
        },
// ëÂä_
        {
            position : { lat: 35.3669998, lng: 136.6175494 },
            title: "ëÂä_",
            label_text: "60",
            color: "blue"
        },
// ïƒå¥
        {
            position : { lat: 35.3145999, lng: 136.2905717 },
            title: "ïƒå¥",
            label_text: "61",
            color: "blue"
        },
// ëêí√
        {
            position : { lat: 35.0228832, lng: 135.9622036 },
            title: "ëêí√",
            label_text: "62",
            color: "blue"
        },
// éRâ»
        {
            position : { lat: 34.992343, lng: 135.8173204 },
            title: "éRâ»",
            label_text: "63",
            color: "blue"
        },
// ãﬂç]âñí√
        {
            position : { lat: 35.5383377, lng: 136.1514616 },
            title: "ãﬂç]âñí√",
            label_text: "64",
            color: "blue"
        },
// àªïî
        {
            position : { lat: 35.3021433, lng: 135.2518621 },
            title: "àªïî",
            label_text: "65",
            color: "blue"
        },
// ãûìs
        {
            position : { lat: 34.9858294, lng: 135.7589033 },
            title: "ãûìs",
            label_text: "66",
            color: "blue"
        },
// ñÿí√
        {
            position : { lat: 34.7359383, lng: 135.8248179 },
            title: "ñÿí√",
            label_text: "67",
            color: "blue"
        },
// ï˙èo
        {
            position : { lat: 34.6880334, lng: 135.5630922 },
            title: "ï˙èo",
            label_text: "68",
            color: "blue"
        },
// ãvïÛéõ
        {
            position : { lat: 34.6224548, lng: 135.5842199 },
            title: "ãvïÛéõ",
            label_text: "69",
            color: "blue"
        },
// â§éõ
        {
            position : { lat: 34.5977198, lng: 135.7025349 },
            title: "â§éõ",
            label_text: "70",
            color: "blue"
        },
// ìﬁó«
        {
            position : { lat: 34.6809044, lng: 135.8189335 },
            title: "ìﬁó«",
            label_text: "71",
            color: "blue"
        },
// çÇìc
        {
            position : { lat: 34.5163234, lng: 135.7447341 },
            title: "çÇìc",
            label_text: "72",
            color: "blue"
        },
// òaâÃéR
        {
            position : { lat: 34.2319356, lng: 135.1911771 },
            title: "òaâÃéR",
            label_text: "73",
            color: "blue"
        },
// ì˙ç™ñÏ
        {
            position : { lat: 34.3901649, lng: 135.3306787 },
            title: "ì˙ç™ñÏ",
            label_text: "74",
            color: "blue"
        },
// ñP
        {
            position : { lat: 34.5319888, lng: 135.4588616 },
            title: "ñP",
            label_text: "75",
            color: "blue"
        },
// ìVâ§éõ
        {
            position : { lat: 34.6473099, lng: 135.5138727 },
            title: "ìVâ§éõ",
            label_text: "76",
            color: "blue"
        },
// ç°ã{
        {
            position : { lat: 34.6541072, lng: 135.4927889 },
            title: "ç°ã{",
            label_text: "77",
            color: "blue"
        },
// êºã„è
        {
            position : { lat: 34.68215, lng: 135.4661438 },
            title: "êºã„è",
            label_text: "78",
            color: "blue"
        },
// ëÂç„
        {
            position : { lat: 34.7024849, lng: 135.4959506 },
            title: "ëÂç„",
            label_text: "79",
            color: "blue"
        },
// êVëÂç„
        {
            position : { lat: 34.7331669, lng: 135.5002139 },
            title: "êVëÂç„",
            label_text: "80",
            color: "blue"
        },
// é∞ñÏ
        {
            position : { lat: 34.6927724, lng: 135.545139 },
            title: "é∞ñÏ",
            label_text: "81",
            color: "blue"
        },
// ãûã¥
        {
            position : { lat: 34.6965674, lng: 135.5341349 },
            title: "ãûã¥",
            label_text: "82",
            color: "blue"
        },
// ìÚçË
        {
            position : { lat: 34.7318259, lng: 135.4316693 },
            title: "ìÚçË",
            label_text: "83",
            color: "blue"
        },
// íJêÏ
        {
            position : { lat: 35.0823226, lng: 135.0501144 },
            title: "íJêÏ",
            label_text: "84",
            color: "blue"
        },
// â¡å√êÏ
        {
            position : { lat: 34.7676372, lng: 134.8393645 },
            title: "â¡å√êÏ",
            label_text: "85",
            color: "blue"
        },
// ïPòH
        {
            position : { lat: 34.8266323, lng: 134.6898735 },
            title: "ïPòH",
            label_text: "86",
            color: "blue"
        },
// ëäê∂
        {
            position : { lat: 34.8179561, lng: 134.4741181 },
            title: "ëäê∂",
            label_text: "87",
            color: "blue"
        },
// ìåâ™éR
        {
            position : { lat: 34.6856481, lng: 133.9881796 },
            title: "ìåâ™éR",
            label_text: "88",
            color: "blue"
        },
// â™éR
        {
            position : { lat: 34.6664023, lng: 133.9186461 },
            title: "â™éR",
            label_text: "89",
            color: "blue"
        },
// ëqï~
        {
            position : { lat: 34.6020202, lng: 133.7657547 },
            title: "ëqï~",
            label_text: "90",
            color: "blue"
        },
// ïüéR
        {
            position : { lat: 34.4892415, lng: 133.3614224 },
            title: "ïüéR",
            label_text: "91",
            color: "blue"
        },
// éOå¥
        {
            position : { lat: 34.4005593, lng: 133.0831419 },
            title: "éOå¥",
            label_text: "92",
            color: "blue"
        },
// äCìcés
        {
            position : { lat: 34.3720353, lng: 132.530533 },
            title: "äCìcés",
            label_text: "93",
            color: "blue"
        },
// â°êÏ
        {
            position : { lat: 34.4099757, lng: 132.4505616 },
            title: "â°êÏ",
            label_text: "94",
            color: "blue"
        },
// â∫èº
        {
            position : { lat: 34.0087337, lng: 131.8680532 },
            title: "â∫èº",
            label_text: "95",
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
                scale: 8, //â~ÇÃÉTÉCÉY
                strokeColor: m.color, //ògÇÃêF
                strokeWeight: 1.0 //ògÇÃìßâﬂó¶
            },
            title: m.title,
            label: {
                text: m.label_text, //ÉâÉxÉãï∂éö
                color: '#FFFFFF', //ï∂éöÇÃêF
                fontSize: '10px' //ï∂éöÇÃÉTÉCÉY
            }
        });
    }
}
