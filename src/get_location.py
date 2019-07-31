# モジュールのインポート
import pandas as pd
import urllib
import urllib.error
import urllib.request

# Google API モジュール
from pygeocoder import Geocoder
import googlemaps

# パラメータの設定
google_api_key = 'AIzaSyA0CPFxh5gFoEn4-zIMeeRZ7YKwg7swigI'
output_path = './map/'
pixel = '640x480'
scale = '18'

# set location
location = ['国会議事堂']

# geocodeで取得できる情報の一覧の例（国会議事堂の場合）
gmaps = googlemaps.Client(key=google_api_key)
address = u'国会議事堂'
result = gmaps.geocode(address)

print(result)


def geocode_address(loc):
    # リストの初期化
    loc_dict = []

    # locationを変数にセット
    rows = loc

    # geocodeにより緯度・経度の情報をループ処理で取得
    for row in rows[0:]:
        google_api_key = 'AIzaSyA0CPFxh5gFoEn4-zIMeeRZ7YKwg7swigI'
        gmaps = googlemaps.Client(key=google_api_key)
        geocode_result = gmaps.geocode(row)

        # loc
        loc = row
        # lat
        lat = geocode_result[0]["geometry"]["location"]["lat"]
        # lng
        lng = geocode_result[0]["geometry"]["location"]["lng"]

        # results
        loc_dict.append({'loc': loc, 'lat': lat, 'lng': lng})

    # リスト型のloc_dictをデータフレームに変換
    df = pd.DataFrame(data=loc_dict)

    # 重複の削除
    df = df.drop_duplicates('loc')

    # データの出力
    df.to_csv(output_path + 'loc.csv')


# defによる関数オブジェクトの作成
# 画像をダウンロードする
def download_image(loc):

    # データフレームから行列に変換
    lats = loc['lat'].values.tolist()
    lngs = loc['lng'].values.tolist()
    locs = loc['loc'].values.tolist()

    # htmlの設定
    html1 = 'https://maps.googleapis.com/maps/api/staticmap?center='

    # maptypeで取得する地図の種類を設定
    html2 = '&maptype=roadmap'

    # sizeでピクセル数を設定
    html3 = '&size='

    # sensorはGPSの情報を使用する場合にtrueとするので今回はfalseで設定
    html4 = '&sensor=false'

    # zoomで地図の縮尺を設定
    html5 = '&zoom='

    # マーカーの位置の設定（マーカーを表示させてくなければ無でも大丈夫）
    html6 = '&markers='

    # key="googleから取得したキーコード"となるように設定
    html7 = '&key='

    # 緯度経度の情報に該当する航空写真をループ処理で取得
    for lat, lng, loc in zip(lats, lngs, locs):

        # 緯度経度の情報をセット
        axis = str(lat) + "," + str(lng)

        google_api_key = 'AIzaSyA0CPFxh5gFoEn4-zIMeeRZ7YKwg7swigI'
        # url
        url = html1 + axis + html2 + html3 + pixel + html4 + html5 + scale + html6 + axis + html7 + google_api_key

        # pngファイルのパスを作成
        dst_path = output_path + str(loc) + ".png"

        # 画像を取得しローカルに書き込み
        try:
            data = urllib.request.urlopen(url).read()
            with open(dst_path, mode="wb") as f:
                f.write(data)

        except urllib.error.URLError as e:
            print(e)


geocode_address(location)
loc = pd.read_csv(output_path + 'loc.csv', index_col='Unnamed: 0')
download_image(loc)