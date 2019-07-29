from graphillion import GraphSet as gs
import pandas as pd
from src.func import get_critical_path

line_list = pd.read_csv('./route_data/route.csv', sep=',')
station_list = pd.read_csv('./route_data/st.csv', sep=',')
stations = {}
univ = []
weights = {}

# read station information
for i, sta in station_list.iterrows():

    stations[sta['駅番号']] = sta['駅名']

# read route data
# 誤差による計算ミスをなくすため、営業キロを10倍して考える
for i, line in line_list.iterrows():
    route_num = int(line['路線番号'])
    start_sta = int(line['始発駅'])
    goal_sta = int(line['終点駅'])
    length = int(line['営業キロ'] * 10)
    edge = (start_sta, goal_sta)
    univ.append(edge)
    weights[edge] = length

    dead_end_edge1 = (start_sta, route_num*1000+goal_sta)
    dead_end_edge2 = (route_num*1000+start_sta, goal_sta)
    univ.append(dead_end_edge1)
    univ.append(dead_end_edge2)
    weights[dead_end_edge1] = length
    weights[dead_end_edge2] = length
    stations[route_num*1000+goal_sta] = stations[goal_sta] + '(終)'
    stations[route_num*1000+start_sta] = stations[start_sta] + '(終)'

gs.set_universe(univ)
print(stations)
print(weights)

# 0,6の字ルートを探索したい場合は上位3桁がgoalの駅全てをgoalにして探索する必要がある
current = 1
goal = 93

result = get_critical_path(gs, stations, weights, current, goal)

print(result)