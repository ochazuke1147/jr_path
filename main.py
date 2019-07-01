from graphillion import GraphSet as gs

universe = [('東京', '品川', 6.8),
            ('品川', '新宿', 10.6),
            ('新宿', '上野', 11.3),
            ('上野', '東京', 3.6),
            ('東京', '四ツ谷', 6.6),
            ('四ツ谷', '新宿', 3.7)]
gs.set_universe(universe)
paths = gs.paths('東京', '品川')
print(next(paths.max_iter()))

import pandas as pd

line_list = pd.read_csv('./route_data/route.csv', sep=',')
