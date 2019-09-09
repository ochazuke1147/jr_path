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
// 宮内
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "宮内",
            label_text: "2",
            color: "blue"
        },
// 東三条
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "東三条",
            label_text: "3",
            color: "blue"
        },
// 新津
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "新津",
            label_text: "4",
            color: "blue"
        },
// 新発田
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "新発田",
            label_text: "5",
            color: "blue"
        },
// 新潟
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "新潟",
            label_text: "6",
            color: "blue"
        },
// 吉田
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "吉田",
            label_text: "7",
            color: "blue"
        },
// 柏崎
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "柏崎",
            label_text: "8",
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
