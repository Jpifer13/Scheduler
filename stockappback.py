import os
import sys
import json

from flask import Flask
from schedule import *

# from alpha_vantage.timeseries import TimeSeries
# import matplotlib.pyplot as plt

apiKey = os.environ.get('ALPHAVANTAGE_API_KEY')
# Flask Requirement
app = Flask(__name__)


@app.route('/', methods=['GET'])
def test():
    printTimes()
    return 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)