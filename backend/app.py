from flask import Flask, jsonify, request
from flask_cors import CORS 
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash


class DB:
    def __init__(self):
        self.client = MongoClient("mongodb+srv://libra001008:S9G7TwCghM9rgi9z@cluster0.pchoafe.mongodb.net/")
        self.db = self.client['profile']
        self.user_collection = self.db['user']

    def find_user(self, email):
        return self.user_collection.find_one({'email': email})

    def add_user(self, user_data):
        return self.user_collection.insert_one(user_data).inserted_id

    def authenticate_user(self, email, password):
        user = self.find_user(email)
        if user and check_password_hash(user['password'], password):
            user.pop('password', None)
            return user
        return None

db = DB()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/signup', methods=['POST'])
def signup():
    user_data = request.json
    app.logger.debug(f"Received signup data: {user_data}")
    nickname = user_data.get('nickname')
    email = user_data.get('email')
    password = generate_password_hash(user_data.get('password'))

    if db.find_user(email):
        return jsonify({'error': 'User already exists'}), 409

    db.add_user({'nickname': nickname, 'email': email, 'password': password})
    return jsonify({'message': 'User created successfully'}), 201


@app.route('/confirm', methods=['POST'])
def login():
    user_data = request.json
    email = user_data.get('email')
    password = user_data.get('password')

    user = db.authenticate_user(email, password)

    if user:
        user.pop('_id', None)
        user['password'] = password 
        return jsonify(user), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True, port=5000)