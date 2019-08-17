import pandas as pd

stations = pd.read_csv('route_data/st.csv', sep=',', dtype='object')

stations['use_search'] = True

stations.to_csv('route_data/s.csv', index=False)
