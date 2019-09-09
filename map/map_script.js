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
// 直江津
            new google.maps.LatLng(37.1702506,138.242039),
// 柏崎
            new google.maps.LatLng(37.3637096,138.5562887),
// 吉田
            new google.maps.LatLng(37.6871131,138.8786033),
// 新潟
            new google.maps.LatLng(37.91209,139.0617442),
// 新発田
            new google.maps.LatLng(37.9440569,139.3350935),
// 新津
            new google.maps.LatLng(37.8004686,139.1212473),
// 東三条
            new google.maps.LatLng(37.6285143,138.9736524),
// 宮内
            new google.maps.LatLng(37.4220999,138.8402313),
// 渋川
            new google.maps.LatLng(36.4913158,139.0088),
// 新前橋
            new google.maps.LatLng(36.379033,139.0469116),
// 小山
            new google.maps.LatLng(36.3128947,139.8064972),
// 大宮
            new google.maps.LatLng(35.9063453,139.6231198),
// 拝島
            new google.maps.LatLng(35.7210899,139.343634),
// 立川
            new google.maps.LatLng(35.6982051,139.4137788),
// 府中本町
            new google.maps.LatLng(35.6661875,139.4772291),
// 西国分寺
            new google.maps.LatLng(35.6997996,139.4657707),
// 新宿
            new google.maps.LatLng(35.6894597,139.700537),
// 池袋
            new google.maps.LatLng(35.729487,139.7109997),
// 田端
            new google.maps.LatLng(35.7383571,139.7607333),
// 赤羽
            new google.maps.LatLng(35.7776795,139.7209883),
// 武蔵浦和
            new google.maps.LatLng(35.845352,139.6468681),
// 南浦和
            new google.maps.LatLng(35.8481784,139.6687818),
// 新松戸
            new google.maps.LatLng(35.8255382,139.9211025),
// 日暮里
            new google.maps.LatLng(35.7281575,139.770638),
// 秋葉原
            new google.maps.LatLng(35.698362,139.7733021),
// 錦糸町
            new google.maps.LatLng(35.6971445,139.81384),
// 西船橋
            new google.maps.LatLng(35.7074664,139.9590826),
// 千葉
            new google.maps.LatLng(35.6129299,140.1134652),
// 佐倉
            new google.maps.LatLng(35.7095572,140.2259731),
// 成田
            new google.maps.LatLng(35.7773313,140.3135312),
// 香取
            new google.maps.LatLng(35.8979327,140.5322812),
// 松岸
            new google.maps.LatLng(35.7395434,140.7952883),
// 成東
            new google.maps.LatLng(35.6083855,140.4108524),
// 大網
            new google.maps.LatLng(35.522508,140.3110421),
// 蘇我
            new google.maps.LatLng(35.5815282,140.1310471),
// 南船橋
            new google.maps.LatLng(35.6817774,139.9958289),
// 市川塩浜
            new google.maps.LatLng(35.6664838,139.9236774),
// 東京
            new google.maps.LatLng(35.6811957,139.767251),
// 神田
            new google.maps.LatLng(35.6918216,139.770935),
// 御茶ノ水
            new google.maps.LatLng(35.6994603,139.7652079),
// 代々木
            new google.maps.LatLng(35.6841068,139.7021759),
// 品川
            new google.maps.LatLng(35.6284888,139.7387767),
// 川崎
            new google.maps.LatLng(35.5313531,139.6968913),
// 尻手
            new google.maps.LatLng(35.5315627,139.6842527),
// 武蔵小杉
            new google.maps.LatLng(35.5766373,139.6594584),
// 鶴見
            new google.maps.LatLng(35.5082528,139.6763195),
// 東神奈川
            new google.maps.LatLng(35.4779787,139.6333869),
// 横浜
            new google.maps.LatLng(35.4657885,139.6223299),
// 大船
            new google.maps.LatLng(35.3544937,139.5315814),
// 茅ヶ崎
            new google.maps.LatLng(35.3303085,139.406848),
