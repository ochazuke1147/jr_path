var map;
var marker;
var center = {
    lat: 34.701889, // 緯度
    lng: 135.494972 // 経度
};
function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // 地図の中心を指定
        zoom: 5 // 地図のズームを指定
    });

 marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });
 // カスタムマーカーのリスト
    var markers = [
        {
            position : { lat: 43.078397, lng: 141.34009 },
            title : "北海道大学",
            label_text : "U",
            color: "green"
        },
        {
            position: { lat: 43.064327, lng: 141.346868 },
            title: "北海道庁",
            label_text: "C",
            color: "blue"
        },
        {
            position: { lat: 43.084202, lng: 141.346259 },
            title: "好きな居酒屋",
            label_text: "D",
            color: "orange"
        },
        {
            position: { lat: 43.061223, lng: 141.356342 },
            title: "札幌テレビ塔",
            label_text: "T",
            color: "red"
        },

        {position : { lat: 38.2202371, lng: 139.4636089 }, title: "村上", label_text: "0", color: "blue"},
        {position : { lat: 37.9440569, lng: 139.3350935 }, title: "新発田", label_text: "1", color: "blue"},
        {position : { lat: 37.91209, lng: 139.0617442 }, title: "新潟", label_text: "2", color: "blue"},
    ];

    // 複数のマーカーを配置
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color,                //塗り潰し色
                fillOpacity: 0.8,                    //塗り潰し透過率
                path: google.maps.SymbolPath.CIRCLE, //円を指定
                scale: 16,                           //円のサイズ
                strokeColor: m.color,              //枠の色
                strokeWeight: 1.0                    //枠の透過率
            },
            title: m.title,
            label: {
                text: m.label_text,                           //ラベル文字
                color: '#FFFFFF',                    //文字の色
                fontSize: '20px'                     //文字のサイズ
            }
        });
    }
}
