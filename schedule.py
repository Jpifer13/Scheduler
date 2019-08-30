import sched
import time
import os

from alpha_vantage.timeseries import TimeSeries
import matplotlib.pyplot as plt

apiKey = os.environ.get('ALPHAVANTAGE_API_KEY')
scheduler = sched.scheduler(time.time, time.sleep)
initial = time.time()

def testSched():
    testAlpha()
    scheduler.enter(5, 1, testSched, ())  
    print("From print_time", (time.time()-initial))

def testAlpha():
    ts = TimeSeries(key='apiKey', output_format='json')
    data, meta_data = ts.get_intraday(symbol='MSFT',interval='1min', outputsize='compact')
    # data['close'].plot()
    # plt.title('Intraday Times Series for the MSFT stock (1 min)')
    # plt.show()
    print(data["2019-08-27 12:12:00"])

def printTimes():
    print(initial)
    scheduler.enter(1, 1, testSched, ())
    scheduler.run()

printTimes()