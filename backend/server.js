require('dotenv').config();
const { Octokit, App } = require("octokit");
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const requests = require('requests');
const bodyParser = require('body-parser');

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


/*
app.post('/summary', async (req, res) => {
    const client_id = process.env.CLIENT_ID
    const client_secret = process.env.CLIENT_SECRET
    const url = "https://naveropenapi.apigw.ntruss.com/text-summary/v1/summarize"

    try {
        const { githubAddress } = req.body;

        if (!githubAddress) {
            return res.status(200).json({ info: '사용자가 직접 작성하였습니다' }); 
        } 

        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        })

        const urlParts = githubAddress.split('/');
        const owner = urlParts[3]; 
        const repo = urlParts[4]; 
        
        const context = await octokit.request('GET /repos/{owner}/{repo}/readme', {
            owner: owner,
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        
        const githubContent_base64 = context.data.content
        let githubContent = Buffer.from(githubContent_base64, 'base64').toString();
        githubContent = githubContent.replace(/!\[.*\]\(.*\)/g, '');  // 이미지 링크 제거
        githubContent = githubContent.replace(/<img[^>]*>/g, '');  // 이미지 링크 제거
        githubContent = githubContent.replace(/\s+/g, '');  // 공백 제거
        console.log(githubContent.length);
        console.log(typeof(githubContent));

        try{
            const clovaResponse = await axios.post(
                url,
                {
                  document: {
                    content: githubContent,
                  },
                  option: {
                    language: "ko",
                    model: "general",
                  },
                },
                {
                  headers: {
                    "X-NCP-APIGW-API-KEY-ID": client_id,
                    "X-NCP-APIGW-API-KEY": client_secret,
                    "content-type": "application/json",
                  },
                }
              );

            res.status(200).json({ info: clovaResponse.data });

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Clova API error', details: error.message });
        }       

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});
*/

app.post("/savecover", async(req, res) => {
    try {
        const { signal, name, subtitle, description, selectedFile, userID } = req.body;
        console.log("We are inside nodejs savecover function");

        const updatedUser = await User.findOneAndUpdate(
            { email: userID }, 
            { 
                $set: {
                    signal: signal, 
                    name: name, 
                    subtitle: subtitle, 
                    description: description
                }
            },
            { new: true } 
        );

        // 업데이트 성공 응답
        res.json({ status: 'success' });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});


app.post("/saveabout", async(req, res) => {
    try {
        const { date, address, email, education, signal, userID } = req.body;
        console.log("We are inside nodejs savecover function")
        console.log(date)
        console.log(address)
        console.log(email)
        console.log(education)
        console.log(signal)

        // const imagePath = base64Img.imgSync(selectedFile, './uploads', 'image');

        const updatedUser = await User.findOneAndUpdate(
            { email: userID }, 
            { 
                $set: {
                    data: data, 
                    address: address, 
                    email: email, 
                    education: education,
                    signal: signal
                }
            },
            { new: true } 
        );

        res.json({ status: 'success'});

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
})

app.post("/saveskills", async(req, res) => {
    try {
        const { frontend, backend, versionControl, deployment, others, userID } = req.body;
        console.log("We are inside nodejs savecover function")
        console.log(date)
        console.log(address)
        console.log(email)
        console.log(education)
        
        // const imagePath = base64Img.imgSync(selectedFile, './uploads', 'image');

        const updatedUser = await User.findOneAndUpdate(
            { email: userID }, 
            { 
                $set: {
                    frontend: frontend,
                    backend: backend,
                    versionControl: versionControl,
                    deployment: deployment,
                    others: others
                }
            },
            { new: true } 
        );

        res.json({ status: 'success'});

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
})

app.post("/result", async(req, res) => {
    try {
        const {userID} = req.body;
        // const imagePath = base64Img.imgSync(selectedFile, './uploads', 'image');

        const user = await User.findOne({ email: userID })
                               .select('-password -_id -createdAt -updatedAt -__v');

        if (user) {
            res.json({ status: 'success', userData: user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
})


// Server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running`);
});
