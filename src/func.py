# タイマーを定義したクラス
import time


class Timer:
    def __init__(self):
        self.start = time.time()

    def time_elapsed(self):
        return time.time() - self.start

    def reset(self):
        self.start = time.time()


# 最長路を計算する関数
def get_critical_path(graph_set, stations, weights, line_names, start, goal, critical_flag=False):
    goal_stations = []
    critical_path_lengths = []
    # critical_flag=Trueの時のみpathを記憶しておく
    critical_path_list = []

    for sta_num, sta_name in stations.items():
        if sta_num % 1000 == goal:
            goal_stations.append(sta_num)

    print(goal_stations)
    for goal_sta in goal_stations:
        current = start
        paths = graph_set.paths(current, goal_sta)

        next_stations = []

        for w in weights:
            if goal_sta in w:
                if w[0] == goal_sta:
                    next_stations.append(w[1])
                else:
                    next_stations.append(w[0])

        if len(next_stations) == 1:
            paths -= paths.including((next_stations[0], goal_sta%1000)).including((goal_sta, next_stations[0]))

        print(len(paths), current, goal_sta)

        if len(paths) == 0:
            continue
        max_path = next(paths.max_iter(weights))
        critical_path_length = 0

        for line in max_path:
            critical_path_length += weights[line]

        # 10倍していた営業キロを計算後に1/10にして記憶
        critical_path_lengths.append(critical_path_length/10)

        # pathを記憶しておく
        critical_path = [current]
        print(stations[current])
        result_path = './map/result.txt'

        with open(result_path, mode='w') as out:
            if critical_flag:
                out.write(stations[current])
            while True:
                if current == goal_sta:
                    break
                for i, line in enumerate(max_path):
                    if line[0] == current:
                        if critical_flag:
                            out.write(line_names[line])
                        current = line[1]
                        print(stations[current], i)
                        if critical_flag:
                            out.write(stations[current])
                        critical_path.append(current)
                        del max_path[i]
                        break
                    elif line[1] == current:
                        if critical_flag:
                            out.write(line_names[line])
                        current = line[0]
                        print(stations[current])
                        if critical_flag:
                            out.write(stations[current])
                        critical_path.append(current)
                        del max_path[i]
                        break

        critical_path_list.append(critical_path)

    # critical_flag=Trueの時はcritical_path_listを駅番号listで返す
    if critical_flag:
        max_path_length = max(critical_path_lengths)
        print(max_path_length)
        return critical_path_list[critical_path_lengths.index(max_path_length)]
    # 通常時は最長路の距離のリストを返す
    else:
        return critical_path_lengths
