from graphillion import GraphSet as gs
import pandas as pd
from src.func import get_critical_path, Timer
from src.make_map import make_map


line_list = pd.read_csv('./route_data/route.csv', sep=',')
station_list = pd.read_csv('./route_data/st2.csv', sep=',')
stations = {}
univ = []
weights = {}
line_names = {}
path_list = './map/path_list.csv'
critical_lengths_list = './map/critical_lengths.csv'

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
    line_name = line['路線名']
    edge = (start_sta, goal_sta)
    univ.append(edge)
    weights[edge] = length
    line_names[edge] = line_name
    dead_end_edge1 = (start_sta, route_num * 1000 + goal_sta)
    dead_end_edge2 = (route_num * 1000 + start_sta, goal_sta)
    univ.append(dead_end_edge1)
    univ.append(dead_end_edge2)
    weights[dead_end_edge1] = length
    weights[dead_end_edge2] = length
    line_names[dead_end_edge1] = line_name
    line_names[dead_end_edge2] = line_name
    stations[route_num * 1000 + goal_sta] = stations[goal_sta] + '(終)'
    stations[route_num * 1000 + start_sta] = stations[start_sta] + '(終)'

gs.set_universe(univ)
print(stations)
print(weights)

# 0,6の字ルートを探索したい場合は上位3桁がgoalの駅全てをgoalにして探索する必要がある

critical_path_lengths = {}

min_sta_num = 1
max_sta_num = 11
path_type = 'L'

timer1 = Timer()
timer2 = Timer()

critical_lengths = []

with open(critical_lengths_list, mode='w', encoding='utf-8') as out:
    for current in range(min_sta_num, max_sta_num):
        if path_type == 'L' and station_list.loc[current - 1]['sta_type'] != 'T':
            print('skipped current: ', station_list.loc[current - 1]['駅名'])
            continue
        if not station_list.loc[current - 1]['use_search']:
            print('skipped current: ', station_list.loc[current - 1]['駅名'])
            continue
        for goal in range(min_sta_num, max_sta_num):
            if path_type == 'L' and station_list.loc[current - 1]['sta_type'] != 'T':
                print('skipped current: ', station_list.loc[current - 1]['駅名'])
                continue
            if not station_list.loc[goal - 1]['use_search']:
                print('skipped goal: ', station_list.loc[goal - 1]['駅名'])
                continue
            result = get_critical_path(gs, stations, weights, line_names, current, goal, path_type)

            if len(result) == 0:
                continue
            critical_lengths.append((current, goal, max(result)))
            critical_path_lengths.setdefault((current, goal), max(result))
            print(current, 'to', goal, ':', timer2.time_elapsed())
            timer2.reset()

        print('elapsed time:', round(timer1.time_elapsed() / 60), '[minutes]')

df = pd.DataFrame(critical_lengths, columns=['始発駅', '終着駅', '最長経路距離'])

df.to_csv(critical_lengths_list, index=False)

whole_time = timer1.time_elapsed()
print('whole_time:', whole_time)

print(critical_path_lengths)

sorted_critical_path_lengths = sorted(critical_path_lengths.items(), key=lambda x: -x[1])

print(sorted_critical_path_lengths)

critical_path_start_sta, critical_path_goal_sta = sorted_critical_path_lengths[0][0]

critical_path = get_critical_path(gs, stations, weights, line_names, critical_path_start_sta,
                                  critical_path_goal_sta, path_type, critical_flag=True)

print(critical_path)

#station_list.set_index('駅番号')
critical_path_stations = []

for critical_path_sta in critical_path:
    sta_data = station_list.loc[(critical_path_sta-1) % 1000]
    if not sta_data['use_search']:
        continue
    critical_path_stations.append((sta_data['駅番号'], sta_data['駅名'], round(sta_data['東経'], 7), round(sta_data['北緯'], 7)))
    print(sta_data)

df = pd.DataFrame(critical_path_stations, columns=['駅番号', '駅名', '東経', '北緯'])

df.to_csv(path_list, index=False)

# TODO: 経路特定区間に対応させる


make_map()
