require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
    nickname: String,
    email: { type: String, unique: true },
    password: String
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.error(err));

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { nickname, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: '이미 존재하는 회원정보입니다.' });
        }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
        const newUser = new User({ nickname, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Login endpoint
app.post('/confirm', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const { nickname, email} = user.toObject(); 
            res.status(200).json({ nickname, email});
        } else {
            res.status(401).json({ error: '회원 정보를 찾을 수 없습니다.' }); 
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running`);
});
