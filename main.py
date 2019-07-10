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
station_list = pd.read_csv('./route_data/st.csv', sep=',')
stations = {}
univ = []
weights = {}

# read station information
for i, sta in station_list.iterrows():

    stations[sta['駅名']] = sta['駅番号']

# read route data
for i, line in line_list.iterrows():
    edge = (int(line['始発駅']), int(line['終点駅']))
    univ.append(edge)
    weights[edge] = line['営業キロ']
    if i == 70:
        break

gs.set_universe(univ)
print(weights)

current = 1
goal = 41

paths = gs.paths(current, goal)

max_path = next(paths.max_iter(weights))

for line in max_path:
    print(line)

print(current)
while True:
    if current == goal:
        break
    for i, line in enumerate(max_path):
        if line[0] == current:
            current = line[1]
            print(current)
            del max_path[i]
            break
        elif line[1] == current:
            current = line[0]
            print(current)
            del max_path[i]
            break