// 橋本
            new google.maps.LatLng(35.5949215,139.3450528),
// 八王子
            new google.maps.LatLng(35.6556399,139.3388915),
// 甲府
            new google.maps.LatLng(35.6670765,138.5690546),
// 富士
            new google.maps.LatLng(35.151486,138.6511946),
// 豊橋
            new google.maps.LatLng(34.7629304,137.381926),
// 辰野
            new google.maps.LatLng(35.9845957,137.9978725),
// 岡谷
            new google.maps.LatLng(36.0570347,138.0453799),
// 塩尻
            new google.maps.LatLng(36.1143387,137.9481023),
// 金山
            new google.maps.LatLng(35.1429282,136.9012195),
// 名古屋
            new google.maps.LatLng(35.1709142,136.8816447),
// 大垣
            new google.maps.LatLng(35.3669998,136.6175494),
// 米原
            new google.maps.LatLng(35.3145999,136.2905717),
// 草津
            new google.maps.LatLng(35.0228832,135.9622036),
// 山科
            new google.maps.LatLng(34.992343,135.8173204),
// 近江塩津
            new google.maps.LatLng(35.5383377,136.1514616),
// 綾部
            new google.maps.LatLng(35.3021433,135.2518621),
// 京都
            new google.maps.LatLng(34.9858294,135.7589033),
// 木津
            new google.maps.LatLng(34.7359383,135.8248179),
// 放出
            new google.maps.LatLng(34.6880334,135.5630922),
// 久宝寺
            new google.maps.LatLng(34.6224548,135.5842199),
// 王寺
            new google.maps.LatLng(34.5977198,135.7025349),
// 奈良
            new google.maps.LatLng(34.6809044,135.8189335),
// 高田
            new google.maps.LatLng(34.5163234,135.7447341),
// 和歌山
            new google.maps.LatLng(34.2319356,135.1911771),
// 日根野
            new google.maps.LatLng(34.3901649,135.3306787),
// 鳳
            new google.maps.LatLng(34.5319888,135.4588616),
// 天王寺
            new google.maps.LatLng(34.6473099,135.5138727),
// 今宮
            new google.maps.LatLng(34.6541072,135.4927889),
// 西九条
            new google.maps.LatLng(34.68215,135.4661438),
// 大阪
            new google.maps.LatLng(34.7024849,135.4959506),
// 新大阪
            new google.maps.LatLng(34.7331669,135.5002139),
// 鴫野
            new google.maps.LatLng(34.6927724,135.545139),
// 京橋
            new google.maps.LatLng(34.6965674,135.5341349),
// 尼崎
            new google.maps.LatLng(34.7318259,135.4316693),
// 谷川
            new google.maps.LatLng(35.0823226,135.0501144),
// 加古川
            new google.maps.LatLng(34.7676372,134.8393645),
// 姫路
            new google.maps.LatLng(34.8266323,134.6898735),
// 相生
            new google.maps.LatLng(34.8179561,134.4741181),
// 東岡山
            new google.maps.LatLng(34.6856481,133.9881796),
// 岡山
            new google.maps.LatLng(34.6664023,133.9186461),
// 倉敷
            new google.maps.LatLng(34.6020202,133.7657547),
// 福山
            new google.maps.LatLng(34.4892415,133.3614224),
// 三原
            new google.maps.LatLng(34.4005593,133.0831419),
// 海田市
            new google.maps.LatLng(34.3720353,132.530533),
// 横川
            new google.maps.LatLng(34.4099757,132.4505616),
// 新山口
            new google.maps.LatLng(34.0937855,131.3963492),
// 宇部
            new google.maps.LatLng(34.0030269,131.2217245),
// 居能
            new google.maps.LatLng(33.9665412,131.2280182),
// 雀田
            new google.maps.LatLng(33.9606253,131.1868828),
// 小野田
            new google.maps.LatLng(34.0078127,131.1855495),
