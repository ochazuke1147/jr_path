import time
from memory_profiler import profile


# タイマーを定義したクラス
class Timer:
    def __init__(self):
        self.start = time.time()

    def time_elapsed(self):
        return time.time() - self.start

    def reset(self):
        self.start = time.time()


# TODO: typeBの最長経路がtypeLよりも低いことを確かめる
# TODO: 終端駅と分岐駅を区別できるようにする(typeLでは終端駅発着,typePでは分岐駅着として良いため)
# 最長路を計算する関数
def get_critical_path(graph_set, stations, weights, line_names, start, goal, path_type, critical_flag=False):
    start_stations = []
    goal_stations = []
    critical_path_lengths = []
    # critical_flag=Trueの時のみpathを記憶しておく
    critical_path_list = []

    for sta_num, sta_name in stations.items():
        # Pnタイプの経路の上界を求めるために使用
        if path_type == 'B' and sta_num > 1000 and sta_num % 1000 == start:
            start_stations.append(sta_num)
        if sta_num % 1000 == goal:
            goal_stations.append(sta_num)
    if path_type != 'B':
        start_stations.append(start)

    print(start_stations)

    for start_sta in start_stations:
        for goal_sta in goal_stations:
            current = start_sta
            paths = graph_set.paths(current, goal_sta)

            next_stations = []

            for w in weights:
                if goal_sta in w:
                    if w[0] == goal_sta:
                        next_stations.append(w[1])
                    else:
                        next_stations.append(w[0])

            if len(next_stations) == 1:
                paths -= paths.including((next_stations[0], goal_sta % 1000)).including((goal_sta, next_stations[0]))

            # print(len(paths), current, goal_sta)

            if len(paths) == 0:
                continue
            max_path = next(paths.max_iter(weights))

            del paths

            critical_path_length = 0

            for line in max_path:
                critical_path_length += weights[line]

            # 10倍していた営業キロを計算後に1/10にして記憶
            critical_path_lengths.append(critical_path_length / 10)

            # pathを記憶しておく
            critical_path = [current]
            # print(stations[current])
            result_path = './map/result.txt'

            if critical_flag:
                with open(result_path, mode='a', encoding='utf-8') as out:
                    out.write('\n' + stations[current])
                    while True:
                        if current == goal_sta:
                            break
                        for i, line in enumerate(max_path):
                            if line[0] == current:
                                out.write('[' + line_names[line] + ']')
                                current = line[1]
                                # print(stations[current])
                                out.write(stations[current])
                                critical_path.append(current)
                                del max_path[i]
                                break
                            elif line[1] == current:
                                out.write('[' + line_names[line] + ']')
                                current = line[0]
                                # print(stations[current])
                                out.write(stations[current])
                                critical_path.append(current)
                                del max_path[i]
                                break
            else:
                while True:
                    if current == goal_sta:
                        break
                    for i, line in enumerate(max_path):
                        if line[0] == current:
                            current = line[1]
                            # print(stations[current])
                            del max_path[i]
                            break
                        elif line[1] == current:
                            current = line[0]
                            # print(stations[current])
                            del max_path[i]
                            break

            if critical_flag:
                critical_path_list.append(critical_path)


    # critical_flag=Trueの時はcritical_path_listを駅番号listで返す
    if critical_flag:
        max_path_length = max(critical_path_lengths)
        print(max_path_length)
        return critical_path_list[critical_path_lengths.index(max_path_length)]
    # 通常時は最長路の距離のリストを返す
    else:
        return critical_path_lengths
