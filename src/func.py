def get_critical_path(graph_set, stations, weights, start, goal):
    goal_stations = []
    critical_path_lengths = []
    for sta_num, sta_name in stations.items():
        if sta_num % 1000 == goal:
            print(sta_name,sta_num)
            goal_stations.append(sta_num)

    for goal_sta in goal_stations:
        current = start
        paths = graph_set.paths(current, goal_sta)

        # TODO: pathsのうち,最後の二枝が同じ駅の組(下位3桁が同じ)であるpathは不正なので除去する

        next_stations = []

        for w in weights:
            if goal_sta in w:
                print(True)
                if w[0] == goal_sta:
                    next_stations.append(w[1])
                else:
                    next_stations.append(w[0])

        print(next_stations)

        if len(next_stations) == 1:
            print(len(paths))
            paths -= paths.including((next_stations[0], goal_sta%1000)).including((goal_sta, next_stations[0]))

        print(len(paths))

        if len(paths) == 0:
            continue
        max_path = next(paths.max_iter(weights))
        critical_path_length = 0

        for line in max_path:
            critical_path_length += weights[line]

        # 10倍していた営業キロを計算後に1/10にして記憶
        critical_path_lengths.append(critical_path_length/10)

        print(stations[current])
        while True:
            if current == goal_sta:
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

    return critical_path_lengths
