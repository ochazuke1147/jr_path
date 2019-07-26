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

# TODO: 複線区間に対応するための距離0のエッジを追加する！！
# TODO: 同じ区間を引き返して2回通れないようにする
# TODO: 複線区間を平等に扱うために横浜などに中心駅を作ってそこから駅名(路線名)に繋げる！

import pandas as pd

line_list = pd.read_csv('./route_data/route.csv', sep=',')
station_list = pd.read_csv('./route_data/st.csv', sep=',')
stations = {}
univ = []
weights = {}

# read station information
for i, sta in station_list.iterrows():

    stations[sta['駅番号']] = sta['駅名']

# read route data
for i, line in line_list.iterrows():
    route_num = int(line['路線番号'])
    start_sta = int(line['始発駅'])
    goal_sta = int(line['終点駅'])
    length = line['営業キロ']
    edge = (start_sta, goal_sta)
    univ.append(edge)
    weights[edge] = length

    dead_end_edge1 = (start_sta, route_num*1000+goal_sta)
    dead_end_edge2 = (route_num*1000+start_sta, goal_sta)
    univ.append(dead_end_edge1)
    univ.append(dead_end_edge2)
    weights[dead_end_edge1] = length
    weights[dead_end_edge2] = length
    stations[route_num*1000+goal_sta] = stations[goal_sta]
    stations[route_num*1000+start_sta] = stations[start_sta]
    if i == 130:
        break

gs.set_universe(univ)
print(stations)

# 0,6の字ルートを探索したい場合は上位3桁がgoalの駅全てをgoalにして探索する必要がある
current = 1
goal = 94

paths = gs.paths(current, goal)

max_path = next(paths.max_iter(weights))

for line in max_path:
    print(line)

print(stations[current])
while True:
    if current == goal:
        break
    for i, line in enumerate(max_path):
        if line[0] == current:
            current = line[1]
            print(stations[current])
            del max_path[i]
            break
        elif line[1] == current:
            current = line[0]
            print(stations[current])
            del max_path[i]
            break
