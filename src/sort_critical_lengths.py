import pandas as pd

critical_lengths_list = './map/critical_lengths(type-B).csv'
critical_lengths = pd.read_csv(critical_lengths_list)

critical_lengths_sorted = critical_lengths.sort_values('最長経路距離', ascending=False)