from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb+srv://libra001008:S9G7TwCghM9rgi9z@cluster0.pchoafe.mongodb.net/")
db = client['profile']
user_collection = db['user']

@app.route('/')
def home():
    return 'Hello, Flask!'

@app.route('/get_data')
def get_data():
    # Example: retrieve data from MongoDB
    data = db.user_collection.find()
    return jsonify({"data": list(data)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)