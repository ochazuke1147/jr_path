var map;
var marker;
var center = {
    lat: 35.170694, // 緯度
    lng: 136.881637 // 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // 地図の中心を指定
        zoom: 6 // 地図のズームを指定
    });
// pathのライン設定
    var path_line = new google.maps.Polyline({
        map: map,
        path:[
// 大垣
            new google.maps.LatLng(35.3669998,136.6175494),
// 名古屋
            new google.maps.LatLng(35.1709142,136.8816447),
// 金山
            new google.maps.LatLng(35.1429282,136.9012195),
// 塩尻
            new google.maps.LatLng(36.1143387,137.9481023),
// 岡谷
            new google.maps.LatLng(36.0570347,138.0453799),
// 辰野
            new google.maps.LatLng(35.9845957,137.9978725),
// 豊橋
            new google.maps.LatLng(34.7629304,137.381926),
// 富士
            new google.maps.LatLng(35.151486,138.6511946),
// 甲府
            new google.maps.LatLng(35.6670765,138.5690546),
// 八王子
            new google.maps.LatLng(35.6556399,139.3388915),
// 橋本
            new google.maps.LatLng(35.5949215,139.3450528),
// 茅ヶ崎
            new google.maps.LatLng(35.3303085,139.406848),
// 大船
            new google.maps.LatLng(35.3544937,139.5315814),
// 横浜
            new google.maps.LatLng(35.4657885,139.6223299),
// 東神奈川
            new google.maps.LatLng(35.4779787,139.6333869),
// 鶴見
            new google.maps.LatLng(35.5082528,139.6763195),
// 武蔵小杉
            new google.maps.LatLng(35.5766373,139.6594584),
// 尻手
            new google.maps.LatLng(35.5315627,139.6842527),
// 川崎
            new google.maps.LatLng(35.5313531,139.6968913),
// 品川
            new google.maps.LatLng(35.6284888,139.7387767),
// 代々木
            new google.maps.LatLng(35.6841068,139.7021759),
// 御茶ノ水
            new google.maps.LatLng(35.6994603,139.7652079),
// 神田
            new google.maps.LatLng(35.6918216,139.770935),
// 東京
            new google.maps.LatLng(35.6811957,139.767251),
// 市川塩浜
            new google.maps.LatLng(35.6664838,139.9236774),
// 南船橋
            new google.maps.LatLng(35.6817774,139.9958289),
// 蘇我
            new google.maps.LatLng(35.5815282,140.1310471),
// 大網
            new google.maps.LatLng(35.522508,140.3110421),
// 成東
            new google.maps.LatLng(35.6083855,140.4108524),
// 松岸
            new google.maps.LatLng(35.7395434,140.7952883),
// 香取
            new google.maps.LatLng(35.8979327,140.5322812),
// 成田
            new google.maps.LatLng(35.7773313,140.3135312),
// 佐倉
            new google.maps.LatLng(35.7095572,140.2259731),
// 千葉
            new google.maps.LatLng(35.6129299,140.1134652),
// 西船橋
            new google.maps.LatLng(35.7074664,139.9590826),
// 錦糸町
            new google.maps.LatLng(35.6971445,139.81384),
// 秋葉原
            new google.maps.LatLng(35.698362,139.7733021),
// 日暮里
            new google.maps.LatLng(35.7281575,139.770638),
// 新松戸
            new google.maps.LatLng(35.8255382,139.9211025),
// 南浦和
            new google.maps.LatLng(35.8481784,139.6687818),
// 武蔵浦和
            new google.maps.LatLng(35.845352,139.6468681),
// 赤羽
            new google.maps.LatLng(35.7776795,139.7209883),
// 田端
            new google.maps.LatLng(35.7383571,139.7607333),
// 池袋
            new google.maps.LatLng(35.729487,139.7109997),
// 新宿
            new google.maps.LatLng(35.6894597,139.700537),
// 西国分寺
            new google.maps.LatLng(35.6997996,139.4657707),
// 府中本町
            new google.maps.LatLng(35.6661875,139.4772291),
// 立川
            new google.maps.LatLng(35.6982051,139.4137788),
// 拝島
            new google.maps.LatLng(35.7210899,139.343634),
// 大宮
            new google.maps.LatLng(35.9063453,139.6231198),
// 小山
            new google.maps.LatLng(36.3128947,139.8064972),
// 新前橋
            new google.maps.LatLng(36.379033,139.0469116),
// 渋川
            new google.maps.LatLng(36.4913158,139.0088),
// 宮内
            new google.maps.LatLng(37.4220999,138.8402313),
// 東三条
            new google.maps.LatLng(37.6285143,138.9736524),
// 新津
            new google.maps.LatLng(37.8004686,139.1212473),
// 新発田
            new google.maps.LatLng(37.9440569,139.3350935),
// 新潟
            new google.maps.LatLng(37.91209,139.0617442),
// 吉田
            new google.maps.LatLng(37.6871131,138.8786033),
// 柏崎
            new google.maps.LatLng(37.3637096,138.5562887),
// 直江津
            new google.maps.LatLng(37.1702506,138.242039),
        ],
        strokeColor: "rgb(0 ,51,204)", //線色(def:#000000)
        strokeOpacity: 0.5, //透明度0～1(def:1)
        strokeWeight: 5, //px指定（def:1)
        zIndex: 1 //重なり順
        }
    );
// 駅のマーカー設定
    var markers = [
// 大垣
        {
            position : { lat: 35.3669998, lng: 136.6175494 },
            title: "大垣",
            label_text: "0",
            color: "blue"
        },
// 名古屋
        {
            position : { lat: 35.1709142, lng: 136.8816447 },
            title: "名古屋",
            label_text: "1",
            color: "blue"
        },
// 金山
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "金山",
            label_text: "2",
            color: "blue"
        },
