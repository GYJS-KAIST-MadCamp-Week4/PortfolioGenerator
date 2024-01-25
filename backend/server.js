require('dotenv').config();
const { Octokit, App } = require("octokit");
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const requests = require('requests');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json({limit:'10mb'}));
app.use('/uploads', express.static('uploads'));
app.use(cors());

const userSchema = new mongoose.Schema({
    nickname: String,
    email: { type: String, unique: true },
    password: String,
    signal: Object,
    name: String,
    subtitle: String,
    description: String,
    education: String,
    date: String,
    address: String,
    emailAddress: String,
    frontend: Object,
    backend: Object,
    others: Object,
    github: String,
    introduction: String,
    coverimage: String,
    projects: Object,
    aboutfile: String,
    title: String,
    aboutcolor: Object,
    skillcolor: Object,
    projectcolor: Object
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
        console.log(email);
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
        const { signal, title, subtitle, description, coverimage, userID } = req.body;
        console.log("We are inside nodejs savecover function");
        console.log(signal);
        console.log(title);
        console.log(subtitle);
        console.log(description);
        console.log(userID);;
        console.log(coverimage);

        if (coverimage == null) {
            const updatedUser = await User.findOneAndUpdate(
                { email: userID }, 
                { 
                    $set: {
                        signal: signal, 
                        title: title, 
                        subtitle: subtitle, 
                        description: description,
                    }
                },
                { new: true } 
            );

        } else{
            const buffer = Buffer.from(coverimage, 'base64');
            const fileName = userID + '-' + Date.now() + '.png'; 
            const filePath = path.join(__dirname, 'uploads', fileName);
    
            fs.writeFileSync(filePath, buffer);

            const imageUrl = `http://192.249.29.120:4000/uploads/${fileName}`;
            console.log(imageUrl)

            const updatedUser = await User.findOneAndUpdate(
                { email: userID }, 
                { 
                    $set: {
                        signal: signal, 
                        title: title, 
                        subtitle: subtitle, 
                        description: description,
                        coverimage: imageUrl,
                    }
                },
                { new: true } 
            );
        }

        console.log(updatedUser);
        res.json({ status: 'success' });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});


app.post("/saveabout", async(req, res) => {
    try {
        const { date, address, emailAddress, education, signal, userID, name,aboutfile,aboutcolor } = req.body;
        console.log("We are inside nodejs saveabout function")
        console.log(date)
        console.log(address)
        console.log(emailAddress)
        console.log(education)
        console.log(signal)
        console.log(name)
        console.log(userID)
        console.log(aboutfile)
        console.log(aboutcolor)


        if (!(aboutfile == null)){
            const buffer = Buffer.from(aboutfile, 'base64');
            const fileName = userID + '-' + Date.now() + '.png'; 
            const filePath = path.join(__dirname, 'uploads', fileName);
    
            fs.writeFileSync(filePath, buffer);
    
            const imageUrl = `http://192.249.29.120:4000/uploads/${fileName}`;
            console.log(imageUrl);

            const updatedUser = await User.findOneAndUpdate(
                { email: userID }, 
                { 
                    $set: {
                        date: date, 
                        address: address, 
                        emailAddress: emailAddress, 
                        education: education,
                        signal: signal,
                        name: name,
                        aboutfile: imageUrl,
                        aboutcolor:aboutcolor
                    }
                },
                { new: true } 
            );
        } else{
            const updatedUser = await User.findOneAndUpdate(
                { email: userID }, 
                { 
                    $set: {
                        date: date, 
                        address: address, 
                        emailAddress: emailAddress, 
                        education: education,
                        signal: signal,
                        name: name,
                        aboutcolor:aboutcolor
                    }
                },
                { new: true } 
            );
        }

        console.log(updatedUser);
        res.json({ status: 'success'});

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
})

app.post("/saveskills", async(req, res) => {
    try {
        const { frontend, backend,others, userID,skillcolor } = req.body;
        console.log("We are inside nodejs saveskills function")
        console.log(frontend);
        console.log(backend);
        console.log(others);
        console.log(userID);
        console.log(skillcolor);
        

        const updatedUser = await User.findOneAndUpdate(
            { email: userID }, 
            { 
                $set: {
                    frontend: frontend,
                    backend: backend,
                    others: others,
                    skillcolor: skillcolor
                }
            },
            { new: true } 
        );

        console,log(updatedUser);

        res.json({ status: 'success'});

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
})

app.post("/saveproject", async(req, res) => {
    try {
        const { projects, signal,userID,projectcolor } = req.body;
        console.log("We are inside nodejs saveproject function")
        console.log(userID);
        console.log(signal);
        console.log(projects);
        console.log(projectcolor);

        for (let i=0; i<projects.length; i++) {
            const image = projects[i].file;

            const buffer = Buffer.from(image, 'base64');
            const fileName = userID + '-' + Date.now() + '.png'; 
            const filePath = path.join(__dirname, 'uploads', fileName);

            fs.writeFileSync(filePath, buffer);

            const imageUrl = `http://192.249.29.120:4000/uploads/${fileName}`;

            projects[i].file = imageUrl;
        }

        const updatedUser = await User.findOneAndUpdate(
            { email: userID }, 
            { 
                $set: {
                    projects: projects,
                    signal: signal,
                    projectcolor: projectcolor
                }
            },
            { new: true } 
        );

        console,log(updatedUser);

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

        console.log(user);

        if (user) {
            res.status(200).json({ status: 'success', userData: user });
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