// 下関
            new google.maps.LatLng(33.9505769,130.9221012),
        ],
        strokeColor: "rgb(0 ,51,204)", //線色(def:#000000)
        strokeOpacity: 0.5, //透明度0～1(def:1)
        strokeWeight: 5, //px指定（def:1)
        zIndex: 1 //重なり順
        }
    );
// 駅のマーカー設定
    var markers = [
// 直江津
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "直江津",
            label_text: "0",
            color: "blue"
        },
// 柏崎
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "柏崎",
            label_text: "1",
            color: "blue"
        },
// 吉田
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "吉田",
            label_text: "2",
            color: "blue"
        },
// 新潟
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "新潟",
            label_text: "3",
            color: "blue"
        },
// 新発田
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "新発田",
            label_text: "4",
            color: "blue"
        },
// 新津
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "新津",
            label_text: "5",
            color: "blue"
        },
// 東三条
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "東三条",
            label_text: "6",
            color: "blue"
        },
// 宮内
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "宮内",
            label_text: "7",
            color: "blue"
        },
// 渋川
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "渋川",
            label_text: "8",
            color: "blue"
        },
// 新前橋
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "新前橋",
            label_text: "9",
            color: "blue"
        },
// 小山
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "小山",
            label_text: "10",
            color: "blue"
        },
// 大宮
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "大宮",
            label_text: "11",
            color: "blue"
        },
// 拝島
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "拝島",
            label_text: "12",
            color: "blue"
        },
// 立川
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "立川",
            label_text: "13",
            color: "blue"
        },
// 府中本町
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "府中本町",
            label_text: "14",
            color: "blue"
        },
// 西国分寺
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "西国分寺",
            label_text: "15",
            color: "blue"
        },
// 新宿
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "新宿",
            label_text: "16",
            color: "blue"
        },
// 池袋
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "池袋",
            label_text: "17",
            color: "blue"
        },
// 田端
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "田端",
            label_text: "18",
            color: "blue"
        },
// 赤羽
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "赤羽",
            label_text: "19",
            color: "blue"
        },
// 武蔵浦和
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: "武蔵浦和",
            label_text: "20",
            color: "blue"
        },
// 南浦和
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "南浦和",
            label_text: "21",
            color: "blue"
        },
// 新松戸
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "新松戸",
            label_text: "22",
            color: "blue"
        },
// 日暮里
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "日暮里",
            label_text: "23",
            color: "blue"
        },
// 秋葉原
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "秋葉原",
            label_text: "24",
            color: "blue"
        },
// 錦糸町
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "錦糸町",
            label_text: "25",
            color: "blue"
        },
// 西船橋
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "西船橋",
            label_text: "26",
            color: "blue"
        },
// 千葉
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "千葉",
            label_text: "27",
            color: "blue"
        },
// 佐倉
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "佐倉",
            label_text: "28",
            color: "blue"
        },
// 成田
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "成田",
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
// 松岸
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "松岸",
            label_text: "31",
            color: "blue"
        },
// 成東
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "成東",
            label_text: "32",
            color: "blue"
        },
// 大網
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "大網",
            label_text: "33",
            color: "blue"
        },
// 蘇我
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "蘇我",
            label_text: "34",
            color: "blue"
        },
// 南船橋
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "南船橋",
            label_text: "35",
            color: "blue"
        },
// 市川塩浜
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "市川塩浜",
            label_text: "36",
            color: "blue"
        },
// 東京
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "東京",
            label_text: "37",
            color: "blue"
        },
// 神田
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "神田",
            label_text: "38",
            color: "blue"
        },
// 御茶ノ水
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "御茶ノ水",
            label_text: "39",
            color: "blue"
        },
// 代々木
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "代々木",
            label_text: "40",
            color: "blue"
        },
// 品川
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "品川",
            label_text: "41",
            color: "blue"
        },
// 川崎
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "川崎",
            label_text: "42",
            color: "blue"
        },
// 尻手
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "尻手",
            label_text: "43",
            color: "blue"
        },
// 武蔵小杉
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: "武蔵小杉",
            label_text: "44",
            color: "blue"
        },