// 塩尻
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "塩尻",
            label_text: "3",
            color: "blue"
        },
// 岡谷
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "岡谷",
            label_text: "4",
            color: "blue"
        },
// 辰野
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "辰野",
            label_text: "5",
            color: "blue"
        },
// 豊橋
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "豊橋",
            label_text: "6",
            color: "blue"
        },
// 富士
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "富士",
            label_text: "7",
            color: "blue"
        },
// 甲府
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "甲府",
            label_text: "8",
            color: "blue"
        },
// 八王子
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "八王子",
            label_text: "9",
            color: "blue"
        },
// 橋本
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "橋本",
            label_text: "10",
            color: "blue"
        },
// 茅ヶ崎
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "茅ヶ崎",
            label_text: "11",
            color: "blue"
        },
// 大船
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "大船",
            label_text: "12",
            color: "blue"
        },
// 横浜
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "横浜",
            label_text: "13",
            color: "blue"
        },
// 東神奈川
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "東神奈川",
            label_text: "14",
            color: "blue"
        },
// 鶴見
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "鶴見",
            label_text: "15",
            color: "blue"
        },
// 武蔵小杉
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: "武蔵小杉",
            label_text: "16",
            color: "blue"
        },
// 尻手
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "尻手",
            label_text: "17",
            color: "blue"
        },
// 川崎
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "川崎",
            label_text: "18",
            color: "blue"
        },
// 品川
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "品川",
            label_text: "19",
            color: "blue"
        },
// 代々木
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "代々木",
            label_text: "20",
            color: "blue"
        },
// 御茶ノ水
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "御茶ノ水",
            label_text: "21",
            color: "blue"
        },
// 神田
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "神田",
            label_text: "22",
            color: "blue"
        },
// 東京
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "東京",
            label_text: "23",
            color: "blue"
        },
// 市川塩浜
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "市川塩浜",
            label_text: "24",
            color: "blue"
        },
// 南船橋
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "南船橋",
            label_text: "25",
            color: "blue"
        },
// 蘇我
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "蘇我",
            label_text: "26",
            color: "blue"
        },
// 大網
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "大網",
            label_text: "27",
            color: "blue"
        },
// 成東
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "成東",
            label_text: "28",
            color: "blue"
        },
// 松岸
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "松岸",
            label_text: "29",
            color: "blue"
        },
// 香取
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "香取",
            label_text: "30",
            color: "blue"
        },
// 成田
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "成田",
            label_text: "31",
            color: "blue"
        },
// 佐倉
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "佐倉",
            label_text: "32",
            color: "blue"
        },
// 千葉
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "千葉",
            label_text: "33",
            color: "blue"
        },
// 西船橋
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "西船橋",
            label_text: "34",
            color: "blue"
        },
// 錦糸町
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "錦糸町",
            label_text: "35",
            color: "blue"
        },
// 秋葉原
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "秋葉原",
            label_text: "36",
            color: "blue"
        },
// 日暮里
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "日暮里",
            label_text: "37",
            color: "blue"
        },
// 新松戸
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "新松戸",
            label_text: "38",
            color: "blue"
        },
// 南浦和
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "南浦和",
            label_text: "39",
            color: "blue"
        },
// 武蔵浦和
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: "武蔵浦和",
            label_text: "40",
            color: "blue"
        },
// 赤羽
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "赤羽",
            label_text: "41",
            color: "blue"
        },
// 田端
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "田端",
            label_text: "42",
            color: "blue"
        },
// 池袋
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "池袋",
            label_text: "43",
            color: "blue"
        },
// 新宿
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "新宿",
            label_text: "44",
            color: "blue"
        },
// 西国分寺
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "西国分寺",
            label_text: "45",
            color: "blue"
        },
// 府中本町
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "府中本町",
            label_text: "46",
            color: "blue"
        },
// 立川
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "立川",
            label_text: "47",
            color: "blue"
        },
// 拝島
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "拝島",
            label_text: "48",
            color: "blue"
        },
// 大宮
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "大宮",
            label_text: "49",
            color: "blue"
        },
// 小山
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "小山",
            label_text: "50",
            color: "blue"
        },
// 新前橋
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "新前橋",
            label_text: "51",
            color: "blue"
        },
// 渋川
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "渋川",
            label_text: "52",
            color: "blue"
        },
// 宮内
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "宮内",
            label_text: "53",
            color: "blue"
        },
// 東三条
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "東三条",
            label_text: "54",
            color: "blue"
        },
// 新津
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "新津",
            label_text: "55",
            color: "blue"
        },
// 新発田
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "新発田",
            label_text: "56",
            color: "blue"
        },
// 新潟
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "新潟",
            label_text: "57",
            color: "blue"
        },
// 吉田
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "吉田",
            label_text: "58",
            color: "blue"
        },
// 柏崎
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "柏崎",
            label_text: "59",
            color: "blue"
        },
// 直江津
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "直江津",
            label_text: "60",
            color: "blue"
        },
    ];
// 複数のマーカーを配置
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color, //塗り潰し色
                fillOpacity: 0.8, //塗り潰し透過率
                path: google.maps.SymbolPath.CIRCLE, //円を指定
                scale: 8, //円のサイズ
                strokeColor: m.color, //枠の色
                strokeWeight: 1.0 //枠の透過率
            },
            title: m.title,
            label: {
                text: m.label_text, //ラベル文字
                color: '#FFFFFF', //文字の色
                fontSize: '10px' //文字のサイズ
            }
        });
    }
}
