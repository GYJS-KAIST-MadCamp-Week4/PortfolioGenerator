from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("CONNECTION STRING")
db = client['DB NAMEEEEEE']

@app.route('/')
def home():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True, port=5000)