// 鶴見
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "鶴見",
            label_text: "45",
            color: "blue"
        },
// 東神奈川
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "東神奈川",
            label_text: "46",
            color: "blue"
        },
// 横浜
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "横浜",
            label_text: "47",
            color: "blue"
        },
// 大船
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "大船",
            label_text: "48",
            color: "blue"
        },
// 茅ヶ崎
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "茅ヶ崎",
            label_text: "49",
            color: "blue"
        },
// 橋本
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "橋本",
            label_text: "50",
            color: "blue"
        },
// 八王子
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "八王子",
            label_text: "51",
            color: "blue"
        },
// 甲府
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "甲府",
            label_text: "52",
            color: "blue"
        },
// 富士
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "富士",
            label_text: "53",
            color: "blue"
        },
// 豊橋
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "豊橋",
            label_text: "54",
            color: "blue"
        },
// 辰野
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "辰野",
            label_text: "55",
            color: "blue"
        },
// 岡谷
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "岡谷",
            label_text: "56",
            color: "blue"
        },
// 塩尻
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "塩尻",
            label_text: "57",
            color: "blue"
        },
// 金山
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "金山",
            label_text: "58",
            color: "blue"
        },
// 名古屋
        {
            position : { lat: 35.1709142, lng: 136.8816447 },
            title: "名古屋",
            label_text: "59",
            color: "blue"
        },
// 大垣
        {
            position : { lat: 35.3669998, lng: 136.6175494 },
            title: "大垣",
            label_text: "60",
            color: "blue"
        },
// 米原
        {
            position : { lat: 35.3145999, lng: 136.2905717 },
            title: "米原",
            label_text: "61",
            color: "blue"
        },
// 草津
        {
            position : { lat: 35.0228832, lng: 135.9622036 },
            title: "草津",
            label_text: "62",
            color: "blue"
        },
// 山科
        {
            position : { lat: 34.992343, lng: 135.8173204 },
            title: "山科",
            label_text: "63",
            color: "blue"
        },
// 近江塩津
        {
            position : { lat: 35.5383377, lng: 136.1514616 },
            title: "近江塩津",
            label_text: "64",
            color: "blue"
        },
// 綾部
        {
            position : { lat: 35.3021433, lng: 135.2518621 },
            title: "綾部",
            label_text: "65",
            color: "blue"
        },
// 京都
        {
            position : { lat: 34.9858294, lng: 135.7589033 },
            title: "京都",
            label_text: "66",
            color: "blue"
        },
// 木津
        {
            position : { lat: 34.7359383, lng: 135.8248179 },
            title: "木津",
            label_text: "67",
            color: "blue"
        },
// 放出
        {
            position : { lat: 34.6880334, lng: 135.5630922 },
            title: "放出",
            label_text: "68",
            color: "blue"
        },
// 久宝寺
        {
            position : { lat: 34.6224548, lng: 135.5842199 },
            title: "久宝寺",
            label_text: "69",
            color: "blue"
        },
// 王寺
        {
            position : { lat: 34.5977198, lng: 135.7025349 },
            title: "王寺",
            label_text: "70",
            color: "blue"
        },
// 奈良
        {
            position : { lat: 34.6809044, lng: 135.8189335 },
            title: "奈良",
            label_text: "71",
            color: "blue"
        },
// 高田
        {
            position : { lat: 34.5163234, lng: 135.7447341 },
            title: "高田",
            label_text: "72",
            color: "blue"
        },
// 和歌山
        {
            position : { lat: 34.2319356, lng: 135.1911771 },
            title: "和歌山",
            label_text: "73",
            color: "blue"
        },
// 日根野
        {
            position : { lat: 34.3901649, lng: 135.3306787 },
            title: "日根野",
            label_text: "74",
            color: "blue"
        },
// 鳳
        {
            position : { lat: 34.5319888, lng: 135.4588616 },
            title: "鳳",
            label_text: "75",
            color: "blue"
        },
