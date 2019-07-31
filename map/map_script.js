var map;
var marker;
var center = {
    lat: 35.170694, // 緯度
    lng: 136.881637 // 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // 地図の中心を指定
        zoom: 7 // 地図のズームを指定
    });
// 駅のマーカー設定
    var markers = [
// 村上
        {
            position : { lat: 38.2202371, lng: 139.4636089 },
            title: "村上",
            label_text: "0",
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
                scale: 16, //円のサイズ
                strokeColor: m.color, //枠の色
                strokeWeight: 1.0 //枠の透過率
            },
            title: m.title,
            label: {
                text: m.label_text, //ラベル文字
                color: '#FFFFFF', //文字の色
                fontSize: '20px' //文字のサイズ
            }
        });
    }
}
