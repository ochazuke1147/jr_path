import pandas as pd
import textwrap


# 最長経路マップをjavascriptで出力する関数
def make_map():
    path_list = pd.read_csv('./map/path_list.csv', sep=',')
    script_path = './map/map_script.js'

    script_code0 = textwrap.dedent('''\
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
    ''')

    script_code1 = textwrap.dedent('''\
            ],
            strokeColor: "rgb(0 ,51,204)", //線色(def:#000000)
            strokeOpacity: 0.5, //透明度0～1(def:1)
            strokeWeight: 5, //px指定（def:1)
            zIndex: 1 //重なり順
            }
        );
    // 駅のマーカー設定
        var markers = [
    '''
                                   )

    script_code2 = textwrap.dedent('''\
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
    ''')

    with open(script_path, mode='w') as out:
        out.write(script_code0)

        # write path information
        for i, sta in path_list.iterrows():
            path_line = textwrap.dedent('''\
            // {2}
                        new google.maps.LatLng({0},{1}),
            '''.format(round(sta['北緯'], 7), round(sta['東経'], 7), sta['駅名'], i))

            out.write(path_line)

        out.write(script_code1)

        # write station information
        for i, sta in path_list.iterrows():
            station_marker = textwrap.dedent('''\
            // {2}
                    {{
                        position : {{ lat: {0}, lng: {1} }},
                        title: "{2}",
                        label_text: "{3}",
                        color: "blue"
                    }},
            '''.format(round(sta['北緯'], 7), round(sta['東経'], 7), sta['駅名'], i))

            out.write(station_marker)

        out.write(script_code2)

    return 0

make_map()