// 天王寺
        {
            position : { lat: 34.6473099, lng: 135.5138727 },
            title: "天王寺",
            label_text: "76",
            color: "blue"
        },
// 今宮
        {
            position : { lat: 34.6541072, lng: 135.4927889 },
            title: "今宮",
            label_text: "77",
            color: "blue"
        },
// 西九条
        {
            position : { lat: 34.68215, lng: 135.4661438 },
            title: "西九条",
            label_text: "78",
            color: "blue"
        },
// 大阪
        {
            position : { lat: 34.7024849, lng: 135.4959506 },
            title: "大阪",
            label_text: "79",
            color: "blue"
        },
// 新大阪
        {
            position : { lat: 34.7331669, lng: 135.5002139 },
            title: "新大阪",
            label_text: "80",
            color: "blue"
        },
// 鴫野
        {
            position : { lat: 34.6927724, lng: 135.545139 },
            title: "鴫野",
            label_text: "81",
            color: "blue"
        },
// 京橋
        {
            position : { lat: 34.6965674, lng: 135.5341349 },
            title: "京橋",
            label_text: "82",
            color: "blue"
        },
// 尼崎
        {
            position : { lat: 34.7318259, lng: 135.4316693 },
            title: "尼崎",
            label_text: "83",
            color: "blue"
        },
// 谷川
        {
            position : { lat: 35.0823226, lng: 135.0501144 },
            title: "谷川",
            label_text: "84",
            color: "blue"
        },
// 加古川
        {
            position : { lat: 34.7676372, lng: 134.8393645 },
            title: "加古川",
            label_text: "85",
            color: "blue"
        },
// 姫路
        {
            position : { lat: 34.8266323, lng: 134.6898735 },
            title: "姫路",
            label_text: "86",
            color: "blue"
        },
// 相生
        {
            position : { lat: 34.8179561, lng: 134.4741181 },
            title: "相生",
            label_text: "87",
            color: "blue"
        },
// 東岡山
        {
            position : { lat: 34.6856481, lng: 133.9881796 },
            title: "東岡山",
            label_text: "88",
            color: "blue"
        },
// 岡山
        {
            position : { lat: 34.6664023, lng: 133.9186461 },
            title: "岡山",
            label_text: "89",
            color: "blue"
        },
// 倉敷
        {
            position : { lat: 34.6020202, lng: 133.7657547 },
            title: "倉敷",
            label_text: "90",
            color: "blue"
        },
// 福山
        {
            position : { lat: 34.4892415, lng: 133.3614224 },
            title: "福山",
            label_text: "91",
            color: "blue"
        },
// 三原
        {
            position : { lat: 34.4005593, lng: 133.0831419 },
            title: "三原",
            label_text: "92",
            color: "blue"
        },
// 海田市
        {
            position : { lat: 34.3720353, lng: 132.530533 },
            title: "海田市",
            label_text: "93",
            color: "blue"
        },
// 横川
        {
            position : { lat: 34.4099757, lng: 132.4505616 },
            title: "横川",
            label_text: "94",
            color: "blue"
        },
// 新山口
        {
            position : { lat: 34.0937855, lng: 131.3963492 },
            title: "新山口",
            label_text: "95",
            color: "blue"
        },
// 宇部
        {
            position : { lat: 34.0030269, lng: 131.2217245 },
            title: "宇部",
            label_text: "96",
            color: "blue"
        },
// 居能
        {
            position : { lat: 33.9665412, lng: 131.2280182 },
            title: "居能",
            label_text: "97",
            color: "blue"
        },
// 雀田
        {
            position : { lat: 33.9606253, lng: 131.1868828 },
            title: "雀田",
            label_text: "98",
            color: "blue"
        },
// 小野田
        {
            position : { lat: 34.0078127, lng: 131.1855495 },
            title: "小野田",
            label_text: "99",
            color: "blue"
        },
// 下関
        {
            position : { lat: 33.9505769, lng: 130.9221012 },
            title: "下関",
            label_text: "100",
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
